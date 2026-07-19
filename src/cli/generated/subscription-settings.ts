/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _subscriptionSettingsOptionFlags,
  _subscriptionSettingsFlagKeys,
  SubscriptionSettingsUpdateRequestSchema,
  SubscriptionSettingsInfoRequestSchema,
  SubscriptionSettingsSetDefaultRequestSchema,
  SubscriptionSettingsUpdatePhpSettingsRequestSchema,
  SubscriptionSettingsShowPhpSettingsRequestSchema,
  SubscriptionSettingsClearNginxCacheRequestSchema,
  type SubscriptionSettingsUpdateRequest,
  type SubscriptionSettingsInfoRequest,
  type SubscriptionSettingsSetDefaultRequest,
  type SubscriptionSettingsUpdatePhpSettingsRequest,
  type SubscriptionSettingsShowPhpSettingsRequest,
  type SubscriptionSettingsClearNginxCacheRequest,
} from "../../models/cli-commands/subscription-settings.js";

/** Hosting Subscription Settings */
export class SubscriptionSettingsResource {
  constructor(private readonly http: HttpClient) {}

  /** Hosting Subscription Settings: update */
  update(body: SubscriptionSettingsUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription_settings",
      command: "--update",
      schema: SubscriptionSettingsUpdateRequestSchema,
      body,
      optionFlags: _subscriptionSettingsOptionFlags,
      flagKeys: _subscriptionSettingsFlagKeys,
    });
  }

  /** Hosting Subscription Settings: info */
  info(body: SubscriptionSettingsInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription_settings",
      command: "--info",
      schema: SubscriptionSettingsInfoRequestSchema,
      body,
      optionFlags: _subscriptionSettingsOptionFlags,
      flagKeys: _subscriptionSettingsFlagKeys,
    });
  }

  /** Hosting Subscription Settings: setDefault */
  setDefault(body: SubscriptionSettingsSetDefaultRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription_settings",
      command: "--set-default",
      schema: SubscriptionSettingsSetDefaultRequestSchema,
      body,
      optionFlags: _subscriptionSettingsOptionFlags,
      flagKeys: _subscriptionSettingsFlagKeys,
    });
  }

  /** Hosting Subscription Settings: updatePhpSettings */
  updatePhpSettings(body: SubscriptionSettingsUpdatePhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription_settings",
      command: "--update-php-settings",
      schema: SubscriptionSettingsUpdatePhpSettingsRequestSchema,
      body,
      optionFlags: _subscriptionSettingsOptionFlags,
      flagKeys: _subscriptionSettingsFlagKeys,
    });
  }

  /** Hosting Subscription Settings: showPhpSettings */
  showPhpSettings(body: SubscriptionSettingsShowPhpSettingsRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription_settings",
      command: "--show-php-settings",
      schema: SubscriptionSettingsShowPhpSettingsRequestSchema,
      body,
      optionFlags: _subscriptionSettingsOptionFlags,
      flagKeys: _subscriptionSettingsFlagKeys,
    });
  }

  /** Hosting Subscription Settings: clearNginxCache */
  clearNginxCache(body: SubscriptionSettingsClearNginxCacheRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "subscription_settings",
      command: "--clear-nginx-cache",
      schema: SubscriptionSettingsClearNginxCacheRequestSchema,
      body,
      optionFlags: _subscriptionSettingsOptionFlags,
      flagKeys: _subscriptionSettingsFlagKeys,
    });
  }
}
