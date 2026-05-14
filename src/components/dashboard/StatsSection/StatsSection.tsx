import {
  MapPin,
  Users,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import StatsCard from "../StatsCard";
import StatsSectionSkeleton from "./StatsSectionSkeleton";
import { useDashboard } from "../../../context/DashboardContext";

const statsData = [
  {
    title: "Total Product Sold",
    value: 3277,
    description:
      "Then last week",
    icon: MapPin,
    variant: "primary",
  },

  {
    title: "Total Users",
    value: "7.2K",
    description:
      "Then last week",
    icon: Users,
    variant: "success",
  },

  {
    title: "Total Revenue",
    value: "$12K",
    description:
      "Then last week",
    icon: DollarSign,
    variant: "warning",
  },

  {
    title: "Growth",
    value: "+24%",
    description:
      "Then last week",
    icon: TrendingUp,
    variant: "default",
  },
];

const StatsSection = () => {
  const {loading} = useDashboard()
   if (loading) {
    return (
      <StatsSectionSkeleton />
    );
  }
  return (
    <section
      className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {statsData.map((item) => (
        <StatsCard
          key={item.title}
          title={item.title}
          value={item.value}
          description={item.description}
          icon={item.icon}
          variant={item.variant as any}
        />
      ))}
    </section>
  );
};

export default StatsSection;