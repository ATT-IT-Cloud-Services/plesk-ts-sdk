/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _gitOptionFlags: Record<string, string> = {

};

/** @internal */
export const _gitFlagKeys: string[] = [];

/** Request for `plesk.git.list` */
export const GitListRequestSchema = z.object({
  name: z.string().optional(),
});
export type GitListRequest = z.infer<typeof GitListRequestSchema>;

/** Request for `plesk.git.create` */
export const GitCreateRequestSchema = z.object({
  name: z.string(),
});
export type GitCreateRequest = z.infer<typeof GitCreateRequestSchema>;

/** Request for `plesk.git.info` */
export const GitInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type GitInfoRequest = z.infer<typeof GitInfoRequestSchema>;

/** Request for `plesk.git.update` */
export const GitUpdateRequestSchema = z.object({
  name: z.string(),
});
export type GitUpdateRequest = z.infer<typeof GitUpdateRequestSchema>;

/** Request for `plesk.git.remove` */
export const GitRemoveRequestSchema = z.object({
  name: z.string(),
});
export type GitRemoveRequest = z.infer<typeof GitRemoveRequestSchema>;

/** Request for `plesk.git.deploy` */
export const GitDeployRequestSchema = z.object({
  name: z.string(),
});
export type GitDeployRequest = z.infer<typeof GitDeployRequestSchema>;

/** Request for `plesk.git.fetch` */
export const GitFetchRequestSchema = z.object({
  name: z.string(),
});
export type GitFetchRequest = z.infer<typeof GitFetchRequestSchema>;

/** Request for `plesk.git.getLastCommit` */
export const GitGetLastCommitRequestSchema = z.object({
  name: z.string(),
});
export type GitGetLastCommitRequest = z.infer<typeof GitGetLastCommitRequestSchema>;

