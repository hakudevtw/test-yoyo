import type { Range } from "../schemas/form";

export function getNumberIntervals(ranges: Range[]) {
  const MAX_VAL = 20;
  const MIN_VAL = 0;

  function parseRange(range: Range) {
    const sorted = [...range].sort((a, b) => a - b);
    if (sorted[0] < MIN_VAL) sorted[0] = MIN_VAL;
    if (sorted[1] > MAX_VAL) sorted[1] = MAX_VAL;
    return sorted;
  }

  const counter = Array(MAX_VAL - MIN_VAL + 1).fill(0);
  const result: Record<string, Range[]> = { overlap: [], notInclude: [] };

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
