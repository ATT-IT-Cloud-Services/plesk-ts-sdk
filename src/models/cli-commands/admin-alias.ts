/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _adminAliasOptionFlags: Record<string, string> = {

};

/** @internal */
export const _adminAliasFlagKeys: string[] = [];

/** Request for `plesk.adminAlias.create` */
export const AdminAliasCreateRequestSchema = z.object({
  name: z.string(),
});
export type AdminAliasCreateRequest = z.infer<typeof AdminAliasCreateRequestSchema>;

/** Request for `plesk.adminAlias.update` */
export const AdminAliasUpdateRequestSchema = z.object({
  name: z.string(),
});
export type AdminAliasUpdateRequest = z.infer<typeof AdminAliasUpdateRequestSchema>;

/** Request for `plesk.adminAlias.remove` */
export const AdminAliasRemoveRequestSchema = z.object({
  name: z.string(),
});
export type AdminAliasRemoveRequest = z.infer<typeof AdminAliasRemoveRequestSchema>;

/** Request for `plesk.adminAlias.info` */
export const AdminAliasInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminAliasInfoRequest = z.infer<typeof AdminAliasInfoRequestSchema>;

/** Request for `plesk.adminAlias.xmlInfo` */
export const AdminAliasXmlInfoRequestSchema = z.object({
  name: z.string(),
});
export type AdminAliasXmlInfoRequest = z.infer<typeof AdminAliasXmlInfoRequestSchema>;

/** Request for `plesk.adminAlias.list` */
export const AdminAliasListRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminAliasListRequest = z.infer<typeof AdminAliasListRequestSchema>;

