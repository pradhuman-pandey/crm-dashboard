import { motion } from "framer-motion";

import Card from "../../ui/Card/Card";

import PerformanceCard from "./PerformanceCard";

import { performanceData } from "./performace.data";
import PerformanceSkeleton from "./PerformanceSkeleton";
import { useDashboard } from "../../../context/DashboardContext";

const Performance = () => {
  const {loading} = useDashboard()
    if (loading) {
  return <PerformanceSkeleton />;
}
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="
        w-full
      "
    >
      <Card className="p-2" >
        {/* HEADER */}

        <div className="mb-5">
          <h2
            className="
              text-lg
              font-semibold
              text-gray-800
            "
          >
            Performance
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            Track team performance
            metrics
          </p>
        </div>

        {/* LIST */}

        <div className="space-y-5">
          {performanceData.map((item) => (
            <PerformanceCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Card>
    </motion.section>
  );
};

export default Performance;