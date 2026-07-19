/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _custombuttonOptionFlags: Record<string, string> = {

};

/** @internal */
export const _custombuttonFlagKeys: string[] = [];

/** Request for `plesk.custombutton.create` */
export const CustombuttonCreateRequestSchema = z.object({
  name: z.string(),
});
export type CustombuttonCreateRequest = z.infer<typeof CustombuttonCreateRequestSchema>;

/** Request for `plesk.custombutton.info` */
export const CustombuttonInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type CustombuttonInfoRequest = z.infer<typeof CustombuttonInfoRequestSchema>;

/** Request for `plesk.custombutton.remove` */
export const CustombuttonRemoveRequestSchema = z.object({
  name: z.string(),
});
export type CustombuttonRemoveRequest = z.infer<typeof CustombuttonRemoveRequestSchema>;

/** Request for `plesk.custombutton.list` */
export const CustombuttonListRequestSchema = z.object({
  name: z.string().optional(),
});
export type CustombuttonListRequest = z.infer<typeof CustombuttonListRequestSchema>;

