const AssignedUsers = ({ users = [] }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {users.length === 0 ? (
        <p className="text-slate-400">No users assigned.</p>
      ) : (
        users.map((user) => (
          <div
            key={user._id}
            className="flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
              {user.name?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700">
                {user.name}
              </p>

              <p className="text-xs text-slate-400">{user.email}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AssignedUsers;
