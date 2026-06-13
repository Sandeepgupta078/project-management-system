const EndingSoonTable = ({
    projects = [],
  }) => {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-800">
            Ending Soon
          </h3>
        </div>
  
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 text-left text-sm text-slate-400">
                <th className="pb-3">
                  Project
                </th>
                <th className="pb-3">
                  Status
                </th>
                <th className="pb-3">
                  End Date
                </th>
              </tr>
            </thead>
  
            <tbody>
              {projects.length ===
              0 ? (
                <tr>
                  <td
                    colSpan="3"
                    className="py-8 text-center text-slate-400"
                  >
                    No upcoming
                    deadlines.
                  </td>
                </tr>
              ) : (
                projects.map(
                  (
                    project
                  ) => (
                    <tr
                      key={
                        project._id
                      }
                      className="border-b border-slate-50"
                    >
                      <td className="py-4 font-medium text-slate-700">
                        {
                          project.title
                        }
                      </td>
  
                      <td className="py-4">
                        {
                          project.status
                        }
                      </td>
  
                      <td className="py-4 text-slate-500">
                        {new Date(
                          project.endDate
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default EndingSoonTable;