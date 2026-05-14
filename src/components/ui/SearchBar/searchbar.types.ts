import type { InputHTMLAttributes } from "react";

export interface SearchBarProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}