import { useState } from "react";
import AgeGroupPriceList from "./components/form/age-group-price-list";
import type { AgeGroupPriceType } from "./schemas/form";
import { validateForm } from "./utils/formUtils";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState<AgeGroupPriceType[]>([]);

  function handleValidate() {
    validateForm(data);
    // TODO show error message
  }

  function handleChange(value: AgeGroupPriceType[]) {
    console.log(value);
    setData(value);
  }

  return (
    <main>
      <div className={styles["validate"]}>
        <button onClick={handleValidate}>Validate</button>
      </div>
      <AgeGroupPriceList onChange={handleChange} />
    </main>
  );
}

export default App;
