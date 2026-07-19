/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _nodejsOptionFlags: Record<string, string> = {

};

/** @internal */
export const _nodejsFlagKeys: string[] = [];

/** Request for `plesk.nodejs.versions` */
export const NodejsVersionsRequestSchema = z.object({
  name: z.string().optional(),
});
export type NodejsVersionsRequest = z.infer<typeof NodejsVersionsRequestSchema>;

/** Request for `plesk.nodejs.enable` */
export const NodejsEnableRequestSchema = z.object({
  name: z.string(),
});
export type NodejsEnableRequest = z.infer<typeof NodejsEnableRequestSchema>;

/** Request for `plesk.nodejs.disable` */
export const NodejsDisableRequestSchema = z.object({
  name: z.string(),
});
export type NodejsDisableRequest = z.infer<typeof NodejsDisableRequestSchema>;

/** Request for `plesk.nodejs.setVersion` */
export const NodejsSetVersionRequestSchema = z.object({
  name: z.string(),
});
export type NodejsSetVersionRequest = z.infer<typeof NodejsSetVersionRequestSchema>;

/** Request for `plesk.nodejs.getVersion` */
export const NodejsGetVersionRequestSchema = z.object({
  name: z.string(),
});
export type NodejsGetVersionRequest = z.infer<typeof NodejsGetVersionRequestSchema>;

