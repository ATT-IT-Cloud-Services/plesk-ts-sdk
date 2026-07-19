/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _pleskbackupOptionFlags: Record<string, string> = {

};

/** @internal */
export const _pleskbackupFlagKeys: string[] = [];

/** Request for `plesk.pleskbackup.server` */
export const PleskbackupServerRequestSchema = z.object({
  name: z.string(),
});
export type PleskbackupServerRequest = z.infer<typeof PleskbackupServerRequestSchema>;

/** Request for `plesk.pleskbackup.resellersName` */
export const PleskbackupResellersNameRequestSchema = z.object({
  name: z.string(),
});
export type PleskbackupResellersNameRequest = z.infer<typeof PleskbackupResellersNameRequestSchema>;

/** Request for `plesk.pleskbackup.resellersId` */
export const PleskbackupResellersIdRequestSchema = z.object({
  name: z.string(),
});
export type PleskbackupResellersIdRequest = z.infer<typeof PleskbackupResellersIdRequestSchema>;

/** Request for `plesk.pleskbackup.clientsName` */
export const PleskbackupClientsNameRequestSchema = z.object({
  name: z.string(),
});
export type PleskbackupClientsNameRequest = z.infer<typeof PleskbackupClientsNameRequestSchema>;

/** Request for `plesk.pleskbackup.clientsId` */
export const PleskbackupClientsIdRequestSchema = z.object({
  name: z.string(),
});
export type PleskbackupClientsIdRequest = z.infer<typeof PleskbackupClientsIdRequestSchema>;

/** Request for `plesk.pleskbackup.domainsName` */
export const PleskbackupDomainsNameRequestSchema = z.object({
  name: z.string(),
});
export type PleskbackupDomainsNameRequest = z.infer<typeof PleskbackupDomainsNameRequestSchema>;

/** Request for `plesk.pleskbackup.domainsId` */
export const PleskbackupDomainsIdRequestSchema = z.object({
  name: z.string(),
});
export type PleskbackupDomainsIdRequest = z.infer<typeof PleskbackupDomainsIdRequestSchema>;

