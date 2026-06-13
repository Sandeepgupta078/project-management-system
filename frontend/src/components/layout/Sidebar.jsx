import { NavLink, useNavigate } from "react-router-dom";
import { FolderKanban, LogOut, X } from "lucide-react";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { ADMIN_MENU, USER_MENU } from "../../utils/constants";
import { logout } from "../../features/auth/authSlice";
import ConfirmDialog from "../common/ConfirmDialog";
import { useState } from "react";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAdmin } = useAuth();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const menu = isAdmin ? ADMIN_MENU : USER_MENU;

  const confirmLogout = () => {
    dispatch(logout());
    setShowLogoutModal(false);

    navigate("/");
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="border-b border-slate-100 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-indigo-600 p-3 text-white">
              <FolderKanban size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-800">PMS</h2>
              <p className="text-xs text-slate-400">Management System</p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-2 p-4">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={18} />
                {item.title}
              </NavLink>
            );
          })}
        </div>

        <div className="border-t border-slate-100 p-4">
          <div className="mb-4 rounded-xl bg-slate-50 p-3">
            <p className="font-semibold text-slate-700">{user?.name}</p>

            <p className="text-xs text-slate-400">{user?.role}</p>
          </div>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-100"
          >
            <LogOut size={18} />
            Logout
          </button>
          <div className="mt-4 text-center text-xs text-slate-400">
            PMS v1.0.0
          </div>
        </div>
      </aside>

      <ConfirmDialog
        isOpen={showLogoutModal}
        title="Logout"
        description="Are you sure you want to logout from your account?"
        confirmText="Logout"
        onConfirm={confirmLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </>
  );
};

export default Sidebar;
