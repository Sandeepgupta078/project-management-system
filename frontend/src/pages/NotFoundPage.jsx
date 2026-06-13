import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="max-w-md rounded-3xl bg-white p-10 text-center shadow-lg">
        <h1 className="text-7xl font-bold text-indigo-600">404</h1>

        <h2 className="mt-4 text-2xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/dashboard"
          className="mt-8 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
