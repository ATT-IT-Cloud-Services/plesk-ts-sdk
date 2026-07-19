/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _servicePlanAddonOptionFlags,
  _servicePlanAddonFlagKeys,
  ServicePlanAddonCreateRequestSchema,
  ServicePlanAddonUpdateRequestSchema,
  ServicePlanAddonDuplicateRequestSchema,
  ServicePlanAddonRemoveRequestSchema,
  ServicePlanAddonInfoRequestSchema,
  ServicePlanAddonXmlInfoRequestSchema,
  ServicePlanAddonUpdatePhpSettingsRequestSchema,
  ServicePlanAddonShowPhpSettingsRequestSchema,
  type ServicePlanAddonCreateRequest,
  type ServicePlanAddonUpdateRequest,
  type ServicePlanAddonDuplicateRequest,
  type ServicePlanAddonRemoveRequest,
  type ServicePlanAddonInfoRequest,
  type ServicePlanAddonXmlInfoRequest,
  type ServicePlanAddonUpdatePhpSettingsRequest,
  type ServicePlanAddonShowPhpSettingsRequest,
} from "../../models/cli-commands/service-plan-addon.js";

/** Hosting Plan Add-ons */
export class ServicePlanAddonResource {
  constructor(private readonly http: HttpClient) {}

  /** Hosting Plan Add-ons: create */
  create(body: ServicePlanAddonCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan_addon",
      command: "--create",
      schema: ServicePlanAddonCreateRequestSchema,
      body,
      optionFlags: _servicePlanAddonOptionFlags,
      flagKeys: _servicePlanAddonFlagKeys,
    });
  }

  /** Hosting Plan Add-ons: update */
  update(body: ServicePlanAddonUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan_addon",
      command: "--update",
      schema: ServicePlanAddonUpdateRequestSchema,
      body,
      optionFlags: _servicePlanAddonOptionFlags,
      flagKeys: _servicePlanAddonFlagKeys,
    });
  }

  /** Hosting Plan Add-ons: duplicate */
  duplicate(body: ServicePlanAddonDuplicateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan_addon",
      command: "--duplicate",
      schema: ServicePlanAddonDuplicateRequestSchema,
      body,
      optionFlags: _servicePlanAddonOptionFlags,
      flagKeys: _servicePlanAddonFlagKeys,
    });
  }

  /** Hosting Plan Add-ons: remove */
  remove(body: ServicePlanAddonRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan_addon",
      command: "--remove",
      schema: ServicePlanAddonRemoveRequestSchema,
      body,
      optionFlags: _servicePlanAddonOptionFlags,
      flagKeys: _servicePlanAddonFlagKeys,
    });
  }

  /** Hosting Plan Add-ons: info */
  info(body: ServicePlanAddonInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan_addon",
      command: "--info",
      schema: ServicePlanAddonInfoRequestSchema,
      body,
      optionFlags: _servicePlanAddonOptionFlags,
      flagKeys: _servicePlanAddonFlagKeys,
    });
  }

  /** Hosting Plan Add-ons: xmlInfo */
  xmlInfo(body: ServicePlanAddonXmlInfoRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan_addon",
      command: "--xml-info",
      schema: ServicePlanAddonXmlInfoRequestSchema,
      body,
      optionFlags: _servicePlanAddonOptionFlags,
      flagKeys: _servicePlanAddonFlagKeys,
    });
  }

  /** Hosting Plan Add-ons: updatePhpSettings */
  updatePhpSettings(body: ServicePlanAddonUpdatePhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan_addon",
      command: "--update-php-settings",
      schema: ServicePlanAddonUpdatePhpSettingsRequestSchema,
      body,
      optionFlags: _servicePlanAddonOptionFlags,
      flagKeys: _servicePlanAddonFlagKeys,
    });
  }

  /** Hosting Plan Add-ons: showPhpSettings */
  showPhpSettings(body: ServicePlanAddonShowPhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "service_plan_addon",
      command: "--show-php-settings",
      schema: ServicePlanAddonShowPhpSettingsRequestSchema,
      body,
      optionFlags: _servicePlanAddonOptionFlags,
      flagKeys: _servicePlanAddonFlagKeys,
    });
  }
}
