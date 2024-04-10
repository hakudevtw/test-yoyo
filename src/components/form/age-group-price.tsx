import AgeGroupSelect from "./age-group-select";
import PriceInput from "./price-input";
import styles from "./age-group-price.module.css";

interface Props {
  index: number;
  required?: boolean;
}

export default function AgeGroupPrice({ index, required }: Props) {
  return (
    <div className={styles["container"]}>
      <header className={styles["header"]}>
        <h3>價格設定 - {index + 1}</h3>
        {!required && (
          <button className={styles["remove-btn"]}>
            <span>X</span>
            移除
          </button>
        )}
      </header>
      <div className={styles["form"]}>
        <AgeGroupSelect />
        <PriceInput />
      </div>
    </div>
  );
}
