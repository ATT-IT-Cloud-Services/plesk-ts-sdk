/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _resellerOptionFlags,
  _resellerFlagKeys,
  ResellerCreateRequestSchema,
  ResellerUpdateRequestSchema,
  ResellerRemoveRequestSchema,
  ResellerInfoRequestSchema,
  ResellerOnRequestSchema,
  ResellerOffRequestSchema,
  ResellerLockSubscriptionRequestSchema,
  ResellerUnlockSubscriptionRequestSchema,
  ResellerNoSubscriptionRequestSchema,
  ResellerSwitchSubscriptionRequestSchema,
  ResellerSyncSubscriptionRequestSchema,
  ResellerConvertToCustomerRequestSchema,
  type ResellerCreateRequest,
  type ResellerUpdateRequest,
  type ResellerRemoveRequest,
  type ResellerInfoRequest,
  type ResellerOnRequest,
  type ResellerOffRequest,
  type ResellerLockSubscriptionRequest,
  type ResellerUnlockSubscriptionRequest,
  type ResellerNoSubscriptionRequest,
  type ResellerSwitchSubscriptionRequest,
  type ResellerSyncSubscriptionRequest,
  type ResellerConvertToCustomerRequest,
} from "../../models/cli-commands/reseller.js";

/** Reseller Accounts */
export class ResellerResource {
  constructor(private readonly http: HttpClient) {}

  /** Reseller Accounts: create */
  create(body: ResellerCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--create",
      schema: ResellerCreateRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: update */
  update(body: ResellerUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--update",
      schema: ResellerUpdateRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: remove */
  remove(body: ResellerRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--remove",
      schema: ResellerRemoveRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: info */
  info(body: ResellerInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--info",
      schema: ResellerInfoRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: on */
  on(body: ResellerOnRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--on",
      schema: ResellerOnRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: off */
  off(body: ResellerOffRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--off",
      schema: ResellerOffRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: lockSubscription */
  lockSubscription(body: ResellerLockSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--lock-subscription",
      schema: ResellerLockSubscriptionRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: unlockSubscription */
  unlockSubscription(body: ResellerUnlockSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--unlock-subscription",
      schema: ResellerUnlockSubscriptionRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: noSubscription */
  noSubscription(body: ResellerNoSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--no-subscription",
      schema: ResellerNoSubscriptionRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: switchSubscription */
  switchSubscription(body: ResellerSwitchSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--switch-subscription",
      schema: ResellerSwitchSubscriptionRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: syncSubscription */
  syncSubscription(body: ResellerSyncSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--sync-subscription",
      schema: ResellerSyncSubscriptionRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }

  /** Reseller Accounts: convertToCustomer */
  convertToCustomer(body: ResellerConvertToCustomerRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "reseller",
      command: "--convert-to-customer",
      schema: ResellerConvertToCustomerRequestSchema,
      body,
      optionFlags: _resellerOptionFlags,
      flagKeys: _resellerFlagKeys,
    });
  }
}
