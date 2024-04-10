import type { AgeGroupPriceType } from "../schemas/form";
import { getNumberIntervals } from "./numberUtils";

export function validateData<T extends { [key: string]: any }>(
  values: AgeGroupPriceType[]
): Partial<Record<keyof AgeGroupPriceType, string>>[] {
  const { overlap } = getNumberIntervals(values.map((item) => item.ageGroup));

  const errors = values.map((item) => {
    const error: Partial<Record<keyof AgeGroupPriceType, string>> = {};
    if (!item.price && item.price !== 0) error.price = "不可以為空白";
    if (overlap.length > 0) error.ageGroup = "年齡區間不可重疊";
    return error;
  });

  return errors;
}
