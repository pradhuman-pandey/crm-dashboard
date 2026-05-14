import { motion } from "framer-motion";

import type { ProgressBarProps } from "./progress-bar.types";

const ProgressBar = ({
  value,
  max = 100,
  label,
  showPercentage = true,
  barColor = "bg-indigo-600",
  backgroundColor = "bg-gray-200",
  height = "h-2.5",
  rounded = "rounded-full",
  className = "",
}: ProgressBarProps) => {
  const percentage = Math.min(
    100,
    Math.max(0, (value / max) * 100)
  );

  return (
    <div className={`w-full ${className}`}>
      {/* LABEL */}

      {label && (
        <div
          className="
            mb-1
            flex
            items-center
            justify-between
            text-sm
            font-medium
            text-gray-700
          "
        >
          <span>{label}</span>

          {showPercentage && (
            <span>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* TRACK */}

      <div
        className={`
          overflow-hidden
          ${backgroundColor}
          ${height}
          ${rounded}
        `}
      >
        {/* ANIMATED PROGRESS */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${percentage}%`,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className={`
            ${barColor}
            ${height}
            ${rounded}
          `}
        />
      </div>

      {/* PERCENTAGE */}

      {!label && showPercentage && (
        <div
          className="
            mt-1
            text-right
            text-xs
            text-gray-500
          "
        >
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;