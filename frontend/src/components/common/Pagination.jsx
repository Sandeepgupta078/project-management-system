const Pagination = ({
  page,
  totalPages,
  onPageChange,
}) => {
  if (
    totalPages <= 1
  )
    return null;

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        disabled={page === 1}
        onClick={() =>
          onPageChange(
            page - 1
          )
        }
        className="rounded-xl border border-slate-200 px-4 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from(
        {
          length:
            totalPages,
        },
        (_, i) =>
          i + 1
      ).map((item) => (
        <button
          key={item}
          onClick={() =>
            onPageChange(
              item
            )
          }
          className={`h-10 w-10 rounded-xl transition ${
            page === item
              ? "bg-indigo-600 text-white"
              : "border border-slate-200 hover:bg-slate-50"
          }`}
        >
          {item}
        </button>
      ))}

      <button
        disabled={
          page ===
          totalPages
        }
        onClick={() =>
          onPageChange(
            page + 1
          )
        }
        className="rounded-xl border border-slate-200 px-4 py-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;