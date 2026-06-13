const UserRoleBadge = ({
  role,
}) => {
  const styles = {
    Admin:
      "bg-violet-100 text-violet-700 border border-violet-200",
    User:
      "bg-emerald-100 text-emerald-700 border border-emerald-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        styles[role] ||
        styles.User
      }`}
    >
      {role}
    </span>
  );
};

export default UserRoleBadge;