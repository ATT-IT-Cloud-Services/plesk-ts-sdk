/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _subscriptionOptionFlags,
  _subscriptionFlagKeys,
  SubscriptionCreateRequestSchema,
  SubscriptionUpdateRequestSchema,
  SubscriptionMergeRequestSchema,
  SubscriptionRemoveRequestSchema,
  SubscriptionListRequestSchema,
  SubscriptionInfoRequestSchema,
  SubscriptionWebspaceOnRequestSchema,
  SubscriptionWebspaceOffRequestSchema,
  SubscriptionLockSubscriptionRequestSchema,
  SubscriptionUnlockSubscriptionRequestSchema,
  SubscriptionNoSubscriptionRequestSchema,
  SubscriptionSwitchSubscriptionRequestSchema,
  SubscriptionSyncSubscriptionRequestSchema,
  SubscriptionAddSubscriptionRequestSchema,
  SubscriptionRemoveSubscriptionRequestSchema,
  SubscriptionChangeOwnerRequestSchema,
  SubscriptionAddCustomPlanItemRequestSchema,
  SubscriptionRemoveCustomPlanItemRequestSchema,
  SubscriptionRemoveAllCustomPlanItemsRequestSchema,
  SubscriptionShowCustomPlanItemsRequestSchema,
  SubscriptionShellsRequestSchema,
  SubscriptionUpdatePhpSettingsRequestSchema,
  SubscriptionShowPhpSettingsRequestSchema,
  SubscriptionUpdateWebServerSettingsRequestSchema,
  SubscriptionShowWebServerSettingsRequestSchema,
  SubscriptionSuspendRequestSchema,
  SubscriptionUpdateWebAppFirewallRequestSchema,
  SubscriptionShowWebAppFirewallRequestSchema,
  type SubscriptionCreateRequest,
  type SubscriptionUpdateRequest,
  type SubscriptionMergeRequest,
  type SubscriptionRemoveRequest,
  type SubscriptionListRequest,
  type SubscriptionInfoRequest,
  type SubscriptionWebspaceOnRequest,
  type SubscriptionWebspaceOffRequest,
  type SubscriptionLockSubscriptionRequest,
  type SubscriptionUnlockSubscriptionRequest,
  type SubscriptionNoSubscriptionRequest,
  type SubscriptionSwitchSubscriptionRequest,
  type SubscriptionSyncSubscriptionRequest,
  type SubscriptionAddSubscriptionRequest,
  type SubscriptionRemoveSubscriptionRequest,
  type SubscriptionChangeOwnerRequest,
  type SubscriptionAddCustomPlanItemRequest,
  type SubscriptionRemoveCustomPlanItemRequest,
  type SubscriptionRemoveAllCustomPlanItemsRequest,
  type SubscriptionShowCustomPlanItemsRequest,
  type SubscriptionShellsRequest,
  type SubscriptionUpdatePhpSettingsRequest,
  type SubscriptionShowPhpSettingsRequest,
  type SubscriptionUpdateWebServerSettingsRequest,
  type SubscriptionShowWebServerSettingsRequest,
  type SubscriptionSuspendRequest,
  type SubscriptionUpdateWebAppFirewallRequest,
  type SubscriptionShowWebAppFirewallRequest,
} from "../../models/cli-commands/subscription.js";

/** Subscriptions */
export class SubscriptionResource {
  constructor(private readonly http: HttpClient) {}

