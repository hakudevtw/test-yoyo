import { type ComponentProps } from "react";
import styles from "./input.module.css";
import cn from "clsx";

interface Props extends ComponentProps<"input"> {}

export function Input({ className, ...props }: Props) {
  return <input type="text" className={cn(styles["input"], className)} {...props} />;
}
