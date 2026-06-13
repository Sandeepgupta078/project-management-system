import { motion } from "framer-motion";

const StatsCard = ({
  title,
  value,
  icon,
  color,
}) => {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-800">
            {value}
          </h2>
        </div>

        <div
          className={`rounded-2xl p-4 ${color}`}
        >
          <Icon
            className="text-white"
            size={28}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;