import clsx from "clsx";

import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface RevenueMiniCardProps {
  title: string;

  value: number;

  percentage: number;

  trend: "up" | "down";
}

const RevenueMiniCard = ({
  title,
  value,
  percentage,
  trend,
}: RevenueMiniCardProps) => {
  const isPositive = trend === "up";

  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-100
        bg-gray-50
        p-3
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
        "
      >
        <div>
          <p
            className="
              text-xs
              text-gray-500
            "
          >
            {title}
          </p>

          <h3
            className="
              mt-1
              text-xl
              font-bold
              text-gray-800
            "
          >
            ${value.toLocaleString()}
          </h3>
        </div>

        <div
          className={clsx(
            `
            flex
            items-center
            gap-1
            rounded-full
            px-2
            py-1
            text-xs
            font-medium
            `,
            isPositive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          )}
        >
          {isPositive ? (
            <TrendingUp size={12} />
          ) : (
            <TrendingDown size={12} />
          )}

          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default RevenueMiniCard;