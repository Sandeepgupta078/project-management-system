import { Pencil, Trash2 } from "lucide-react";

import UserRoleBadge from "./UserRoleBadge";

const UserTable = ({ users = [], onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <table className="w-full">
        <thead className="border-b border-slate-100 bg-slate-50">
          <tr className="text-left text-sm font-medium text-slate-500">
            <th className="p-5">Name</th>

            <th>Email</th>

            <th>Role</th>

            <th className="w-40">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-slate-50 transition hover:bg-slate-50"
              >
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                      {user.name?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>
                      <p className="font-medium text-slate-700">{user.name}</p>
                    </div>
                  </div>
                </td>

                <td className="text-slate-600">{user.email}</td>

                <td>
                  <UserRoleBadge role={user.role} />
                </td>

                <td>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(user)}
                      className="rounded-lg p-2 transition hover:bg-slate-100"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => onDelete(user._id)}
                      className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-10 text-center text-slate-400">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
