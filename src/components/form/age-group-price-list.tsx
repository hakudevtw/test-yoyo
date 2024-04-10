import { useMemo } from "react";
import AgeGroupPrice from "./age-group-price";
import styles from "./age-group-price-list.module.css";
import type { AgeGroupPriceType } from "../../schemas/form";
import { getNumberIntervals } from "../../utils/numberUtils";
import { MAX_AGE, MIN_AGE } from "./age-group-select";

interface Props {
  data: AgeGroupPriceType[];
  onChange: (result: AgeGroupPriceType[]) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  minRows?: number;
  maxRows?: number;
}

export default function AgeGroupPriceList({ data, onAdd, onRemove, onChange }: Props) {
  const MIN_ROWS = 1;
  const MAX_ROWS = 3;

  const isFullRange = useMemo(() => {
    const { notInclude } = getNumberIntervals(data.map((item) => item.ageGroup));
    return notInclude.length === 0;
  }, [data]);

  function updateIndex(index: number) {
    return function handleChange(value: AgeGroupPriceType) {
      const updated = [...data];
      updated[index] = value;
      onChange(updated);
    };
  }

  const rowIsFull = data.length >= MAX_ROWS;
  const addDisabled = rowIsFull || isFullRange;
  return (
    <div className={styles["container"]}>
      <div className={styles["rows"]}>
        {data.map((item, i) => (
          <AgeGroupPrice
            key={i}
            index={i}
            required={i <= MIN_ROWS - 1}
            value={item}
            onRemove={() => onRemove(i)}
            onChange={updateIndex(i)}
          />
        ))}
      </div>

      <footer>
        <button className={styles["add-btn"]} onClick={onAdd} disabled={addDisabled}>
          <span>+</span>新增價格設定
        </button>
      </footer>
    </div>
  );
}
