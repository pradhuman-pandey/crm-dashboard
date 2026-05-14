import type { LucideIcon } from "lucide-react";

export interface RevenueMiniCardProps {
  title: string;

  value: number;

  percentage: number;

  trend: "up" | "down";

  icon?: LucideIcon;
}