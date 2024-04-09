import { addComma, getNumberIntervals, type Range } from "../numberUtils";

describe("addComma", () => {
  test("adds comma for thousands in positive number", () => {
    expect(addComma(1234567)).toBe("1,234,567");
    expect(addComma(7855948.9527)).toBe("7,855,948.9527");
  });

  test("adds comma for thousands in negative number", () => {
    expect(addComma(-1234567)).toBe("-1,234,567");
    expect(addComma(-7855948.9527)).toBe("-7,855,948.9527");
  });

  test("handles number without thousands", () => {
    expect(addComma(123.45)).toBe("123.45");
  });
});

describe("getNumberIntervals", () => {
  test("handles overlapping and not included intervals", () => {
    const input: Range[] = [
      [6, 11],
      [5, 8],
      [17, 20],
      [7, 7],
      [14, 17],
    ];
    const expectedOutput = {
      overlap: [
        [6, 8],
        [17, 17],
      ],
      notInclude: [
        [0, 4],
        [12, 13],
      ],
    };
    expect(getNumberIntervals(input)).toEqual(expectedOutput);
  });
});
