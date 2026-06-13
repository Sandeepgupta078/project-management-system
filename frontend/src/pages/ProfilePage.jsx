import {
  useSelector,
} from "react-redux";

import AppLayout from "../components/layout/AppLayout";

const ProfilePage = () => {
  const { user } =
    useSelector(
      (
        state
      ) =>
        state.auth
    );

  return (
    <AppLayout>
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-sm">
        <div className="flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-indigo-600 text-4xl font-bold text-white">
            {user?.name
              ?.charAt(0)
              ?.toUpperCase()}
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-800">
            {user?.name}
          </h1>

          <p className="mt-2 text-slate-500">
            {user?.email}
          </p>

          <span className="mt-4 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            {user?.role}
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-400">
              Full Name
            </p>

            <p className="mt-2 font-semibold text-slate-700">
              {user?.name}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-400">
              Email Address
            </p>

            <p className="mt-2 font-semibold text-slate-700">
              {user?.email}
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;