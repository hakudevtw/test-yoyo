import { type ComponentProps } from "react";
import styles from "./form.module.css";
import cn from "clsx";

interface FormItemProps extends ComponentProps<"div"> {
  hasError?: boolean;
}
export function FormItem({ hasError, className, children, ...props }: FormItemProps) {
  return (
    <div className={cn(styles["form-item"], hasError && styles["error"], className)} {...props}>
      {children}
    </div>
  );
}

interface FormLabelProps extends ComponentProps<"label"> {}
export function FormLabel({ className, children, ...props }: FormLabelProps) {
  return (
    <label className={cn(styles["form-label"], className)} {...props}>
      {children}
    </label>
  );
}

interface FormControlProps extends ComponentProps<"div"> {}
export function FormControl({ className, children, ...props }: FormControlProps) {
  return (
    <div className={cn(styles["form-control"], className)} {...props}>
      {children}
    </div>
  );
}

interface FormDescriptionProps extends ComponentProps<"p"> {}
export function FormDescription({ className, children, ...props }: FormDescriptionProps) {
  return (
    <p className={cn(styles["form-description"], className)} {...props}>
      {children}
    </p>
  );
}

interface FormMessageProps extends ComponentProps<"p"> {}
export function FormMessage({ className, children, ...props }: FormMessageProps) {
  return (
    <p className={cn(styles["form-message"], className)} {...props}>
      {children}
    </p>
  );
}
