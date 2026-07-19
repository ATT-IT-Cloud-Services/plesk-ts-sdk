/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _databaseServerOptionFlags: Record<string, string> = {

};

/** @internal */
export const _databaseServerFlagKeys: string[] = [];

/** Request for `plesk.databaseServer.createServer` */
export const DatabaseServerCreateServerRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseServerCreateServerRequest = z.infer<typeof DatabaseServerCreateServerRequestSchema>;

/** Request for `plesk.databaseServer.updateServer` */
export const DatabaseServerUpdateServerRequestSchema = z.object({
  name: z.string().optional(),
});
export type DatabaseServerUpdateServerRequest = z.infer<typeof DatabaseServerUpdateServerRequestSchema>;

/** Request for `plesk.databaseServer.removeServer` */
export const DatabaseServerRemoveServerRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseServerRemoveServerRequest = z.infer<typeof DatabaseServerRemoveServerRequestSchema>;

/** Request for `plesk.databaseServer.setDefaultServer` */
export const DatabaseServerSetDefaultServerRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseServerSetDefaultServerRequest = z.infer<typeof DatabaseServerSetDefaultServerRequestSchema>;

/** Request for `plesk.databaseServer.setDefaultServerLocal` */
export const DatabaseServerSetDefaultServerLocalRequestSchema = z.object({
  name: z.string().optional(),
});
export type DatabaseServerSetDefaultServerLocalRequest = z.infer<typeof DatabaseServerSetDefaultServerLocalRequestSchema>;

/** Request for `plesk.databaseServer.list` */
export const DatabaseServerListRequestSchema = z.object({
  name: z.string().optional(),
});
export type DatabaseServerListRequest = z.infer<typeof DatabaseServerListRequestSchema>;

/** Request for `plesk.databaseServer.xmlInfo` */
export const DatabaseServerXmlInfoRequestSchema = z.object({
  name: z.string(),
});
export type DatabaseServerXmlInfoRequest = z.infer<typeof DatabaseServerXmlInfoRequestSchema>;

