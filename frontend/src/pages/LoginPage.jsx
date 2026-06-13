import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FolderKanban } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Input from "../components/common/Input";
import Button from "../components/common/Button";

import { loginUser } from "../features/auth/authThunks";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, token, error } =
    useSelector(
      (state) => state.auth
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (
    values
  ) => {
    const result =
      await dispatch(
        loginUser(values)
      );

    if (
      loginUser.fulfilled.match(
        result
      )
    ) {
      toast.success(
        "Login successful!"
      );

      navigate("/dashboard");
    } else {
      toast.error(
        result.payload ||
          "Login failed"
      );
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Section */}
      <div className="hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 p-16 text-white lg:flex lg:flex-col lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/20 p-3">
              <FolderKanban
                size={28}
              />
            </div>

            <h1 className="text-3xl font-bold">
              PMS
            </h1>
          </div>

          <div className="mt-20 max-w-md">
            <h2 className="text-5xl font-bold leading-tight">
              Manage Projects
              <br />
              Smarter &
              Faster.
            </h2>

            <p className="mt-6 text-lg text-indigo-100">
              Centralized
              project tracking,
              user management,
              analytics and
              collaboration in
              one platform.
            </p>
          </div>
        </div>

        <p className="text-sm text-indigo-200">
          © 2026 Project
          Management System
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center bg-slate-50 px-6 py-10">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-800">
            Welcome Back 👋
          </h2>

          <p className="mt-2 text-slate-500">
            Sign in to continue.
          </p>

          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
            className="mt-8 space-y-5"
          >
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              error={
                errors.email
                  ?.message
              }
              {...register(
                "email",
                {
                  required:
                    "Email is required",
                }
              )}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              error={
                errors.password
                  ?.message
              }
              {...register(
                "password",
                {
                  required:
                    "Password is required",
                }
              )}
            />

            <Button
              type="submit"
              loading={
                loading
              }
            >
              Login
            </Button>
          </form>

          <div className="mt-8 rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
            <p>
              <strong>
                Demo Admin
              </strong>
            </p>
            <p>
              admin@test.com
            </p>
            <p>
              Admin@123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;