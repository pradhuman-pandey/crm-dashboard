import type {
  ReactNode,
  MouseEventHandler,
  ButtonHTMLAttributes,
} from "react";

export interface ButtonProps {
  children: ReactNode;

  variant?: "primary" | "secondary" | "outline" | "ghost";

  size?: "sm" | "md" | "lg";

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  className?: string;

  disabled?: boolean;

  onClick?: MouseEventHandler<HTMLButtonElement>;

  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}