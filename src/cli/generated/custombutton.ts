/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _custombuttonOptionFlags,
  _custombuttonFlagKeys,
  CustombuttonCreateRequestSchema,
  CustombuttonInfoRequestSchema,
  CustombuttonRemoveRequestSchema,
  CustombuttonListRequestSchema,
  type CustombuttonCreateRequest,
  type CustombuttonInfoRequest,
  type CustombuttonRemoveRequest,
  type CustombuttonListRequest,
} from "../../models/cli-commands/custombutton.js";

/** Custom Buttons */
export class CustombuttonResource {
  constructor(private readonly http: HttpClient) {}

  /** Custom Buttons: create */
  create(body: CustombuttonCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "custombutton",
      command: "--create",
      schema: CustombuttonCreateRequestSchema,
      body,
      optionFlags: _custombuttonOptionFlags,
      flagKeys: _custombuttonFlagKeys,
    });
  }

  /** Custom Buttons: info */
  info(body: CustombuttonInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "custombutton",
      command: "--info",
      schema: CustombuttonInfoRequestSchema,
      body,
      optionFlags: _custombuttonOptionFlags,
      flagKeys: _custombuttonFlagKeys,
    });
  }

  /** Custom Buttons: remove */
  remove(body: CustombuttonRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "custombutton",
      command: "--remove",
      schema: CustombuttonRemoveRequestSchema,
      body,
      optionFlags: _custombuttonOptionFlags,
      flagKeys: _custombuttonFlagKeys,
    });
  }

  /** Custom Buttons: list */
  list(body: CustombuttonListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "custombutton",
      command: "--list",
      schema: CustombuttonListRequestSchema,
      body,
      optionFlags: _custombuttonOptionFlags,
      flagKeys: _custombuttonFlagKeys,
    });
  }
}
