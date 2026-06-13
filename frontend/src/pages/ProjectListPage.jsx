import { useEffect, useState } from "react";
import { Search, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import AppLayout from "../components/layout/AppLayout";
import Loader from "../components/common/Loader";
import EmptyState from "../components/common/EmptyState";
import ConfirmDialog from "../components/common/ConfirmDialog";
import ProjectCard from "../components/projects/ProjectCard";

import useAuth from "../hooks/useAuth";

import {
  fetchProjects,
  removeProject,
} from "../features/projects/projectThunks";

const ProjectListPage = () => {
  const dispatch = useDispatch();

  const { isAdmin } = useAuth();

  const { projects, loading } = useSelector(
    (state) => state.projects
  );

  const [search, setSearch] = useState("");

  // Confirmation Modal State
  const [
    deleteProjectId,
    setDeleteProjectId,
  ] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(
        fetchProjects({
          search,
        })
      );
    }, 400);

    return () =>
      clearTimeout(timeout);
  }, [dispatch, search]);

  const confirmDelete = async () => {
    if (!deleteProjectId) return;

    const result = await dispatch(
      removeProject(deleteProjectId)
    );

    if (
      removeProject.fulfilled.match(
        result
      )
    ) {
      toast.success(
        "Project deleted successfully"
      );
    } else {
      toast.error(
        result.payload ||
          "Unable to delete project"
      );
    }

    setDeleteProjectId(null);
  };

  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Projects
          </h1>

          <p className="mt-2 text-slate-500">
            Manage and track all your projects.
          </p>
        </div>

        {isAdmin && (
          <Link
            to="/projects/create"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
          >
            <Plus size={18} />
            New Project
          </Link>
        )}
      </div>

      {/* Search */}
      <div className="mb-8 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
        <Search
          size={18}
          className="text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="Search projects..."
          className="w-full bg-transparent outline-none"
        />
      </div>

      {/* Content */}
      {loading ? (
        <Loader />
      ) : projects?.length ===
        0 ? (
        <EmptyState
          title="No Projects Found"
          description="Create your first project to start managing your team's work."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(
            (project) => (
              <ProjectCard
                key={
                  project._id
                }
                project={
                  project
                }
                isAdmin={
                  isAdmin
                }
                onDelete={(
                  id
                ) =>
                  setDeleteProjectId(
                    id
                  )
                }
              />
            )
          )}
        </div>
      )}

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={
          !!deleteProjectId
        }
        title="Delete Project"
        description="This action cannot be undone. Do you really want to delete this project?"
        confirmText="Delete"
        onConfirm={
          confirmDelete
        }
        onCancel={() =>
          setDeleteProjectId(
            null
          )
        }
      />
    </AppLayout>
  );
};

export default ProjectListPage;