import { useState } from "react";
import AgeGroupPriceList from "./components/form/age-group-price-list";
import type { AgeGroupPriceType } from "./schemas/form";
import { validateForm } from "./utils/formUtils";
import styles from "./App.module.css";
import { MAX_AGE, MIN_AGE } from "./components/form/age-group-select";

const DEFAULT_ITEM: AgeGroupPriceType = { ageGroup: [MIN_AGE, MAX_AGE], price: 0 };

// TODO Move to context with form component
function App() {
  const [data, setData] = useState<AgeGroupPriceType[]>([DEFAULT_ITEM]);
  const [errors, setErrors] = useState<Record<keyof AgeGroupPriceType, string>[]>([]);

  function handleValidate() {
    validateForm(data);
    // TODO show error message
  }

  function handleChange(value: AgeGroupPriceType[]) {
    console.log(value);
    setData(value);
  }

  function handleAdd() {
    setData([...data, DEFAULT_ITEM]);
  }

  function handleRemove(index: number) {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  }

  return (
    <main>
      <div className={styles["validate"]}>
        <button onClick={handleValidate}>Validate</button>
      </div>
      <AgeGroupPriceList
        data={data}
        onChange={handleChange}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
    </main>
  );
}

export default App;
