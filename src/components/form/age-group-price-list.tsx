import { useMemo } from "react";
import AgeGroupPrice from "./age-group-price";
import styles from "./age-group-price-list.module.css";
import type { AgeGroupPriceType } from "../../schemas/form";
import { getNumberIntervals } from "../../utils/numberUtils";
import { DEFAULT_ITEM } from "../../constants";

interface Props {
  data: AgeGroupPriceType[];
  errors: Partial<Record<keyof AgeGroupPriceType, string>>[];
  onChange: (result: AgeGroupPriceType[]) => void;
}

export default function AgeGroupPriceList({ data, errors, onChange }: Props) {
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

  function removeIndex(index: number) {
    return function () {
      const updated = [...data];
      updated.splice(index, 1);
      onChange(updated);
    };
  }

  function handleAdd() {
    onChange([...data, DEFAULT_ITEM]);
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
            error={errors[i]}
            onRemove={removeIndex(i)}
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
