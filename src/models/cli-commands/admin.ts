/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _adminOptionFlags: Record<string, string> = {

};

/** @internal */
export const _adminFlagKeys: string[] = [];

/** Request for `plesk.admin.update` */
export const AdminUpdateRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminUpdateRequest = z.infer<typeof AdminUpdateRequestSchema>;

/** Request for `plesk.admin.info` */
export const AdminInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminInfoRequest = z.infer<typeof AdminInfoRequestSchema>;

/** Request for `plesk.admin.setLogin` */
export const AdminSetLoginRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminSetLoginRequest = z.infer<typeof AdminSetLoginRequestSchema>;

/** Request for `plesk.admin.setAdminPassword` */
export const AdminSetAdminPasswordRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminSetAdminPasswordRequest = z.infer<typeof AdminSetAdminPasswordRequestSchema>;

/** Request for `plesk.admin.setPassword` */
export const AdminSetPasswordRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminSetPasswordRequest = z.infer<typeof AdminSetPasswordRequestSchema>;

/** Request for `plesk.admin.forceAdminPasswordReset` */
export const AdminForceAdminPasswordResetRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminForceAdminPasswordResetRequest = z.infer<typeof AdminForceAdminPasswordResetRequestSchema>;

/** Request for `plesk.admin.xmlInfo` */
export const AdminXmlInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminXmlInfoRequest = z.infer<typeof AdminXmlInfoRequestSchema>;

/** Request for `plesk.admin.getLoginLink` */
export const AdminGetLoginLinkRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminGetLoginLinkRequest = z.infer<typeof AdminGetLoginLinkRequestSchema>;

/** Request for `plesk.admin.getResetLink` */
export const AdminGetResetLinkRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminGetResetLinkRequest = z.infer<typeof AdminGetResetLinkRequestSchema>;

/** Request for `plesk.admin.enableAccessDomain` */
export const AdminEnableAccessDomainRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminEnableAccessDomainRequest = z.infer<typeof AdminEnableAccessDomainRequestSchema>;

/** Request for `plesk.admin.disableAccessDomain` */
export const AdminDisableAccessDomainRequestSchema = z.object({
  name: z.string().optional(),
});
export type AdminDisableAccessDomainRequest = z.infer<typeof AdminDisableAccessDomainRequestSchema>;

