import {
  Calendar,
  Users,
  Paperclip,
  Trash2,
  Eye,
} from "lucide-react";

import { Link } from "react-router-dom";

import StatusBadge from "./StatusBadge";

const ProjectCard = ({
  project,
  isAdmin,
  onDelete,
}) => {
  return (
    <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            {project.title}
          </h2>

          <p className="mt-3 line-clamp-2 text-sm text-slate-500">
            {project.description}
          </p>
        </div>

        <StatusBadge
          status={project.status}
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl bg-slate-50 p-4 text-center">
        <div>
          <Users
            size={18}
            className="mx-auto mb-2 text-slate-400"
          />

          <p className="text-xs text-slate-400">
            Members
          </p>

          <p className="font-semibold text-slate-700">
            {project.assignedUsers
              ?.length || 0}
          </p>
        </div>

        <div>
          <Paperclip
            size={18}
            className="mx-auto mb-2 text-slate-400"
          />

          <p className="text-xs text-slate-400">
            Files
          </p>

          <p className="font-semibold text-slate-700">
            {project.attachments
              ?.length || 0}
          </p>
        </div>

        <div>
          <Calendar
            size={18}
            className="mx-auto mb-2 text-slate-400"
          />

          <p className="text-xs text-slate-400">
            End Date
          </p>

          <p className="text-sm font-semibold text-slate-700">
            {project.endDate
              ? new Date(
                project.endDate
              ).toLocaleDateString()
              : "-"}
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Link
          to={`/projects/${project._id}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        >
          <Eye size={16} />
          View
        </Link>

        {isAdmin && (
          <button
            onClick={() =>
              onDelete(
                project._id
              )
            }
            className="flex items-center justify-center rounded-xl bg-red-50 px-4 text-red-500 transition hover:bg-red-100"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;