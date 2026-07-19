/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _trafficOptionFlags: Record<string, string> = {

};

/** @internal */
export const _trafficFlagKeys: string[] = [];

/** Request for `plesk.traffic.add` */
export const TrafficAddRequestSchema = z.object({
  name: z.string(),
});
export type TrafficAddRequest = z.infer<typeof TrafficAddRequestSchema>;

/** Request for `plesk.traffic.addUser` */
export const TrafficAddUserRequestSchema = z.object({
  name: z.string(),
});
export type TrafficAddUserRequest = z.infer<typeof TrafficAddUserRequestSchema>;

/** Request for `plesk.traffic.sub` */
export const TrafficSubRequestSchema = z.object({
  name: z.string(),
});
export type TrafficSubRequest = z.infer<typeof TrafficSubRequestSchema>;

/** Request for `plesk.traffic.subUser` */
export const TrafficSubUserRequestSchema = z.object({
  name: z.string(),
});
export type TrafficSubUserRequest = z.infer<typeof TrafficSubUserRequestSchema>;

/** Request for `plesk.traffic.addBatch` */
export const TrafficAddBatchRequestSchema = z.object({
  name: z.string(),
});
export type TrafficAddBatchRequest = z.infer<typeof TrafficAddBatchRequestSchema>;

/** Request for `plesk.traffic.addBatchUser` */
export const TrafficAddBatchUserRequestSchema = z.object({
  name: z.string(),
});
export type TrafficAddBatchUserRequest = z.infer<typeof TrafficAddBatchUserRequestSchema>;

/** Request for `plesk.traffic.del` */
export const TrafficDelRequestSchema = z.object({
  name: z.string(),
});
export type TrafficDelRequest = z.infer<typeof TrafficDelRequestSchema>;

/** Request for `plesk.traffic.delUser` */
export const TrafficDelUserRequestSchema = z.object({
  name: z.string(),
});
export type TrafficDelUserRequest = z.infer<typeof TrafficDelUserRequestSchema>;

