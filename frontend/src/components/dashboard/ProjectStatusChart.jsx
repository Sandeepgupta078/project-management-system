import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#f59e0b", "#3b82f6", "#10b981"];

const ProjectStatusChart = ({ data }) => {
  const chartData = [
    {
      name: "Pending",
      value: data?.Pending || 0,
    },
    {
      name: "In Progress",
      value: data?.["In-Progress"] || 0,
    },
    {
      name: "Completed",
      value: data?.Completed || 0,
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-bold text-slate-800">Project Status</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              outerRadius={90}
              innerRadius={55}
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectStatusChart;
