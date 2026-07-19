/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _extensionToolsOptionFlags,
  _extensionToolsFlagKeys,
  ExtensionToolsCreateRequestSchema,
  ExtensionToolsRegisterRequestSchema,
  ExtensionToolsInstallRequestSchema,
  ExtensionToolsInstallUrlRequestSchema,
  ExtensionToolsUpgradeRequestSchema,
  ExtensionToolsUpgradeUrlRequestSchema,
  ExtensionToolsUninstallRequestSchema,
  ExtensionToolsPackRequestSchema,
  ExtensionToolsExecRequestSchema,
  ExtensionToolsListRequestSchema,
  ExtensionToolsEnableRequestSchema,
  ExtensionToolsDisableRequestSchema,
  ExtensionToolsCallRequestSchema,
  type ExtensionToolsCreateRequest,
  type ExtensionToolsRegisterRequest,
  type ExtensionToolsInstallRequest,
  type ExtensionToolsInstallUrlRequest,
  type ExtensionToolsUpgradeRequest,
  type ExtensionToolsUpgradeUrlRequest,
  type ExtensionToolsUninstallRequest,
  type ExtensionToolsPackRequest,
  type ExtensionToolsExecRequest,
  type ExtensionToolsListRequest,
  type ExtensionToolsEnableRequest,
  type ExtensionToolsDisableRequest,
  type ExtensionToolsCallRequest,
} from "../../models/cli-commands/extension.js";

/** Extensions */
export class ExtensionToolsResource {
  constructor(private readonly http: HttpClient) {}

  /** Extensions: create */
  create(body: ExtensionToolsCreateRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--create",
      schema: ExtensionToolsCreateRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: register */
  register(body: ExtensionToolsRegisterRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--register",
      schema: ExtensionToolsRegisterRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: install */
  install(body: ExtensionToolsInstallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--install",
      schema: ExtensionToolsInstallRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: installUrl */
  installUrl(body: ExtensionToolsInstallUrlRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--install-url",
      schema: ExtensionToolsInstallUrlRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: upgrade */
  upgrade(body: ExtensionToolsUpgradeRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--upgrade",
      schema: ExtensionToolsUpgradeRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: upgradeUrl */
  upgradeUrl(body: ExtensionToolsUpgradeUrlRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--upgrade-url",
      schema: ExtensionToolsUpgradeUrlRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: uninstall */
  uninstall(body: ExtensionToolsUninstallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--uninstall",
      schema: ExtensionToolsUninstallRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: pack */
  pack(body: ExtensionToolsPackRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--pack",
      schema: ExtensionToolsPackRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: exec */
  exec(body: ExtensionToolsExecRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--exec",
      schema: ExtensionToolsExecRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: list */
  list(body: ExtensionToolsListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--list",
      schema: ExtensionToolsListRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: enable */
  enable(body: ExtensionToolsEnableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--enable",
      schema: ExtensionToolsEnableRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: disable */
  disable(body: ExtensionToolsDisableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--disable",
      schema: ExtensionToolsDisableRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }

  /** Extensions: call */
  call(body: ExtensionToolsCallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "extension",
      command: "--call",
      schema: ExtensionToolsCallRequestSchema,
      body,
      optionFlags: _extensionToolsOptionFlags,
      flagKeys: _extensionToolsFlagKeys,
    });
  }
}
