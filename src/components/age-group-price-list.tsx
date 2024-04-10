import AgeGroupPrice from "./form/age-group-price";
import styles from "./age-group-price-list.module.css";

const MOCK_ROWS = [...Array(3)];
const MIN_ROWS = 1;
const MAX_ROWS = 4;

export default function AgeGroupPriceList() {
  function handleAdd() {
    console.log("add");
  }

  function handleRemove(index: number) {
    console.log("remove", index);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["rows"]}>
        {MOCK_ROWS.map((_, i) => (
          <AgeGroupPrice key={i} required={i <= MIN_ROWS - 1} index={i} onRemove={handleRemove} />
        ))}
      </div>

      <footer>
        {MOCK_ROWS.length < MAX_ROWS && (
          <button className={styles["add-btn"]} onClick={handleAdd}>
            <span>+</span>新增價格設定
          </button>
        )}
      </footer>
    </div>
  );
}
