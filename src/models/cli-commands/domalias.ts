/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _domaliasOptionFlags: Record<string, string> = {

};

/** @internal */
export const _domaliasFlagKeys: string[] = [];

/** Request for `plesk.domalias.create` */
export const DomaliasCreateRequestSchema = z.object({
  name: z.string(),
});
export type DomaliasCreateRequest = z.infer<typeof DomaliasCreateRequestSchema>;

/** Request for `plesk.domalias.update` */
export const DomaliasUpdateRequestSchema = z.object({
  name: z.string(),
});
export type DomaliasUpdateRequest = z.infer<typeof DomaliasUpdateRequestSchema>;

/** Request for `plesk.domalias.delete` */
export const DomaliasDeleteRequestSchema = z.object({
  name: z.string(),
});
export type DomaliasDeleteRequest = z.infer<typeof DomaliasDeleteRequestSchema>;

/** Request for `plesk.domalias.deleteAll` */
export const DomaliasDeleteAllRequestSchema = z.object({
  name: z.string(),
});
export type DomaliasDeleteAllRequest = z.infer<typeof DomaliasDeleteAllRequestSchema>;

/** Request for `plesk.domalias.info` */
export const DomaliasInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type DomaliasInfoRequest = z.infer<typeof DomaliasInfoRequestSchema>;

/** Request for `plesk.domalias.on` */
export const DomaliasOnRequestSchema = z.object({
  name: z.string(),
});
export type DomaliasOnRequest = z.infer<typeof DomaliasOnRequestSchema>;

/** Request for `plesk.domalias.off` */
export const DomaliasOffRequestSchema = z.object({
  name: z.string(),
});
export type DomaliasOffRequest = z.infer<typeof DomaliasOffRequestSchema>;

/** Request for `plesk.domalias.rename` */
export const DomaliasRenameRequestSchema = z.object({
  name: z.string(),
});
export type DomaliasRenameRequest = z.infer<typeof DomaliasRenameRequestSchema>;

