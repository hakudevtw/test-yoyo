import { useState } from "react";
import AgeGroupPriceList from "./components/form/age-group-price-list";
import type { AgeGroupPriceType } from "./schemas/form";
import styles from "./App.module.css";
import { DEFAULT_ITEM } from "./constants";
import { validateData } from "./utils/formUtils";

function App() {
  const [data, setData] = useState<AgeGroupPriceType[]>([DEFAULT_ITEM]);
  const [errors, setErrors] = useState<Partial<Record<keyof AgeGroupPriceType, string>>[]>([]);

  function handleValidate() {
    const errors = validateData(data);
    setErrors(errors);
  }

  function handleChange(value: AgeGroupPriceType[]) {
    if (errors.length > 0) setErrors([]);
    setData(value);
    console.log(value);
  }

  return (
    <main>
      <div className={styles["validate"]}>
        <button onClick={handleValidate}>Validate</button>
      </div>
      <AgeGroupPriceList data={data} errors={errors} onChange={handleChange} />
    </main>
  );
}

export default App;
