/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _notificationOptionFlags,
  _notificationFlagKeys,
  NotificationUpdateRequestSchema,
  NotificationExpirationRequestSchema,
  type NotificationUpdateRequest,
  type NotificationExpirationRequest,
} from "../../models/cli-commands/notification.js";

/** Email Notification About System Events */
export class NotificationResource {
  constructor(private readonly http: HttpClient) {}

  /** Email Notification About System Events: update */
  update(body: NotificationUpdateRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "notification",
      command: "--update",
      schema: NotificationUpdateRequestSchema,
      body,
      optionFlags: _notificationOptionFlags,
      flagKeys: _notificationFlagKeys,
    });
  }

  /** Email Notification About System Events: expiration */
  expiration(body: NotificationExpirationRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "notification",
      command: "--expiration",
      schema: NotificationExpirationRequestSchema,
      body,
      optionFlags: _notificationOptionFlags,
      flagKeys: _notificationFlagKeys,
    });
  }
}
