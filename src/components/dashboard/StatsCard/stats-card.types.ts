import type { LucideIcon } from "lucide-react";

export interface StatsCardProps {
  title: string;

  value: string | number;

  description: string;

  icon?: LucideIcon;

  variant?:
    | "default"
    | "primary"
    | "success"
    | "warning";

  className?: string;
}