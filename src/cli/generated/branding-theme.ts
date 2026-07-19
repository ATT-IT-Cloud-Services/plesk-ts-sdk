/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _brandingThemeOptionFlags,
  _brandingThemeFlagKeys,
  BrandingThemePackRequestSchema,
  BrandingThemeInstallRequestSchema,
  BrandingThemeSetRequestSchema,
  BrandingThemeUninstallRequestSchema,
  BrandingThemeListRequestSchema,
  type BrandingThemePackRequest,
  type BrandingThemeInstallRequest,
  type BrandingThemeSetRequest,
  type BrandingThemeUninstallRequest,
  type BrandingThemeListRequest,
} from "../../models/cli-commands/branding-theme.js";

/** Plesk Branding */
export class BrandingThemeResource {
  constructor(private readonly http: HttpClient) {}

  /** Plesk Branding: pack */
  pack(body: BrandingThemePackRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding_theme",
      command: "--pack",
      schema: BrandingThemePackRequestSchema,
      body,
      optionFlags: _brandingThemeOptionFlags,
      flagKeys: _brandingThemeFlagKeys,
    });
  }

  /** Plesk Branding: install */
  install(body: BrandingThemeInstallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding_theme",
      command: "--install",
      schema: BrandingThemeInstallRequestSchema,
      body,
      optionFlags: _brandingThemeOptionFlags,
      flagKeys: _brandingThemeFlagKeys,
    });
  }

  /** Plesk Branding: set */
  set(body: BrandingThemeSetRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding_theme",
      command: "--set",
      schema: BrandingThemeSetRequestSchema,
      body,
      optionFlags: _brandingThemeOptionFlags,
      flagKeys: _brandingThemeFlagKeys,
    });
  }

  /** Plesk Branding: uninstall */
  uninstall(body: BrandingThemeUninstallRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding_theme",
      command: "--uninstall",
      schema: BrandingThemeUninstallRequestSchema,
      body,
      optionFlags: _brandingThemeOptionFlags,
      flagKeys: _brandingThemeFlagKeys,
    });
  }

  /** Plesk Branding: list */
  list(body: BrandingThemeListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding_theme",
      command: "--list",
      schema: BrandingThemeListRequestSchema,
      body,
      optionFlags: _brandingThemeOptionFlags,
      flagKeys: _brandingThemeFlagKeys,
    });
  }
}
