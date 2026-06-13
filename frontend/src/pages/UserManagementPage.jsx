import { useEffect, useState } from "react";

import { Search, Plus } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";

import AppLayout from "../components/layout/AppLayout.jsx";
import UserTable from "../components/users/UserTable.jsx";
import UserModal from "../components/users/UserModal.jsx";
import ConfirmDialog from "../components/common/ConfirmDialog.jsx";

import {
  fetchUsers,
  createUser,
  updateUser,
  removeUser,
} from "../features/users/userThunks";

const UserManagementPage = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.users);

  const [search, setSearch] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [editingUser, setEditingUser] = useState(null);

  const [deleteUserId, setDeleteUserId] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(
        fetchUsers({
          search,
        }),
      );
    }, 400);

    return () => clearTimeout(timeout);
  }, [dispatch, search]);

  const handleCreateUser = async (values) => {
    const result = await dispatch(createUser(values));

    if (createUser.fulfilled.match(result)) {
      toast.success("User created successfully");

      setShowCreateModal(false);

      dispatch(
        fetchUsers({
          search,
        }),
      );
    } else {
      toast.error(result.payload || "Failed to create user");
    }
  };

  const handleUpdateUser = async (values) => {
    const result = await dispatch(
      updateUser({
        id: editingUser._id,
        payload: values,
      }),
    );

    if (updateUser.fulfilled.match(result)) {
      toast.success("User updated successfully");

      setEditingUser(null);

      dispatch(
        fetchUsers({
          search,
        }),
      );
    } else {
      toast.error(result.payload || "Failed to update user");
    }
  };

  const confirmDeleteUser = async () => {
    const result = await dispatch(removeUser(deleteUserId));

    if (removeUser.fulfilled.match(result)) {
      toast.success("User deleted successfully");

      dispatch(
        fetchUsers({
          search,
        }),
      );
    } else {
      toast.error(result.payload || "Unable to delete user");
    }

    setDeleteUserId(null);
  };

  return (
    <AppLayout>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">User Management</h1>

          <p className="mt-2 text-slate-500">
            Manage platform users and permissions.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          <Plus size={18} />
          Add User
        </button>
      </div>

      <div className="mb-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
        <Search className="text-slate-400" size={18} />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      {loading ? (
        <div className="rounded-3xl bg-white p-10 text-center text-slate-400 shadow-sm">
          Loading users...
        </div>
      ) : (
        <UserTable
          users={users}
          onEdit={(user) => setEditingUser(user)}
          onDelete={(id) => setDeleteUserId(id)}
        />
      )}

      <UserModal
        isOpen={showCreateModal}
        title="Create User"
        loading={loading}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateUser}
      />

      <UserModal
        isOpen={!!editingUser}
        title="Edit User"
        user={editingUser}
        loading={loading}
        onClose={() => setEditingUser(null)}
        onSubmit={handleUpdateUser}
      />

      <ConfirmDialog
        isOpen={!!deleteUserId}
        title="Delete User"
        description="This action cannot be undone. Do you really want to delete this user?"
        confirmText="Delete"
        onConfirm={confirmDeleteUser}
        onCancel={() => setDeleteUserId(null)}
      />
    </AppLayout>
  );
};

export default UserManagementPage;
