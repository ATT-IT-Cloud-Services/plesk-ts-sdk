/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _notificationOptionFlags: Record<string, string> = {

};

/** @internal */
export const _notificationFlagKeys: string[] = [];

/** Request for `plesk.notification.update` */
export const NotificationUpdateRequestSchema = z.object({
  name: z.string().optional(),
});
export type NotificationUpdateRequest = z.infer<typeof NotificationUpdateRequestSchema>;

/** Request for `plesk.notification.expiration` */
export const NotificationExpirationRequestSchema = z.object({
  name: z.string().optional(),
});
export type NotificationExpirationRequest = z.infer<typeof NotificationExpirationRequestSchema>;

