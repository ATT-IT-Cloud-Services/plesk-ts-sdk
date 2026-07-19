/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _phpHandlerOptionFlags: Record<string, string> = {

};

/** @internal */
export const _phpHandlerFlagKeys: string[] = [];

/** Request for `plesk.phpHandler.add` */
export const PhpHandlerAddRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerAddRequest = z.infer<typeof PhpHandlerAddRequestSchema>;

/** Request for `plesk.phpHandler.update` */
export const PhpHandlerUpdateRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerUpdateRequest = z.infer<typeof PhpHandlerUpdateRequestSchema>;

/** Request for `plesk.phpHandler.list` */
export const PhpHandlerListRequestSchema = z.object({
  name: z.string().optional(),
});
export type PhpHandlerListRequest = z.infer<typeof PhpHandlerListRequestSchema>;

/** Request for `plesk.phpHandler.replace` */
export const PhpHandlerReplaceRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerReplaceRequest = z.infer<typeof PhpHandlerReplaceRequestSchema>;

/** Request for `plesk.phpHandler.remove` */
export const PhpHandlerRemoveRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerRemoveRequest = z.infer<typeof PhpHandlerRemoveRequestSchema>;

/** Request for `plesk.phpHandler.enable` */
export const PhpHandlerEnableRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerEnableRequest = z.infer<typeof PhpHandlerEnableRequestSchema>;

/** Request for `plesk.phpHandler.disable` */
export const PhpHandlerDisableRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerDisableRequest = z.infer<typeof PhpHandlerDisableRequestSchema>;

/** Request for `plesk.phpHandler.getUsage` */
export const PhpHandlerGetUsageRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerGetUsageRequest = z.infer<typeof PhpHandlerGetUsageRequestSchema>;

/** Request for `plesk.phpHandler.reread` */
export const PhpHandlerRereadRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerRereadRequest = z.infer<typeof PhpHandlerRereadRequestSchema>;

/** Request for `plesk.phpHandler.extensionList` */
export const PhpHandlerExtensionListRequestSchema = z.object({
  name: z.string().optional(),
});
export type PhpHandlerExtensionListRequest = z.infer<typeof PhpHandlerExtensionListRequestSchema>;

/** Request for `plesk.phpHandler.extensionEnable` */
export const PhpHandlerExtensionEnableRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerExtensionEnableRequest = z.infer<typeof PhpHandlerExtensionEnableRequestSchema>;

/** Request for `plesk.phpHandler.extensionDisable` */
export const PhpHandlerExtensionDisableRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerExtensionDisableRequest = z.infer<typeof PhpHandlerExtensionDisableRequestSchema>;

/** Request for `plesk.phpHandler.extensionInstall` */
export const PhpHandlerExtensionInstallRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerExtensionInstallRequest = z.infer<typeof PhpHandlerExtensionInstallRequestSchema>;

/** Request for `plesk.phpHandler.extensionUninstall` */
export const PhpHandlerExtensionUninstallRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerExtensionUninstallRequest = z.infer<typeof PhpHandlerExtensionUninstallRequestSchema>;

/** Request for `plesk.phpHandler.extensionListInstallable` */
export const PhpHandlerExtensionListInstallableRequestSchema = z.object({
  name: z.string(),
});
export type PhpHandlerExtensionListInstallableRequest = z.infer<typeof PhpHandlerExtensionListInstallableRequestSchema>;

