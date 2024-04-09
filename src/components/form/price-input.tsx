import { Input } from "../ui/input";
import { FormControl, FormLabel, FormItem, FormDescription, FormMessage } from "../ui/form";
import styles from "./price-input.module.css";

export default function PriceInput() {
  return (
    <FormItem>
      <FormLabel>入住費用 (每人每晚)</FormLabel>
      <FormControl>
        <div className={styles["currency"]}>TWD</div>
        <Input type="number" />
      </FormControl>
      <FormMessage>ddddd</FormMessage>
      <FormDescription>輸入 0 表示免費</FormDescription>
    </FormItem>
  );
}
