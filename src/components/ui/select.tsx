import { type ComponentProps } from "react";
import cn from "clsx";
import styles from "./select.module.css";

interface SelectProps extends ComponentProps<"select"> {}
interface OptionProps extends ComponentProps<"option"> {}

export function Select({ children, className, ...props }: SelectProps) {
  return (
    <select className={cn(styles["select"], className)} {...props}>
      {children}
    </select>
  );
}

export function Option({ children, className, ...props }: OptionProps) {
  return (
    <option className={cn(styles["option"], className)} {...props}>
      {children}
    </option>
  );
}
