import AgeGroupPrice from "./form/age-group-price";
import styles from "./age-group-price-list.module.css";

interface Props {}

export default function AgeGroupPriceList() {
  const MIN_ROWS = 1;

  function handleRemove(index: number) {
    console.log("remove", index);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["rows"]}>
        {[...Array(3)].map((_, i) => (
          <AgeGroupPrice key={i} required={i <= MIN_ROWS - 1} index={i} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}
