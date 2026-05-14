import { motion } from "framer-motion";
import clsx from "clsx";

import type { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.styles";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <motion.button
     style={{border:"2px solid red"}}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        buttonVariants.base,
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {leftIcon && (
        <span className="flex items-center">
          {leftIcon}
        </span>
      )}

      <span>{children}</span>

      {rightIcon && (
        <span className="flex items-center">
          {rightIcon}
        </span>
      )}
    </motion.button>
  );
};

export default Button;