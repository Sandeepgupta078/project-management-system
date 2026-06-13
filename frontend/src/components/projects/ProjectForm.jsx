import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Calendar, UploadCloud } from "lucide-react";

import toast from "react-hot-toast";

import Button from "../common/Button";
import Input from "../common/Input";

import { getUsersForSelectApi } from "../../api/userApi";

const ProjectForm = ({ loading, onSubmit }) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: "Pending",
    },
  });

  const [users, setUsers] = useState([]);

  const [selectedUsers, setSelectedUsers] = useState([]);

  const [files, setFiles] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await getUsersForSelectApi();

        setUsers(response.data.users || []);
      } catch (error) {
        toast.error("Unable to load users");
      }
    };

    loadUsers();
  }, []);

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files);

    if (selected.length === 0) {
      return;
    }

    if (selected.length > 3) {
      toast.error("Maximum 3 files allowed.");
      return;
    }

    setFiles(selected);
  };

  const submitHandler = (values) => {
    if (selectedUsers.length === 0) {
      setError("assignedUsers", {
        type: "manual",
        message: "Please assign at least one user",
      });

      return;
    }

    if (files.length === 0) {
      setError("attachments", {
        type: "manual",
        message: "Please upload at least one attachment",
      });

      return;
    }

    const formData = new FormData();

    formData.append("title", values.title);

    formData.append("description", values.description);

    formData.append("status", values.status);

    formData.append("startDate", values.startDate);

    formData.append("endDate", values.endDate);

    formData.append("assignedUsers", JSON.stringify(selectedUsers));

    files.forEach((file) => {
      formData.append("attachments", file);
    });

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label="Project Title"
            placeholder="Enter project title"
            error={errors.title?.message}
            {...register("title", {
              required: "Project title is required",
            })}
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Status
            </label>

            <select
              className="w-full rounded-xl border border-slate-200 p-3 focus:border-indigo-500"
              {...register("status", {
                required: "Status is required",
              })}
            >
              <option value="">Select Status</option>

              <option value="Pending">Pending</option>

              <option value="In Progress">In Progress</option>

              <option value="Completed">Completed</option>
            </select>

            {errors.status && (
              <p className="mt-1 text-sm text-red-500">
                {errors.status.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Assign Users
            </label>

            <select
              multiple
              className={`h-36 w-full rounded-xl border p-3 ${
                errors.assignedUsers ? "border-red-500" : "border-slate-200"
              }`}
              onChange={(e) => {
                const values = Array.from(e.target.selectedOptions).map(
                  (option) => option.value,
                );

                setSelectedUsers(values);

                if (values.length > 0) {
                  clearErrors("assignedUsers");
                }
              }}
            >
              {users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name} -{user.email}
                </option>
              ))}
            </select>

            {errors.assignedUsers && (
              <p className="mt-1 text-sm text-red-500">
                {errors.assignedUsers.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Description
          </label>

          <textarea
            rows="5"
            className="w-full rounded-xl border border-slate-200 p-4 focus:border-indigo-500"
            placeholder="Describe your project..."
            {...register("description", {
              required: "Description is required",
            })}
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
              <Calendar size={16} />
              Start Date
            </label>

            <input
              type="date"
              className="w-full rounded-xl border border-slate-200 p-3 focus:border-indigo-500"
              {...register("startDate", {
                required: "Start date is required",
              })}
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
              <Calendar size={16} />
              End Date
            </label>

            <input
              type="date"
              className="w-full rounded-xl border border-slate-200 p-3 focus:border-indigo-500"
              {...register("endDate", {
                required: "End date is required",
              })}
            />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center transition hover:border-indigo-400">
          <UploadCloud size={40} className="mx-auto text-slate-400" />

          <h3 className="mt-4 font-semibold text-slate-700">
            Upload Attachments
          </h3>

          <p className="mt-2 text-sm text-slate-400">Maximum 3 files.</p>

          <input
            type="file"
            multiple
            className="mt-4"
            onChange={(e) => {
              handleFiles(e);

              if (e.target.files.length > 0) {
                clearErrors("attachments");
              }
            }}
          />

          {errors.attachments && (
            <p className="mt-2 text-sm text-red-500">
              {errors.attachments.message}
            </p>
          )}

          {files.length > 0 && (
            <div className="mt-4 space-y-2 text-left">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-slate-100 px-3 py-2 text-sm"
                >
                  {file.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8">
          <Button type="submit" loading={loading}>
            Create Project
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
