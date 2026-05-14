import ProgressBar from "../../ui/ProgressBar";

import type { PerformanceItem } from "./performance.types";

interface PerformanceCardProps {
  item: PerformanceItem;
}

const PerformanceCard = ({
  item,
}: PerformanceCardProps) => {
  const progress =
    (item.currentValue /
      item.targetValue) *
    100;

  const formattedCurrent = `
    ${item.prefix || ""}
    ${item.currentValue}
    ${item.unit}
  `;

  const formattedTarget = `
    ${item.prefix || ""}
    ${item.targetValue}
    ${item.unit}
  `;

  return (
    <div
      className="
        border-b
        border-gray-100
        pb-3
        last:border-none
        last:pb-0
      "
    >
      {/* TOP */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-2
        "
      >
        {/* LEFT */}

        <div className="min-w-0 flex-1">
          <h3
            className="
              truncate
              text-xs
              font-semibold
              text-gray-800
            "
          >
            {item.title}
          </h3>

          <p
            className="
              text-[10px]
              text-gray-500
            "
          >
            <span className="font-semibold">
              {formattedCurrent}
            </span>

            {" / "}

            {formattedTarget}
          </p>
        </div>

        {/* RIGHT */}

        <div
          className="
            shrink-0
            rounded-full
            bg-green-50
            px-2
            py-[2px]
            text-[10px]
            font-medium
            text-green-600
          "
        >
          {Math.round(progress)}%
        </div>
      </div>

      {/* PROGRESS */}

      <div className="mt-1.5">
        <ProgressBar
          value={item.currentValue}
          max={item.targetValue}
          showPercentage={false}
          barColor="bg-emerald-500"
          height="h-1"
        />
      </div>
    </div>
  );
};

export default PerformanceCard;