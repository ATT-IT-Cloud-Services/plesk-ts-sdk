/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _extensionToolsOptionFlags: Record<string, string> = {

};

/** @internal */
export const _extensionToolsFlagKeys: string[] = [];

/** Request for `plesk.extensionTools.create` */
export const ExtensionToolsCreateRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsCreateRequest = z.infer<typeof ExtensionToolsCreateRequestSchema>;

/** Request for `plesk.extensionTools.register` */
export const ExtensionToolsRegisterRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsRegisterRequest = z.infer<typeof ExtensionToolsRegisterRequestSchema>;

/** Request for `plesk.extensionTools.install` */
export const ExtensionToolsInstallRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsInstallRequest = z.infer<typeof ExtensionToolsInstallRequestSchema>;

/** Request for `plesk.extensionTools.installUrl` */
export const ExtensionToolsInstallUrlRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsInstallUrlRequest = z.infer<typeof ExtensionToolsInstallUrlRequestSchema>;

/** Request for `plesk.extensionTools.upgrade` */
export const ExtensionToolsUpgradeRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsUpgradeRequest = z.infer<typeof ExtensionToolsUpgradeRequestSchema>;

/** Request for `plesk.extensionTools.upgradeUrl` */
export const ExtensionToolsUpgradeUrlRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsUpgradeUrlRequest = z.infer<typeof ExtensionToolsUpgradeUrlRequestSchema>;

/** Request for `plesk.extensionTools.uninstall` */
export const ExtensionToolsUninstallRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsUninstallRequest = z.infer<typeof ExtensionToolsUninstallRequestSchema>;

/** Request for `plesk.extensionTools.pack` */
export const ExtensionToolsPackRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsPackRequest = z.infer<typeof ExtensionToolsPackRequestSchema>;

/** Request for `plesk.extensionTools.exec` */
export const ExtensionToolsExecRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsExecRequest = z.infer<typeof ExtensionToolsExecRequestSchema>;

/** Request for `plesk.extensionTools.list` */
export const ExtensionToolsListRequestSchema = z.object({
  name: z.string().optional(),
});
export type ExtensionToolsListRequest = z.infer<typeof ExtensionToolsListRequestSchema>;

/** Request for `plesk.extensionTools.enable` */
export const ExtensionToolsEnableRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsEnableRequest = z.infer<typeof ExtensionToolsEnableRequestSchema>;

/** Request for `plesk.extensionTools.disable` */
export const ExtensionToolsDisableRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsDisableRequest = z.infer<typeof ExtensionToolsDisableRequestSchema>;

/** Request for `plesk.extensionTools.call` */
export const ExtensionToolsCallRequestSchema = z.object({
  name: z.string(),
});
export type ExtensionToolsCallRequest = z.infer<typeof ExtensionToolsCallRequestSchema>;

