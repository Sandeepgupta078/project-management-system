import {
  Menu,
  Bell,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

const Navbar = ({
  setMobileOpen,
}) => {
  const { user } =
    useAuth();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() =>
              setMobileOpen(
                true
              )
            }
            className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Dashboard
            </h1>

            <p className="hidden text-sm text-slate-400 sm:block">
              Welcome back,{" "}
              {user?.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="rounded-full bg-slate-100 p-3 transition hover:bg-slate-200">
            <Bell size={18} />
          </button>

          <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-3 py-2 sm:px-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 font-bold text-white shadow">
              {user?.name
                ?.charAt(0)
                ?.toUpperCase()}
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-semibold text-slate-700">
                {user?.name}
              </p>

              <p className="text-xs text-slate-400">
                {user?.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;