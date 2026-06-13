import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";

import AppLayout from "../components/layout/AppLayout";
import ProjectForm from "../components/projects/ProjectForm";

import { createProject } from "../features/projects/projectThunks";

const CreateProjectPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.projects);

  const handleSubmit = async (formData) => {
    const result = await dispatch(createProject(formData));

    if (createProject.fulfilled.match(result)) {
      toast.success("Project created successfully");

      navigate("/projects");
    } else {
      toast.error(result.payload || "Unable to create project");
    }
  };

  return (
    <AppLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Create New Project
        </h1>

        <p className="mt-2 text-slate-500">
          Fill the details below to create a new project.
        </p>
      </div>

      <ProjectForm loading={loading} onSubmit={handleSubmit} />
    </AppLayout>
  );
};

export default CreateProjectPage;
