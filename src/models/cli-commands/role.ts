/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _roleOptionFlags: Record<string, string> = {

};

/** @internal */
export const _roleFlagKeys: string[] = [];

/** Request for `plesk.role.create` */
export const RoleCreateRequestSchema = z.object({
  name: z.string(),
});
export type RoleCreateRequest = z.infer<typeof RoleCreateRequestSchema>;

/** Request for `plesk.role.update` */
export const RoleUpdateRequestSchema = z.object({
  name: z.string(),
});
export type RoleUpdateRequest = z.infer<typeof RoleUpdateRequestSchema>;

/** Request for `plesk.role.info` */
export const RoleInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type RoleInfoRequest = z.infer<typeof RoleInfoRequestSchema>;

/** Request for `plesk.role.delete` */
export const RoleDeleteRequestSchema = z.object({
  name: z.string(),
});
export type RoleDeleteRequest = z.infer<typeof RoleDeleteRequestSchema>;

