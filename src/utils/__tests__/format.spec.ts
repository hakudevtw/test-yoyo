import { addComma } from "../format";

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
