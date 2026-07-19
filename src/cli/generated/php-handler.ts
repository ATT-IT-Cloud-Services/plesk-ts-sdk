/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _phpHandlerOptionFlags,
  _phpHandlerFlagKeys,
  PhpHandlerAddRequestSchema,
  PhpHandlerUpdateRequestSchema,
  PhpHandlerListRequestSchema,
  PhpHandlerReplaceRequestSchema,
  PhpHandlerRemoveRequestSchema,
  PhpHandlerEnableRequestSchema,
  PhpHandlerDisableRequestSchema,
  PhpHandlerGetUsageRequestSchema,
  PhpHandlerRereadRequestSchema,
  PhpHandlerExtensionListRequestSchema,
  PhpHandlerExtensionEnableRequestSchema,
  PhpHandlerExtensionDisableRequestSchema,
  PhpHandlerExtensionInstallRequestSchema,
  PhpHandlerExtensionUninstallRequestSchema,
  PhpHandlerExtensionListInstallableRequestSchema,
  type PhpHandlerAddRequest,
  type PhpHandlerUpdateRequest,
  type PhpHandlerListRequest,
  type PhpHandlerReplaceRequest,
  type PhpHandlerRemoveRequest,
  type PhpHandlerEnableRequest,
  type PhpHandlerDisableRequest,
  type PhpHandlerGetUsageRequest,
  type PhpHandlerRereadRequest,
  type PhpHandlerExtensionListRequest,
  type PhpHandlerExtensionEnableRequest,
  type PhpHandlerExtensionDisableRequest,
  type PhpHandlerExtensionInstallRequest,
  type PhpHandlerExtensionUninstallRequest,
  type PhpHandlerExtensionListInstallableRequest,
} from "../../models/cli-commands/php-handler.js";

/** PHP Handlers */
export class PhpHandlerResource {
  constructor(private readonly http: HttpClient) {}

  /** PHP Handlers: add */
  add(body: PhpHandlerAddRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--add",
      schema: PhpHandlerAddRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: update */
  update(body: PhpHandlerUpdateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--update",
      schema: PhpHandlerUpdateRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: list */
  list(body: PhpHandlerListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--list",
      schema: PhpHandlerListRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: replace */
  replace(body: PhpHandlerReplaceRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--replace",
      schema: PhpHandlerReplaceRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: remove */
  remove(body: PhpHandlerRemoveRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--remove",
      schema: PhpHandlerRemoveRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: enable */
  enable(body: PhpHandlerEnableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--enable",
      schema: PhpHandlerEnableRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: disable */
  disable(body: PhpHandlerDisableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--disable",
      schema: PhpHandlerDisableRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: getUsage */
  getUsage(body: PhpHandlerGetUsageRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--get-usage",
      schema: PhpHandlerGetUsageRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: reread */
  reread(body: PhpHandlerRereadRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--reread",
      schema: PhpHandlerRereadRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: extensionList */
  extensionList(body: PhpHandlerExtensionListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--extension-list",
      schema: PhpHandlerExtensionListRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: extensionEnable */
  extensionEnable(body: PhpHandlerExtensionEnableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--extension-enable",
      schema: PhpHandlerExtensionEnableRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: extensionDisable */
  extensionDisable(body: PhpHandlerExtensionDisableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--extension-disable",
      schema: PhpHandlerExtensionDisableRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: extensionInstall */
  extensionInstall(body: PhpHandlerExtensionInstallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--extension-install",
      schema: PhpHandlerExtensionInstallRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: extensionUninstall */
  extensionUninstall(body: PhpHandlerExtensionUninstallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--extension-uninstall",
      schema: PhpHandlerExtensionUninstallRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }

  /** PHP Handlers: extensionListInstallable */
  extensionListInstallable(body: PhpHandlerExtensionListInstallableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "php_handler",
      command: "--extension-list-installable",
      schema: PhpHandlerExtensionListInstallableRequestSchema,
      body,
      optionFlags: _phpHandlerOptionFlags,
      flagKeys: _phpHandlerFlagKeys,
    });
  }
}
