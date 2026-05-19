export interface PerformanceItem {
  id: string;

  title: string;

  currentValue: number;

  targetValue: number;

  unit: string;

  prefix?: string;

  description: string;

  className?:string;
}