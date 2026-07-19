/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _localesOptionFlags,
  _localesFlagKeys,
  LocalesSetDefaultRequestSchema,
  LocalesEnableRequestSchema,
  LocalesDisableRequestSchema,
  LocalesListRequestSchema,
  LocalesStatusRequestSchema,
  type LocalesSetDefaultRequest,
  type LocalesEnableRequest,
  type LocalesDisableRequest,
  type LocalesListRequest,
  type LocalesStatusRequest,
} from "../../models/cli-commands/locales.js";

/** Plesk Locales */
export class LocalesResource {
  constructor(private readonly http: HttpClient) {}

  /** Plesk Locales: setDefault */
  setDefault(body: LocalesSetDefaultRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "locales",
      command: "--set-default",
      schema: LocalesSetDefaultRequestSchema,
      body,
      optionFlags: _localesOptionFlags,
      flagKeys: _localesFlagKeys,
    });
  }

  /** Plesk Locales: enable */
  enable(body: LocalesEnableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "locales",
      command: "--enable",
      schema: LocalesEnableRequestSchema,
      body,
      optionFlags: _localesOptionFlags,
      flagKeys: _localesFlagKeys,
    });
  }

  /** Plesk Locales: disable */
  disable(body: LocalesDisableRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "locales",
      command: "--disable",
      schema: LocalesDisableRequestSchema,
      body,
      optionFlags: _localesOptionFlags,
      flagKeys: _localesFlagKeys,
    });
  }

  /** Plesk Locales: list */
  list(body: LocalesListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "locales",
      command: "--list",
      schema: LocalesListRequestSchema,
      body,
      optionFlags: _localesOptionFlags,
      flagKeys: _localesFlagKeys,
    });
  }

  /** Plesk Locales: status */
  status(body: LocalesStatusRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "locales",
      command: "--status",
      schema: LocalesStatusRequestSchema,
      body,
      optionFlags: _localesOptionFlags,
      flagKeys: _localesFlagKeys,
    });
  }
}
