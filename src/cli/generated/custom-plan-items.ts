/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _customPlanItemsOptionFlags,
  _customPlanItemsFlagKeys,
  CustomPlanItemsAddRequestSchema,
  CustomPlanItemsUpdateRequestSchema,
  CustomPlanItemsRemoveRequestSchema,
  CustomPlanItemsListRequestSchema,
  type CustomPlanItemsAddRequest,
  type CustomPlanItemsUpdateRequest,
  type CustomPlanItemsRemoveRequest,
  type CustomPlanItemsListRequest,
} from "../../models/cli-commands/custom-plan-items.js";

/** Custom Plan Options */
export class CustomPlanItemsResource {
  constructor(private readonly http: HttpClient) {}

  /** Custom Plan Options: add */
  add(body: CustomPlanItemsAddRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "custom_plan_items",
      command: "--add",
      schema: CustomPlanItemsAddRequestSchema,
      body,
      optionFlags: _customPlanItemsOptionFlags,
      flagKeys: _customPlanItemsFlagKeys,
    });
  }

  /** Custom Plan Options: update */
  update(body: CustomPlanItemsUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "custom_plan_items",
      command: "--update",
      schema: CustomPlanItemsUpdateRequestSchema,
      body,
      optionFlags: _customPlanItemsOptionFlags,
      flagKeys: _customPlanItemsFlagKeys,
    });
  }

  /** Custom Plan Options: remove */
  remove(body: CustomPlanItemsRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "custom_plan_items",
      command: "--remove",
      schema: CustomPlanItemsRemoveRequestSchema,
      body,
      optionFlags: _customPlanItemsOptionFlags,
      flagKeys: _customPlanItemsFlagKeys,
    });
  }

  /** Custom Plan Options: list */
  list(body: CustomPlanItemsListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "custom_plan_items",
      command: "--list",
      schema: CustomPlanItemsListRequestSchema,
      body,
      optionFlags: _customPlanItemsOptionFlags,
      flagKeys: _customPlanItemsFlagKeys,
    });
  }
}
