export function addComma(num: number) {
  // with regex
  const [integer, decimal] = num.toString().split(".");
  const integerWithComma = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal ? `${integerWithComma}.${decimal}` : integerWithComma;

  // with Intl Web API
  // const formatter = new Intl.NumberFormat("en-US", {
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 20,
  // });
  // return formatter.format(num);

  // with toLocaleString (x rounded to 2 decimal places)
  // const [integer, decimal] = num.toString().split(".");
  // return Number(integer).toLocaleString() + (decimal ? `.${decimal}` : "");
}
