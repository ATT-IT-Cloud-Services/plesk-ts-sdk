/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _userOptionFlags: Record<string, string> = {

};

/** @internal */
export const _userFlagKeys: string[] = [];

/** Request for `plesk.user.create` */
export const UserCreateRequestSchema = z.object({
  name: z.string(),
});
export type UserCreateRequest = z.infer<typeof UserCreateRequestSchema>;

/** Request for `plesk.user.update` */
export const UserUpdateRequestSchema = z.object({
  name: z.string(),
});
export type UserUpdateRequest = z.infer<typeof UserUpdateRequestSchema>;

/** Request for `plesk.user.delete` */
export const UserDeleteRequestSchema = z.object({
  name: z.string(),
});
export type UserDeleteRequest = z.infer<typeof UserDeleteRequestSchema>;

/** Request for `plesk.user.info` */
export const UserInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type UserInfoRequest = z.infer<typeof UserInfoRequestSchema>;

