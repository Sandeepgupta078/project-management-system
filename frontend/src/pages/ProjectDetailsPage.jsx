import {
  useEffect,
} from "react";

import {
  Calendar,
  ArrowLeft,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import AppLayout from "../components/layout/AppLayout";

import Loader from "../components/common/Loader";

import AssignedUsers from "../components/projects/AssignedUsers";
import AttachmentList from "../components/projects/AttachmentList";
import ProjectStatusUpdater from "../components/projects/ProjectStatusUpdater";
import StatusBadge from "../components/projects/StatusBadge";

import useAuth from "../hooks/useAuth";

import {
  fetchProjectById,
} from "../features/projects/projectThunks";

const ProjectDetailsPage =
  () => {
    const {
      id,
    } = useParams();

    const dispatch =
      useDispatch();

    const {
      isAdmin,
    } = useAuth();

    const {
      loading,
      selectedProject,
    } = useSelector(
      (
        state
      ) =>
        state.projects
    );

    useEffect(() => {
      dispatch(
        fetchProjectById(
          id
        )
      );
    }, [
      dispatch,
      id,
    ]);

    if (
      loading ||
      !selectedProject
    ) {
      return (
        <AppLayout>
          <Loader />
        </AppLayout>
      );
    }

    return (
      <AppLayout>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              to="/projects"
              className="mb-4 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600"
            >
              <ArrowLeft
                size={16}
              />
              Back to Projects
            </Link>

            <h1 className="text-4xl font-bold text-slate-800">
              {
                selectedProject.title
              }
            </h1>

            <div className="mt-4">
              <StatusBadge
                status={
                  selectedProject.status
                }
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <div className="xl:col-span-2 space-y-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-800">
                Description
              </h2>

              <p className="leading-8 text-slate-600">
                {
                  selectedProject.description
                }
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-800">
                Assigned Members
              </h2>

              <AssignedUsers
                users={
                  selectedProject.assignedUsers
                }
              />
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-slate-800">
                Attachments
              </h2>

              <AttachmentList
                attachments={
                  selectedProject.attachments
                }
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-lg font-bold text-slate-800">
                Project Timeline
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar
                    size={18}
                    className="text-slate-400"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Start Date
                    </p>

                    <p className="font-medium">
                      {new Date(
                        selectedProject.startDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar
                    size={18}
                    className="text-slate-400"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      End Date
                    </p>

                    <p className="font-medium">
                      {new Date(
                        selectedProject.endDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {!isAdmin && (
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <ProjectStatusUpdater
                  projectId={
                    selectedProject._id
                  }
                  currentStatus={
                    selectedProject.status
                  }
                />
              </div>
            )}
          </div>
        </div>
      </AppLayout>
    );
  };

export default ProjectDetailsPage;