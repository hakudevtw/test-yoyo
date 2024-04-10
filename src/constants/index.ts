import type { AgeGroupPriceType } from "../schemas/form";

export const MAX_AGE = 20;
export const MIN_AGE = 0;
export const DEFAULT_ITEM: AgeGroupPriceType = { ageGroup: [MIN_AGE, MAX_AGE], price: 0 };
