import { z } from "zod";

export const RangeSchema = z.tuple([z.number(), z.number()]);
export type Range = z.infer<typeof RangeSchema>;

export const AgeGroupPriceSchema = z.object({
  ageGroup: RangeSchema,
  price: z.number(),
});
export type AgeGroupPrice = z.infer<typeof AgeGroupPriceSchema>;
