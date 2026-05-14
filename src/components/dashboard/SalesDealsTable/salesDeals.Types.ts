export interface Deal {
  id: string;
  name: string;
  email: string;
  product: string;
  value: number;
  closeDate: string;
  status: "Completed" | "Pending";
}