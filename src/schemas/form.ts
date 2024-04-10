import { z } from "zod";

export const RangeSchema = z.tuple([z.number(), z.number()]);
export type RangeType = z.infer<typeof RangeSchema>;

export const AgeGroupPriceSchema = z.object({
  ageGroup: RangeSchema,
  price: z.number(),
});
export type AgeGroupPriceType = z.infer<typeof AgeGroupPriceSchema>;
