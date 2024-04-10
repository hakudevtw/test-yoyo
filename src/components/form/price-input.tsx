import { type ChangeEvent } from "react";
import { Input } from "../ui/input";
import { FormControl, FormLabel, FormItem, FormDescription, FormMessage } from "../ui/form";
import styles from "./price-input.module.css";
import type { AgeGroupPriceType } from "../../schemas/form";

interface Props {
  value: AgeGroupPriceType["price"];
  onChange: (value: AgeGroupPriceType["price"]) => void;
  error?: string;
}

// TODO Add comma when displaying and allow decimal
export default function PriceInput({ value, error, onChange }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    onChange(value);
  }

  return (
    <FormItem hasError={!!error}>
      <FormLabel>入住費用 (每人每晚)</FormLabel>
      <FormControl>
        <div className={styles["currency"]}>TWD</div>
        <Input type="number" onChange={handleChange} value={value} />
      </FormControl>
      <FormMessage className={error ? "" : "hide"}>{error}</FormMessage>
      <FormDescription>輸入 0 表示免費</FormDescription>
    </FormItem>
  );
}
