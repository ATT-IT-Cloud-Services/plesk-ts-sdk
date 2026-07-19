/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _customerOptionFlags: Record<string, string> = {

};

/** @internal */
export const _customerFlagKeys: string[] = [];

/** Request for `plesk.customer.create` */
export const CustomerCreateRequestSchema = z.object({
  name: z.string(),
});
export type CustomerCreateRequest = z.infer<typeof CustomerCreateRequestSchema>;

/** Request for `plesk.customer.update` */
export const CustomerUpdateRequestSchema = z.object({
  name: z.string(),
});
export type CustomerUpdateRequest = z.infer<typeof CustomerUpdateRequestSchema>;

/** Request for `plesk.customer.remove` */
export const CustomerRemoveRequestSchema = z.object({
  name: z.string(),
});
export type CustomerRemoveRequest = z.infer<typeof CustomerRemoveRequestSchema>;

/** Request for `plesk.customer.info` */
export const CustomerInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type CustomerInfoRequest = z.infer<typeof CustomerInfoRequestSchema>;

/** Request for `plesk.customer.on` */
export const CustomerOnRequestSchema = z.object({
  name: z.string(),
});
export type CustomerOnRequest = z.infer<typeof CustomerOnRequestSchema>;

/** Request for `plesk.customer.off` */
export const CustomerOffRequestSchema = z.object({
  name: z.string(),
});
export type CustomerOffRequest = z.infer<typeof CustomerOffRequestSchema>;

/** Request for `plesk.customer.list` */
export const CustomerListRequestSchema = z.object({
  name: z.string().optional(),
});
export type CustomerListRequest = z.infer<typeof CustomerListRequestSchema>;

/** Request for `plesk.customer.convertToReseller` */
export const CustomerConvertToResellerRequestSchema = z.object({
  name: z.string(),
});
export type CustomerConvertToResellerRequest = z.infer<typeof CustomerConvertToResellerRequestSchema>;

/** Request for `plesk.customer.changeOwner` */
export const CustomerChangeOwnerRequestSchema = z.object({
  name: z.string(),
});
export type CustomerChangeOwnerRequest = z.infer<typeof CustomerChangeOwnerRequestSchema>;

