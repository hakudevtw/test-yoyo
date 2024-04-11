import type { RangeType } from "../types/form";

export function getNumberIntervals(ranges: RangeType[], config?: { max: number; min: number }) {
  const { max = 20, min = 0 } = config ?? {};
  const counter = Array(max - min + 1).fill(0);
  const result: { overlap: RangeType[]; notInclude: RangeType[] } = { overlap: [], notInclude: [] };

  function parseRange(range: RangeType) {
    const sorted = [...range].sort((a, b) => a - b);
    if (sorted[0] < min) sorted[0] = min;
    if (sorted[1] > max) sorted[1] = max;
    return sorted;
  }

  ranges.forEach((range) => {
    const [start, end] = parseRange(range);
    for (let i = start; i <= end; i++) counter[i] += 1;
  });

  let rangeStart = 0;
  for (let i = 1; i < counter.length + 1; i++) {
    if (counter[i] === counter[i - 1]) continue;
    if (counter[i] > 1 && counter[i - 1] > 1) continue;

    if (counter[rangeStart] === 0) result["notInclude"].push([rangeStart, i - 1]);
    if (counter[rangeStart] > 1) result["overlap"].push([rangeStart, i - 1]);

    rangeStart = i;
  }

  return result;
}

export function addComma(num: number | string) {
  // with regex
  const [integer, decimal] = num.toString().split(".");
  const integerWithComma = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return typeof decimal !== "undefined" ? `${integerWithComma}.${decimal}` : integerWithComma;

  // with Intl Web API
  // const formatter = new Intl.NumberFormat("en-US", {
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 20,
  // });
  // return formatter.format(Number(num));

  // with toLocaleString
  // const [integer, decimal] = num.toString().split(".");
  // return Number(integer).toLocaleString() + (decimal ? `.${decimal}` : "");
}

export function removeComma(num: number | string) {
  return num.toString().replace(/,/g, "");
}

export function parseNumStr(numStr: string): string {
  if (numStr === "") return "0";
  if (numStr === "-" || numStr === "+") return "0";
  if (numStr.startsWith("0.")) return numStr;
  if (numStr.length > 1 && numStr[0] === "0") return numStr.slice(1);
  return numStr;
}
