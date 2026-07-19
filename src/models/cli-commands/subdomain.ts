/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _subdomainOptionFlags: Record<string, string> = {

};

/** @internal */
export const _subdomainFlagKeys: string[] = [];

/** Request for `plesk.subdomain.create` */
export const SubdomainCreateRequestSchema = z.object({
  name: z.string(),
});
export type SubdomainCreateRequest = z.infer<typeof SubdomainCreateRequestSchema>;

/** Request for `plesk.subdomain.update` */
export const SubdomainUpdateRequestSchema = z.object({
  name: z.string(),
});
export type SubdomainUpdateRequest = z.infer<typeof SubdomainUpdateRequestSchema>;

/** Request for `plesk.subdomain.remove` */
export const SubdomainRemoveRequestSchema = z.object({
  name: z.string(),
});
export type SubdomainRemoveRequest = z.infer<typeof SubdomainRemoveRequestSchema>;

/** Request for `plesk.subdomain.info` */
export const SubdomainInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type SubdomainInfoRequest = z.infer<typeof SubdomainInfoRequestSchema>;

/** Request for `plesk.subdomain.suspend` */
export const SubdomainSuspendRequestSchema = z.object({
  name: z.string(),
});
export type SubdomainSuspendRequest = z.infer<typeof SubdomainSuspendRequestSchema>;

/** Request for `plesk.subdomain.list` */
export const SubdomainListRequestSchema = z.object({
  name: z.string().optional(),
});
export type SubdomainListRequest = z.infer<typeof SubdomainListRequestSchema>;

