import { motion } from "framer-motion";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

import Card from "../../ui/Card/Card";

import RevenueMiniCard from "./RevenueMiniCard";

import RevenueTooltip from "./RevenueTooltip";

import { monthlyData } from "./revenue-expenses.data";
import RevenueExpensesSkeleton from "./RevenueExpensesSkeleton";
import { useDashboard } from "../../../context/DashboardContext";


const RevenueExpenses = () => {

  const {loading} = useDashboard()

  if (loading) {
    return (
      <RevenueExpensesSkeleton />
    )
  }
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        w-full
        xl:w-[98%]
      "
    >
      <Card className="p-2">

        <div
          className="
            mb-2
            flex
            items-center
            justify-between
          "
        >
          <div>
            <h2
              className="
                text-16
                font-semibold
                text-gray-800
              "
            >
              Revenue Overview
            </h2>

            <p
              className="
                text-xs
                text-gray-500
              "
            >
              Revenue vs expenses
            </p>
          </div>

          <div
            className="
              hidden
              items-center
              gap-4
              sm:flex
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-indigo-600
                "
              />

              <span
                className="
                  text-xs
                  text-gray-600
                "
              >
                Revenue
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-gray-400
                "
              />

              <span
                className="
                  text-xs
                  text-gray-600
                "
              >
                Expenses
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            mb-2
            grid
            grid-cols-2
            gap-3
          "
        >
          <RevenueMiniCard
            title="Revenue"
            value={3342}
            percentage={3.4}
            trend="up"
          />

          <RevenueMiniCard
            title="Expenses"
            value={3029}
            percentage={1.2}
            trend="down"
          />
        </div>

        <div className="h-[130px] w-full">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <ComposedChart
              data={monthlyData}
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#4f46e5"
                    stopOpacity={0.15}
                  />

                  <stop
                    offset="95%"
                    stopColor="#4f46e5"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fill: "#94a3b8",
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fill: "#94a3b8",
                }}
                tickFormatter={(value) =>
                  `${value / 1000}K`
                }
              />

              <Tooltip
                content={
                  <RevenueTooltip />
                }
              />

              {/* EXPENSES */}

              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#94a3b8"
                fill="none"
                strokeDasharray="4 4"
                strokeWidth={2}
              />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 5,
                }}
                animationDuration={1200}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.section>
  );
};

export default RevenueExpenses;