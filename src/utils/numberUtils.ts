import type { RangeType } from "../schemas/form";

export function getNumberIntervals(ranges: RangeType[], config?: { max: number; min: number }) {
  const { max = 20, min = 0 } = config ?? {};

  function parseRange(range: RangeType) {
    const sorted = [...range].sort((a, b) => a - b);
    if (sorted[0] < min) sorted[0] = min;
    if (sorted[1] > max) sorted[1] = max;
    return sorted;
  }

  const counter = Array(max - min + 1).fill(0);
  const result: Record<string, RangeType[]> = { overlap: [], notInclude: [] };

  ranges.forEach((range) => {
    const [start, end] = parseRange(range);
    for (let i = start; i <= end; i++) counter[i] += 1;
  });

  let rangeStart = 0;
  for (let i = 1; i < counter.length; i++) {
    if (counter[i] === counter[i - 1]) continue;
    if (counter[i] > 1 && counter[i - 1] > 1) continue;

    if (counter[rangeStart] === 0) {
      result["notInclude"].push([rangeStart, i - 1]);
    }

    if (counter[rangeStart] > 1) {
      result["overlap"].push([rangeStart, i - 1]);
    }

    rangeStart = i;
  }

  return result;
}

export function addComma(num: number | string) {
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

export function removeComma(num: number | string) {
  return num.toString().replace(/,/g, "");
}
