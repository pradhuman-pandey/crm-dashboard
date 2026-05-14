import type { PerformanceItem } from "./performance.types";

export const performanceData: PerformanceItem[] =
  [
    {
      id: "product-sales",

      title: "Product Sales",

      currentValue: 367,

      targetValue: 500,

      unit: "K",

      prefix: "$",

      description:
        "Sales target achieved!",
    },

    {
      id: "team-kpi",

      title: "Team KPI",

      currentValue: 64,

      targetValue: 100,

      unit: "%",

      description:
        "KPI target achieved!",
    },

    {
      id: "customer-satisfaction",

      title: "Customer Satisfaction",

      currentValue: 89,

      targetValue: 100,

      unit: "%",

      description:
        "Customers are very satisfied!",
    },
  ];