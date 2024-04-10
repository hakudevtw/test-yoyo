import AgeGroupSelect from "./age-group-select";
import PriceInput from "./price-input";
import styles from "./age-group-price.module.css";
import type { AgeGroupPriceType } from "../../schemas/form";
import { useId } from "react";

interface Props {
  index: number;
  required?: boolean;
  onRemove: () => void;
  value: AgeGroupPriceType;
  onChange?: (result: AgeGroupPriceType) => void;
}

export default function AgeGroupPrice({ index, required, value, onChange, onRemove }: Props) {
  const id = useId();

  function handleChange<T extends AgeGroupPriceType>(type: keyof T, val: T[keyof T]) {
    const updated = { ...value, [type]: val };
    if (onChange) onChange(updated);
  }

  return (
    <div key={id} className={styles["container"]}>
      <header className={styles["header"]}>
        <h3>價格設定 - {index + 1}</h3>
        {!required && (
          <button className={styles["remove-btn"]} onClick={onRemove}>
            <span>X</span>
            移除
          </button>
        )}
      </header>
      <div className={styles["form"]}>
        <AgeGroupSelect
          range={value.ageGroup}
          onChange={(value) => handleChange("ageGroup", value)}
        />
        <PriceInput value={value.price} onChange={(value) => handleChange("price", value)} />
      </div>
    </div>
  );
}
