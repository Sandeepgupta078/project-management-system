import {
  useForm,
} from "react-hook-form";

const UserForm = ({
  defaultValues = {},
  loading,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-4"
    >
      <input
        {...register(
          "name"
        )}
        placeholder="Full Name"
        className="w-full rounded-xl border p-3"
      />

      <input
        {...register(
          "email"
        )}
        placeholder="Email"
        className="w-full rounded-xl border p-3"
      />

      {!defaultValues?._id && (
        <input
          type="password"
          {...register(
            "password"
          )}
          placeholder="Password"
          className="w-full rounded-xl border p-3"
        />
      )}

      <select
        {...register(
          "role"
        )}
        className="w-full rounded-xl border p-3"
      >
        <option value="User">
          User
        </option>

        <option value="Admin">
          Admin
        </option>
      </select>

      <button
        type="submit"
        disabled={
          loading
        }
        className="w-full rounded-xl bg-indigo-600 py-3 text-white"
      >
        {loading
          ? "Please wait..."
          : defaultValues?._id
          ? "Update User"
          : "Create User"}
      </button>
    </form>
  );
};

export default UserForm;