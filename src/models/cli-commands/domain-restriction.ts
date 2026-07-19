/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _domainRestrictionOptionFlags: Record<string, string> = {

};

/** @internal */
export const _domainRestrictionFlagKeys: string[] = [];

/** Request for `plesk.domainRestriction.add` */
export const DomainRestrictionAddRequestSchema = z.object({
  name: z.string(),
});
export type DomainRestrictionAddRequest = z.infer<typeof DomainRestrictionAddRequestSchema>;

/** Request for `plesk.domainRestriction.addList` */
export const DomainRestrictionAddListRequestSchema = z.object({
  name: z.string().optional(),
});
export type DomainRestrictionAddListRequest = z.infer<typeof DomainRestrictionAddListRequestSchema>;

/** Request for `plesk.domainRestriction.removeList` */
export const DomainRestrictionRemoveListRequestSchema = z.object({
  name: z.string().optional(),
});
export type DomainRestrictionRemoveListRequest = z.infer<typeof DomainRestrictionRemoveListRequestSchema>;

/** Request for `plesk.domainRestriction.remove` */
export const DomainRestrictionRemoveRequestSchema = z.object({
  name: z.string(),
});
export type DomainRestrictionRemoveRequest = z.infer<typeof DomainRestrictionRemoveRequestSchema>;

/** Request for `plesk.domainRestriction.rename` */
export const DomainRestrictionRenameRequestSchema = z.object({
  name: z.string(),
});
export type DomainRestrictionRenameRequest = z.infer<typeof DomainRestrictionRenameRequestSchema>;

/** Request for `plesk.domainRestriction.enable` */
export const DomainRestrictionEnableRequestSchema = z.object({
  name: z.string(),
});
export type DomainRestrictionEnableRequest = z.infer<typeof DomainRestrictionEnableRequestSchema>;

/** Request for `plesk.domainRestriction.disable` */
export const DomainRestrictionDisableRequestSchema = z.object({
  name: z.string(),
});
export type DomainRestrictionDisableRequest = z.infer<typeof DomainRestrictionDisableRequestSchema>;

/** Request for `plesk.domainRestriction.list` */
export const DomainRestrictionListRequestSchema = z.object({
  name: z.string().optional(),
});
export type DomainRestrictionListRequest = z.infer<typeof DomainRestrictionListRequestSchema>;

