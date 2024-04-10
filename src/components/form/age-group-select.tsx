import { useState, type ChangeEvent } from "react";
import type { AgeGroupPriceType, RangeType } from "../../schemas/form";
import { FormControl, FormLabel, FormItem, FormMessage } from "../ui/form";
import { Select, Option } from "../ui/select";
import styles from "./age-group-select.module.css";

interface Props {
  defaultValue?: RangeType;
  onChange?: (value: AgeGroupPriceType["ageGroup"]) => void;
}

export const MAX_AGE = 20;
export const MIN_AGE = 0;
const AGES = [...Array(MAX_AGE - MIN_AGE + 1)].map((_, i) => i);

// TODO show error message
export default function AgeGroupSelect({ defaultValue, onChange }: Props) {
  const [range, setRange] = useState<RangeType>([MIN_AGE, MAX_AGE]);

  function optionIsValid(position: 0 | 1, value: number) {
    if (position === 0 && value > range[1]) return false;
    if (position === 1 && value < range[0]) return false;
    return true;
  }

  function updateRange(position: 0 | 1) {
    return function handleChange(e: ChangeEvent<HTMLSelectElement>) {
      const updatedRange = [...range] as RangeType;
      const value = Number(e.target.value);
      updatedRange[position] = value;
      if (onChange) onChange(updatedRange);
      setRange(updatedRange);
    };
  }

  return (
    <FormItem>
      <FormLabel>年齡</FormLabel>
      <FormControl>
        <Select value={range[0]} onChange={updateRange(0)}>
          {AGES.map((age) => (
            <Option key={age} disabled={!optionIsValid(0, age)}>
              {age}
            </Option>
          ))}
        </Select>
        <div className={styles["separator"]}>~</div>
        <Select value={range[1]} onChange={updateRange(1)}>
          {AGES.map((age) => (
            <Option key={age} disabled={!optionIsValid(1, age)}>
              {age}
            </Option>
          ))}
        </Select>
      </FormControl>
      <FormMessage>Error Message</FormMessage>
    </FormItem>
  );
}
