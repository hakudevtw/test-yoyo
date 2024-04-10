import { useState } from "react";
import AgeGroupPrice from "./age-group-price";
import styles from "./age-group-price-list.module.css";
import type { AgeGroupPriceType } from "../../schemas/form";

interface Props {
  onChange?: (result: AgeGroupPriceType[]) => void;
  minRows?: number;
  maxRows?: number;
}

const DEFAULT_ITEM: AgeGroupPriceType = { ageGroup: [0, 20], price: 0 };

export default function AgeGroupPriceList({ onChange }: Props) {
  const MIN_ROWS = 1;
  const MAX_ROWS = 3;

  const [result, setResult] = useState<AgeGroupPriceType[]>([DEFAULT_ITEM]);

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
  const addDisabled = rowIsFull;
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
