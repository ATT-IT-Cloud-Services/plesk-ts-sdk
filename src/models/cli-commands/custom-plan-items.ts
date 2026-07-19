/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _customPlanItemsOptionFlags: Record<string, string> = {

};

/** @internal */
export const _customPlanItemsFlagKeys: string[] = [];

/** Request for `plesk.customPlanItems.add` */
export const CustomPlanItemsAddRequestSchema = z.object({
  name: z.string(),
});
export type CustomPlanItemsAddRequest = z.infer<typeof CustomPlanItemsAddRequestSchema>;

/** Request for `plesk.customPlanItems.update` */
export const CustomPlanItemsUpdateRequestSchema = z.object({
  name: z.string(),
});
export type CustomPlanItemsUpdateRequest = z.infer<typeof CustomPlanItemsUpdateRequestSchema>;

/** Request for `plesk.customPlanItems.remove` */
export const CustomPlanItemsRemoveRequestSchema = z.object({
  name: z.string(),
});
export type CustomPlanItemsRemoveRequest = z.infer<typeof CustomPlanItemsRemoveRequestSchema>;

/** Request for `plesk.customPlanItems.list` */
export const CustomPlanItemsListRequestSchema = z.object({
  name: z.string().optional(),
});
export type CustomPlanItemsListRequest = z.infer<typeof CustomPlanItemsListRequestSchema>;