  /** Subscriptions: create */
  create(body: SubscriptionCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--create",
      schema: SubscriptionCreateRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: update */
  update(body: SubscriptionUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--update",
      schema: SubscriptionUpdateRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: merge */
  merge(body: SubscriptionMergeRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--merge",
      schema: SubscriptionMergeRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: remove */
  remove(body: SubscriptionRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--remove",
      schema: SubscriptionRemoveRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: list */
  list(body: SubscriptionListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--list",
      schema: SubscriptionListRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: info */
  info(body: SubscriptionInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--info",
      schema: SubscriptionInfoRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: webspaceOn */
  webspaceOn(body: SubscriptionWebspaceOnRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--webspace-on",
      schema: SubscriptionWebspaceOnRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: webspaceOff */
  webspaceOff(body: SubscriptionWebspaceOffRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--webspace-off",
      schema: SubscriptionWebspaceOffRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: lockSubscription */
  lockSubscription(body: SubscriptionLockSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--lock-subscription",
      schema: SubscriptionLockSubscriptionRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: unlockSubscription */
  unlockSubscription(body: SubscriptionUnlockSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--unlock-subscription",
      schema: SubscriptionUnlockSubscriptionRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: noSubscription */
  noSubscription(body: SubscriptionNoSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--no-subscription",
      schema: SubscriptionNoSubscriptionRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: switchSubscription */
  switchSubscription(body: SubscriptionSwitchSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--switch-subscription",
      schema: SubscriptionSwitchSubscriptionRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: syncSubscription */
  syncSubscription(body: SubscriptionSyncSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--sync-subscription",
      schema: SubscriptionSyncSubscriptionRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: addSubscription */
  addSubscription(body: SubscriptionAddSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--add-subscription",
      schema: SubscriptionAddSubscriptionRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: removeSubscription */
  removeSubscription(body: SubscriptionRemoveSubscriptionRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--remove-subscription",
      schema: SubscriptionRemoveSubscriptionRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: changeOwner */
  changeOwner(body: SubscriptionChangeOwnerRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--change-owner",
      schema: SubscriptionChangeOwnerRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: addCustomPlanItem */
  addCustomPlanItem(body: SubscriptionAddCustomPlanItemRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--add-custom-plan-item",
      schema: SubscriptionAddCustomPlanItemRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: removeCustomPlanItem */
  removeCustomPlanItem(body: SubscriptionRemoveCustomPlanItemRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--remove-custom-plan-item",
      schema: SubscriptionRemoveCustomPlanItemRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: removeAllCustomPlanItems */
  removeAllCustomPlanItems(body: SubscriptionRemoveAllCustomPlanItemsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--remove-all-custom-plan-items",
      schema: SubscriptionRemoveAllCustomPlanItemsRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: showCustomPlanItems */
  showCustomPlanItems(body: SubscriptionShowCustomPlanItemsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--show-custom-plan-items",
      schema: SubscriptionShowCustomPlanItemsRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: shells */
  shells(body: SubscriptionShellsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--shells",
      schema: SubscriptionShellsRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: updatePhpSettings */
  updatePhpSettings(body: SubscriptionUpdatePhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--update-php-settings",
      schema: SubscriptionUpdatePhpSettingsRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: showPhpSettings */
  showPhpSettings(body: SubscriptionShowPhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--show-php-settings",
      schema: SubscriptionShowPhpSettingsRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: updateWebServerSettings */
  updateWebServerSettings(body: SubscriptionUpdateWebServerSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--update-web-server-settings",
      schema: SubscriptionUpdateWebServerSettingsRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: showWebServerSettings */
  showWebServerSettings(body: SubscriptionShowWebServerSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--show-web-server-settings",
      schema: SubscriptionShowWebServerSettingsRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: suspend */
  suspend(body: SubscriptionSuspendRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--suspend",
      schema: SubscriptionSuspendRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: updateWebAppFirewall */
  updateWebAppFirewall(body: SubscriptionUpdateWebAppFirewallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--update-web-app-firewall",
      schema: SubscriptionUpdateWebAppFirewallRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }

  /** Subscriptions: showWebAppFirewall */
  showWebAppFirewall(body: SubscriptionShowWebAppFirewallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription",
      command: "--show-web-app-firewall",
      schema: SubscriptionShowWebAppFirewallRequestSchema,
      body,
      optionFlags: _subscriptionOptionFlags,
      flagKeys: _subscriptionFlagKeys,
    });
  }
}
