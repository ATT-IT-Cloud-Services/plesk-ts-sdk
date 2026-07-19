/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _eventHandlerOptionFlags: Record<string, string> = {

};

/** @internal */
export const _eventHandlerFlagKeys: string[] = [];

/** Request for `plesk.eventHandler.create` */
export const EventHandlerCreateRequestSchema = z.object({
  name: z.string(),
});
export type EventHandlerCreateRequest = z.infer<typeof EventHandlerCreateRequestSchema>;

/** Request for `plesk.eventHandler.update` */
export const EventHandlerUpdateRequestSchema = z.object({
  name: z.string(),
});
export type EventHandlerUpdateRequest = z.infer<typeof EventHandlerUpdateRequestSchema>;

/** Request for `plesk.eventHandler.delete` */
export const EventHandlerDeleteRequestSchema = z.object({
  name: z.string(),
});
export type EventHandlerDeleteRequest = z.infer<typeof EventHandlerDeleteRequestSchema>;

/** Request for `plesk.eventHandler.list` */
export const EventHandlerListRequestSchema = z.object({
  name: z.string().optional(),
});
export type EventHandlerListRequest = z.infer<typeof EventHandlerListRequestSchema>;

/** Request for `plesk.eventHandler.listEvents` */
export const EventHandlerListEventsRequestSchema = z.object({
  name: z.string().optional(),
});
export type EventHandlerListEventsRequest = z.infer<typeof EventHandlerListEventsRequestSchema>;

/** Request for `plesk.eventHandler.listUsers` */
export const EventHandlerListUsersRequestSchema = z.object({
  name: z.string().optional(),
});
export type EventHandlerListUsersRequest = z.infer<typeof EventHandlerListUsersRequestSchema>;

