const Button = ({ children, loading = false, className = "", ...props }) => {
  return (
    <button
      {...props}
      disabled={loading}
      className={`flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          Please wait...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
