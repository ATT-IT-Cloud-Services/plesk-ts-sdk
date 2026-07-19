/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _ipPoolOptionFlags: Record<string, string> = {

};

/** @internal */
export const _ipPoolFlagKeys: string[] = [];

/** Request for `plesk.ipPool.add` */
export const IpPoolAddRequestSchema = z.object({
  name: z.string(),
});
export type IpPoolAddRequest = z.infer<typeof IpPoolAddRequestSchema>;

/** Request for `plesk.ipPool.addList` */
export const IpPoolAddListRequestSchema = z.object({
  name: z.string().optional(),
});
export type IpPoolAddListRequest = z.infer<typeof IpPoolAddListRequestSchema>;

/** Request for `plesk.ipPool.update` */
export const IpPoolUpdateRequestSchema = z.object({
  name: z.string(),
});
export type IpPoolUpdateRequest = z.infer<typeof IpPoolUpdateRequestSchema>;

/** Request for `plesk.ipPool.remove` */
export const IpPoolRemoveRequestSchema = z.object({
  name: z.string(),
});
export type IpPoolRemoveRequest = z.infer<typeof IpPoolRemoveRequestSchema>;

