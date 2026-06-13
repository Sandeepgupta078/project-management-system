import { useEffect } from "react";

import { Users, FolderKanban, Clock3, CircleCheckBig } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";

import AppLayout from "../components/layout/AppLayout";
import StatsCard from "../components/dashboard/StatsCard";
import ProjectStatusChart from "../components/dashboard/ProjectStatusChart";
import EndingSoonTable from "../components/dashboard/EndingSoonTable";

import { fetchDashboard } from "../features/dashboard/dashboardThunks";
import usePageTitle from "../hooks/usePageTitle";

const DashboardPage = () => {
  usePageTitle("Dashboard");

  const dispatch = useDispatch();

  const { analytics, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  if (loading && !analytics) {
    return (
      <AppLayout>
        <div className="text-center text-slate-500">Loading dashboard...</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Users"
          value={analytics?.totalUsers || 0}
          icon={Users}
          color="bg-indigo-600"
        />

        <StatsCard
          title="Projects"
          value={analytics?.totalProjects || 0}
          icon={FolderKanban}
          color="bg-sky-600"
        />

        <StatsCard
          title="Pending"
          value={analytics?.projectStatus?.Pending || 0}
          icon={Clock3}
          color="bg-amber-500"
        />

        <StatsCard
          title="Completed"
          value={analytics?.projectStatus?.Completed || 0}
          icon={CircleCheckBig}
          color="bg-emerald-600"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
        <ProjectStatusChart data={analytics?.projectStatus} />

        <EndingSoonTable projects={analytics?.endingSoonProjects || []} />
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
