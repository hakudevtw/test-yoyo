import { type ChangeEvent } from "react";
import { Input } from "../ui/input";
import { FormControl, FormLabel, FormItem, FormDescription, FormMessage } from "../ui/form";
import styles from "./price-input.module.css";
import type { AgeGroupPriceType } from "../../schemas/form";

interface Props {
  onChange?: (value: AgeGroupPriceType["price"]) => void;
}

// TODO Add comma when displaying and allow decimal
// TODO show error message
export default function PriceInput({ onChange }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (onChange) onChange(value);
  }

  return (
    <FormItem>
      <FormLabel>入住費用 (每人每晚)</FormLabel>
      <FormControl>
        <div className={styles["currency"]}>TWD</div>
        <Input type="number" onChange={handleChange} />
      </FormControl>
      <FormMessage>Error Message</FormMessage>
      <FormDescription>輸入 0 表示免費</FormDescription>
    </FormItem>
  );
}
