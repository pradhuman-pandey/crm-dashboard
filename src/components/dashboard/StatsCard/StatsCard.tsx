import { motion } from "framer-motion";
import clsx from "clsx";

import Card from "../../ui/Card/Card";

import type { StatsCardProps } from "./stats-card.types";

const variantStyles = {
  default: {
    card: "bg-white border-gray-200",
    value: "text-gray-800",
    icon: "bg-gray-100 text-gray-700",
  },

  primary: {
    card: "bg-indigo-50 border-indigo-100",
    value: "text-indigo-700",
    icon: "bg-indigo-100 text-indigo-700",
  },

  success: {
    card: "bg-green-50 border-green-100",
    value: "text-green-700",
    icon: "bg-green-100 text-green-700",
  },

  warning: {
    card: "bg-yellow-50 border-yellow-100",
    value: "text-yellow-700",
    icon: "bg-yellow-100 text-yellow-700",
  },
};

const StatsCard = ({
  title,
  value,
  description,
  icon: Icon,
  variant = "default",
  className,
}: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Card
        className={clsx(
          `
          transition-all
          duration-300
          hover:shadow-lg
        `,
          variantStyles[variant].card,
          className
        )}
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
                text-[12px]
                font-medium
                text-gray-500
              "
            >
              {title}
            </p>

            <h2
              className={clsx(
                `
                mt-2
                text-xl
                font-bold
              `,
                variantStyles[variant].value
              )}
            >
              {value}
            </h2>
          </div>

          {Icon && (
            <div
              className={clsx(
                `
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-xl
              `,
                variantStyles[variant].icon
              )}
            >
              <Icon size={20} />
            </div>
          )}
        </div>

        <p
          className="
            mt-4
            text-sm
            leading-relaxed
            text-gray-600
          "
        >
          {description}
        </p>
      </Card>
    </motion.div>
  );
};

export default StatsCard;