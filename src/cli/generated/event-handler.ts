/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _eventHandlerOptionFlags,
  _eventHandlerFlagKeys,
  EventHandlerCreateRequestSchema,
  EventHandlerUpdateRequestSchema,
  EventHandlerDeleteRequestSchema,
  EventHandlerListRequestSchema,
  EventHandlerListEventsRequestSchema,
  EventHandlerListUsersRequestSchema,
  type EventHandlerCreateRequest,
  type EventHandlerUpdateRequest,
  type EventHandlerDeleteRequest,
  type EventHandlerListRequest,
  type EventHandlerListEventsRequest,
  type EventHandlerListUsersRequest,
} from "../../models/cli-commands/event-handler.js";

/** Event Handlers */
export class EventHandlerResource {
  constructor(private readonly http: HttpClient) {}

  /** Event Handlers: create */
  create(body: EventHandlerCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "event_handler",
      command: "--create",
      schema: EventHandlerCreateRequestSchema,
      body,
      optionFlags: _eventHandlerOptionFlags,
      flagKeys: _eventHandlerFlagKeys,
    });
  }

  /** Event Handlers: update */
  update(body: EventHandlerUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "event_handler",
      command: "--update",
      schema: EventHandlerUpdateRequestSchema,
      body,
      optionFlags: _eventHandlerOptionFlags,
      flagKeys: _eventHandlerFlagKeys,
    });
  }

  /** Event Handlers: delete */
  delete(body: EventHandlerDeleteRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "event_handler",
      command: "--delete",
      schema: EventHandlerDeleteRequestSchema,
      body,
      optionFlags: _eventHandlerOptionFlags,
      flagKeys: _eventHandlerFlagKeys,
    });
  }

  /** Event Handlers: list */
  list(body: EventHandlerListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "event_handler",
      command: "--list",
      schema: EventHandlerListRequestSchema,
      body,
      optionFlags: _eventHandlerOptionFlags,
      flagKeys: _eventHandlerFlagKeys,
    });
  }

  /** Event Handlers: listEvents */
  listEvents(body: EventHandlerListEventsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "event_handler",
      command: "--list-events",
      schema: EventHandlerListEventsRequestSchema,
      body,
      optionFlags: _eventHandlerOptionFlags,
      flagKeys: _eventHandlerFlagKeys,
    });
  }

  /** Event Handlers: listUsers */
  listUsers(body: EventHandlerListUsersRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "event_handler",
      command: "--list-users",
      schema: EventHandlerListUsersRequestSchema,
      body,
      optionFlags: _eventHandlerOptionFlags,
      flagKeys: _eventHandlerFlagKeys,
    });
  }
}
