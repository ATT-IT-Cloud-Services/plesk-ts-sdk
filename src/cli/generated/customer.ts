/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _customerOptionFlags,
  _customerFlagKeys,
  CustomerCreateRequestSchema,
  CustomerUpdateRequestSchema,
  CustomerRemoveRequestSchema,
  CustomerInfoRequestSchema,
  CustomerOnRequestSchema,
  CustomerOffRequestSchema,
  CustomerListRequestSchema,
  CustomerConvertToResellerRequestSchema,
  CustomerChangeOwnerRequestSchema,
  type CustomerCreateRequest,
  type CustomerUpdateRequest,
  type CustomerRemoveRequest,
  type CustomerInfoRequest,
  type CustomerOnRequest,
  type CustomerOffRequest,
  type CustomerListRequest,
  type CustomerConvertToResellerRequest,
  type CustomerChangeOwnerRequest,
} from "../../models/cli-commands/customer.js";

/** Customer Accounts */
export class CustomerResource {
  constructor(private readonly http: HttpClient) {}

  /** Customer Accounts: create */
  create(body: CustomerCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--create",
      schema: CustomerCreateRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }

  /** Customer Accounts: update */
  update(body: CustomerUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--update",
      schema: CustomerUpdateRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }

  /** Customer Accounts: remove */
  remove(body: CustomerRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--remove",
      schema: CustomerRemoveRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }

  /** Customer Accounts: info */
  info(body: CustomerInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--info",
      schema: CustomerInfoRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }

  /** Customer Accounts: on */
  on(body: CustomerOnRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--on",
      schema: CustomerOnRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }

  /** Customer Accounts: off */
  off(body: CustomerOffRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--off",
      schema: CustomerOffRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }

  /** Customer Accounts: list */
  list(body: CustomerListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--list",
      schema: CustomerListRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }

  /** Customer Accounts: convertToReseller */
  convertToReseller(body: CustomerConvertToResellerRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--convert-to-reseller",
      schema: CustomerConvertToResellerRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }

  /** Customer Accounts: changeOwner */
  changeOwner(body: CustomerChangeOwnerRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "customer",
      command: "--change-owner",
      schema: CustomerChangeOwnerRequestSchema,
      body,
      optionFlags: _customerOptionFlags,
      flagKeys: _customerFlagKeys,
    });
  }
}
