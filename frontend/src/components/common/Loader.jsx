const Loader = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <div key={index} className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="h-6 w-2/3 animate-pulse rounded-lg bg-slate-200"></div>

          <div className="mt-5 h-4 w-full animate-pulse rounded-lg bg-slate-100"></div>

          <div className="mt-3 h-4 w-4/5 animate-pulse rounded-lg bg-slate-100"></div>

          <div className="mt-8 flex gap-4">
            <div className="h-10 flex-1 animate-pulse rounded-xl bg-slate-100"></div>

            <div className="h-10 w-10 animate-pulse rounded-xl bg-slate-100"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
