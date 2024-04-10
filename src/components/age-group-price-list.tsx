import AgeGroupPrice from "./form/age-group-price";
import styles from "./age-group-price-list.module.css";

const MIN_ROWS = 1;

export default function AgeGroupPriceList() {
  return (
    <div className={styles["container"]}>
      <div className={styles["rows"]}>
        {[...Array(3)].map((_, i) => (
          <AgeGroupPrice key={i} required={i <= MIN_ROWS - 1} index={i} />
        ))}
      </div>
    </div>
  );
}
