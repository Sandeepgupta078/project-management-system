import clsx from "clsx";

const Input = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        {...props}
        className={clsx(
          "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition-all duration-200",
          "focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100",
          error &&
            "border-red-400 focus:border-red-500 focus:ring-red-100",
          className
        )}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;