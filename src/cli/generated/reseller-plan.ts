/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _resellerPlanOptionFlags,
  _resellerPlanFlagKeys,
  ResellerPlanCreateRequestSchema,
  ResellerPlanUpdateRequestSchema,
  ResellerPlanDuplicateRequestSchema,
  ResellerPlanRemoveRequestSchema,
  ResellerPlanXmlInfoRequestSchema,
  ResellerPlanCreateDefaultRequestSchema,
  type ResellerPlanCreateRequest,
  type ResellerPlanUpdateRequest,
  type ResellerPlanDuplicateRequest,
  type ResellerPlanRemoveRequest,
  type ResellerPlanXmlInfoRequest,
  type ResellerPlanCreateDefaultRequest,
} from "../../models/cli-commands/reseller-plan.js";

/** Reseller Plans */
export class ResellerPlanResource {
  constructor(private readonly http: HttpClient) {}

  /** Reseller Plans: create */
  create(body: ResellerPlanCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller_plan",
      command: "--create",
      schema: ResellerPlanCreateRequestSchema,
      body,
      optionFlags: _resellerPlanOptionFlags,
      flagKeys: _resellerPlanFlagKeys,
    });
  }

  /** Reseller Plans: update */
  update(body: ResellerPlanUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller_plan",
      command: "--update",
      schema: ResellerPlanUpdateRequestSchema,
      body,
      optionFlags: _resellerPlanOptionFlags,
      flagKeys: _resellerPlanFlagKeys,
    });
  }

  /** Reseller Plans: duplicate */
  duplicate(body: ResellerPlanDuplicateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller_plan",
      command: "--duplicate",
      schema: ResellerPlanDuplicateRequestSchema,
      body,
      optionFlags: _resellerPlanOptionFlags,
      flagKeys: _resellerPlanFlagKeys,
    });
  }

  /** Reseller Plans: remove */
  remove(body: ResellerPlanRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller_plan",
      command: "--remove",
      schema: ResellerPlanRemoveRequestSchema,
      body,
      optionFlags: _resellerPlanOptionFlags,
      flagKeys: _resellerPlanFlagKeys,
    });
  }

  /** Reseller Plans: xmlInfo */
  xmlInfo(body: ResellerPlanXmlInfoRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller_plan",
      command: "--xml-info",
      schema: ResellerPlanXmlInfoRequestSchema,
      body,
      optionFlags: _resellerPlanOptionFlags,
      flagKeys: _resellerPlanFlagKeys,
    });
  }

  /** Reseller Plans: createDefault */
  createDefault(body: ResellerPlanCreateDefaultRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller_plan",
      command: "--create-default",
      schema: ResellerPlanCreateDefaultRequestSchema,
      body,
      optionFlags: _resellerPlanOptionFlags,
      flagKeys: _resellerPlanFlagKeys,
    });
  }
}
