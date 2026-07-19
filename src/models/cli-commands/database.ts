/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _databaseToolsOptionFlags: Record<string, string> = {

};

/** @internal */
export const _databaseToolsFlagKeys: string[] = [];

/** Request for `plesk.databaseTools.create` */
export const DatabaseToolsCreateRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsCreateRequest = z.infer<typeof DatabaseToolsCreateRequestSchema>;

/** Request for `plesk.databaseTools.update` */
export const DatabaseToolsUpdateRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsUpdateRequest = z.infer<typeof DatabaseToolsUpdateRequestSchema>;

/** Request for `plesk.databaseTools.remove` */
export const DatabaseToolsRemoveRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsRemoveRequest = z.infer<typeof DatabaseToolsRemoveRequestSchema>;

/** Request for `plesk.databaseTools.register` */
export const DatabaseToolsRegisterRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsRegisterRequest = z.infer<typeof DatabaseToolsRegisterRequestSchema>;

/** Request for `plesk.databaseTools.assignToSubscription` */
export const DatabaseToolsAssignToSubscriptionRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsAssignToSubscriptionRequest = z.infer<typeof DatabaseToolsAssignToSubscriptionRequestSchema>;

/** Request for `plesk.databaseTools.assignToDomain` */
export const DatabaseToolsAssignToDomainRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsAssignToDomainRequest = z.infer<typeof DatabaseToolsAssignToDomainRequestSchema>;

/** Request for `plesk.databaseTools.unassignFromDomain` */
export const DatabaseToolsUnassignFromDomainRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsUnassignFromDomainRequest = z.infer<typeof DatabaseToolsUnassignFromDomainRequestSchema>;

/** Request for `plesk.databaseTools.removeDbs` */
export const DatabaseToolsRemoveDbsRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsRemoveDbsRequest = z.infer<typeof DatabaseToolsRemoveDbsRequestSchema>;

/** Request for `plesk.databaseTools.removeDbus` */
export const DatabaseToolsRemoveDbusRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsRemoveDbusRequest = z.infer<typeof DatabaseToolsRemoveDbusRequestSchema>;

/** Request for `plesk.databaseTools.createDbuser` */
export const DatabaseToolsCreateDbuserRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsCreateDbuserRequest = z.infer<typeof DatabaseToolsCreateDbuserRequestSchema>;

/** Request for `plesk.databaseTools.updateDbuser` */
export const DatabaseToolsUpdateDbuserRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsUpdateDbuserRequest = z.infer<typeof DatabaseToolsUpdateDbuserRequestSchema>;

/** Request for `plesk.databaseTools.removeDbuser` */
export const DatabaseToolsRemoveDbuserRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsRemoveDbuserRequest = z.infer<typeof DatabaseToolsRemoveDbuserRequestSchema>;

/** Request for `plesk.databaseTools.registerDbuser` */
export const DatabaseToolsRegisterDbuserRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseToolsRegisterDbuserRequest = z.infer<typeof DatabaseToolsRegisterDbuserRequestSchema>;

