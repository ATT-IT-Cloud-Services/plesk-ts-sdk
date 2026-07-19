/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _servicePlanOptionFlags,
  _servicePlanFlagKeys,
  ServicePlanCreateRequestSchema,
  ServicePlanUpdateRequestSchema,
  ServicePlanDuplicateRequestSchema,
  ServicePlanRemoveRequestSchema,
  ServicePlanCreateDefaultRequestSchema,
  ServicePlanInfoRequestSchema,
  ServicePlanXmlInfoRequestSchema,
  ServicePlanAddCustomPlanItemRequestSchema,
  ServicePlanRemoveCustomPlanItemRequestSchema,
  ServicePlanRemoveAllCustomPlanItemsRequestSchema,
  ServicePlanShowCustomPlanItemsRequestSchema,
  ServicePlanUpdatePhpSettingsRequestSchema,
  ServicePlanShowPhpSettingsRequestSchema,
  type ServicePlanCreateRequest,
  type ServicePlanUpdateRequest,
  type ServicePlanDuplicateRequest,
  type ServicePlanRemoveRequest,
  type ServicePlanCreateDefaultRequest,
  type ServicePlanInfoRequest,
  type ServicePlanXmlInfoRequest,
  type ServicePlanAddCustomPlanItemRequest,
  type ServicePlanRemoveCustomPlanItemRequest,
  type ServicePlanRemoveAllCustomPlanItemsRequest,
  type ServicePlanShowCustomPlanItemsRequest,
  type ServicePlanUpdatePhpSettingsRequest,
  type ServicePlanShowPhpSettingsRequest,
} from "../../models/cli-commands/service-plan.js";

/** Hosting Plans */
export class ServicePlanResource {
  constructor(private readonly http: HttpClient) {}

  /** Hosting Plans: create */
  create(body: ServicePlanCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--create",
      schema: ServicePlanCreateRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: update */
  update(body: ServicePlanUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--update",
      schema: ServicePlanUpdateRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: duplicate */
  duplicate(body: ServicePlanDuplicateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--duplicate",
      schema: ServicePlanDuplicateRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: remove */
  remove(body: ServicePlanRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--remove",
      schema: ServicePlanRemoveRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: createDefault */
  createDefault(body: ServicePlanCreateDefaultRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--create-default",
      schema: ServicePlanCreateDefaultRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: info */
  info(body: ServicePlanInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--info",
      schema: ServicePlanInfoRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: xmlInfo */
  xmlInfo(body: ServicePlanXmlInfoRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--xml-info",
      schema: ServicePlanXmlInfoRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: addCustomPlanItem */
  addCustomPlanItem(body: ServicePlanAddCustomPlanItemRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--add-custom-plan-item",
      schema: ServicePlanAddCustomPlanItemRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: removeCustomPlanItem */
  removeCustomPlanItem(body: ServicePlanRemoveCustomPlanItemRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--remove-custom-plan-item",
      schema: ServicePlanRemoveCustomPlanItemRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: removeAllCustomPlanItems */
  removeAllCustomPlanItems(body: ServicePlanRemoveAllCustomPlanItemsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--remove-all-custom-plan-items",
      schema: ServicePlanRemoveAllCustomPlanItemsRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: showCustomPlanItems */
  showCustomPlanItems(body: ServicePlanShowCustomPlanItemsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--show-custom-plan-items",
      schema: ServicePlanShowCustomPlanItemsRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: updatePhpSettings */
  updatePhpSettings(body: ServicePlanUpdatePhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--update-php-settings",
      schema: ServicePlanUpdatePhpSettingsRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }

  /** Hosting Plans: showPhpSettings */
  showPhpSettings(body: ServicePlanShowPhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan",
      command: "--show-php-settings",
      schema: ServicePlanShowPhpSettingsRequestSchema,
      body,
      optionFlags: _servicePlanOptionFlags,
      flagKeys: _servicePlanFlagKeys,
    });
  }
}
