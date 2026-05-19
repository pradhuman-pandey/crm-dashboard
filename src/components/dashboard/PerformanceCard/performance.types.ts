export interface PerformanceItem {
  id: string;

  title: string;

  currentValue: number;

  targetValue: number;

  unit: string;

  prefix?: string;

  description: string;

<<<<<<< HEAD
  className:string;
=======
  className?:string;
>>>>>>> 3261a0178930779167cecddf93b7e411a83b4ee4
}