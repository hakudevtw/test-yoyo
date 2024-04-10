import { FormControl, FormLabel, FormItem, FormMessage } from "../ui/form";
import { Select, Option } from "../ui/select";
import styles from "./age-group-select.module.css";

interface Props {}

export default function AgeGroupSelect({}: Props) {
  return (
    <FormItem>
      <FormLabel>年齡</FormLabel>
      <FormControl>
        <Select>
          <Option>0</Option>
          <Option>1</Option>
          <Option>2</Option>
        </Select>
        <div className={styles["separator"]}>~</div>
        <Select>
          <Option>0</Option>
          <Option>1</Option>
          <Option>2</Option>
        </Select>
      </FormControl>
      <FormMessage>Error Message</FormMessage>
    </FormItem>
  );
}
