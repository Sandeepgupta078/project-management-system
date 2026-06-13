import { FolderOpen } from "lucide-react";

const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl bg-white px-6 py-20 shadow-sm">
      <div className="rounded-full bg-slate-100 p-5">
        <FolderOpen
          size={40}
          className="text-slate-400"
        />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-slate-700">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-center text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;