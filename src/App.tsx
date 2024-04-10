import AgeGroupPriceList from "./components/form/age-group-price-list";
import type { AgeGroupPriceType } from "./schemas/form";

function App() {
  function handleChange(value: AgeGroupPriceType[]) {
    console.log(value);
  }

  return (
    <main>
      <AgeGroupPriceList onChange={handleChange} />
    </main>
  );
}

export default App;
