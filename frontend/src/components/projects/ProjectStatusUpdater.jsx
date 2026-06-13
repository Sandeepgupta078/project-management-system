import {
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  useDispatch,
} from "react-redux";

import {
  updateProjectStatus,
} from "../../features/projects/projectThunks";

const ProjectStatusUpdater =
  ({
    projectId,
    currentStatus,
  }) => {
    const dispatch =
      useDispatch();

    const [
      status,
      setStatus,
    ] = useState(
      currentStatus
    );

    const handleChange =
      async (e) => {
        const newStatus =
          e.target.value;

        setStatus(
          newStatus
        );

        const result =
          await dispatch(
            updateProjectStatus(
              {
                id: projectId,
                payload:
                  {
                    status:
                      newStatus,
                  },
              }
            )
          );

        if (
          updateProjectStatus.fulfilled.match(
            result
          )
        ) {
          toast.success(
            "Status updated successfully"
          );
        } else {
          toast.error(
            "Unable to update status"
          );
        }
      };

    return (
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Update Status
        </label>

        <select
          value={status}
          onChange={
            handleChange
          }
          className="w-full rounded-xl border border-slate-200 p-3 focus:border-indigo-500"
        >
          <option value="Pending">
            Pending
          </option>

          <option value="In-Progress">
            In Progress
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>
      </div>
    );
  };

export default ProjectStatusUpdater;