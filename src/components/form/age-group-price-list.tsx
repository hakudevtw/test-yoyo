import { useState, useMemo } from "react";
import AgeGroupPrice from "./age-group-price";
import styles from "./age-group-price-list.module.css";
import type { AgeGroupPriceType } from "../../schemas/form";
import { getNumberIntervals } from "../../utils/numberUtils";
import { MAX_AGE, MIN_AGE } from "./age-group-select";

interface Props {
  onChange?: (result: AgeGroupPriceType[]) => void;
  minRows?: number;
  maxRows?: number;
}

const DEFAULT_ITEM: AgeGroupPriceType = { ageGroup: [MAX_AGE, MIN_AGE], price: 0 };

export default function AgeGroupPriceList({ onChange }: Props) {
  const MIN_ROWS = 1;
  const MAX_ROWS = 3;

  const [result, setResult] = useState<AgeGroupPriceType[]>([DEFAULT_ITEM]);
  const isFullRange = useMemo(() => {
    const { notInclude } = getNumberIntervals(result.map((item) => item.ageGroup));
    return notInclude.length === 0;
  }, [result]);

  function updateIndex(index: number) {
    return function handleChange(value: AgeGroupPriceType) {
      const updated = [...result];
      updated[index] = value;
      setResult(updated);
      if (onChange) onChange(updated);
    };
  }

  function handleAdd() {
    setResult([...result, DEFAULT_ITEM]);
  }

  function handleRemove(index: number) {
    const updated = [...result];
    updated.splice(index, 1);
    setResult(updated);
  }

  const rowIsFull = result.length >= MAX_ROWS;
  const addDisabled = rowIsFull || isFullRange;
  return (
    <div className={styles["container"]}>
      <div className={styles["rows"]}>
        {result.map((item, i) => (
          <AgeGroupPrice
            key={i}
            index={i}
            required={i <= MIN_ROWS - 1}
            value={item}
            onRemove={handleRemove}
            onChange={updateIndex(i)}
          />
        ))}
      </div>

      <footer>
        <button className={styles["add-btn"]} onClick={handleAdd} disabled={addDisabled}>
          <span>+</span>新增價格設定
        </button>
      </footer>
    </div>
  );
}
