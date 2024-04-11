import type { AgeGroupPriceType } from "../types/form";
import { getNumberIntervals } from "./numberUtils";

export function validateData(values: AgeGroupPriceType[]): {
  errors: Partial<Record<keyof AgeGroupPriceType, string>>[];
  isValid: boolean;
} {
  const { overlap } = getNumberIntervals(values.map((item) => item.ageGroup));

  let isValid = true;
  const errors = values.map((item) => {
    const error: Partial<Record<keyof AgeGroupPriceType, string>> = {};
    if (!item.price && item.price !== 0) {
      isValid = false;
      error.price = "不可以為空白";
    }
    if (overlap.length > 0) {
      isValid = false;
      error.ageGroup = "年齡區間不可重疊";
    }
    return error;
  });

  return { errors, isValid };
}
