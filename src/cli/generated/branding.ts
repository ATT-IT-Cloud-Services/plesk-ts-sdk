/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _brandingOptionFlags,
  _brandingFlagKeys,
  BrandingCustomTitleRequestSchema,
  BrandingCustomLogoRequestSchema,
  BrandingResetTitleRequestSchema,
  BrandingResetLogoRequestSchema,
  BrandingSetCustomBackgroundRequestSchema,
  BrandingResetCustomBackgroundRequestSchema,
  BrandingShowRequestSchema,
  type BrandingCustomTitleRequest,
  type BrandingCustomLogoRequest,
  type BrandingResetTitleRequest,
  type BrandingResetLogoRequest,
  type BrandingSetCustomBackgroundRequest,
  type BrandingResetCustomBackgroundRequest,
  type BrandingShowRequest,
} from "../../models/cli-commands/branding.js";

/** Custom Page Title, Logo, and Favicon */
export class BrandingResource {
  constructor(private readonly http: HttpClient) {}

  /** Custom Page Title, Logo, and Favicon: customTitle */
  customTitle(body: BrandingCustomTitleRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding",
      command: "--custom-title",
      schema: BrandingCustomTitleRequestSchema,
      body,
      optionFlags: _brandingOptionFlags,
      flagKeys: _brandingFlagKeys,
    });
  }

  /** Custom Page Title, Logo, and Favicon: customLogo */
  customLogo(body: BrandingCustomLogoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding",
      command: "--custom-logo",
      schema: BrandingCustomLogoRequestSchema,
      body,
      optionFlags: _brandingOptionFlags,
      flagKeys: _brandingFlagKeys,
    });
  }

  /** Custom Page Title, Logo, and Favicon: resetTitle */
  resetTitle(body: BrandingResetTitleRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding",
      command: "--reset-title",
      schema: BrandingResetTitleRequestSchema,
      body,
      optionFlags: _brandingOptionFlags,
      flagKeys: _brandingFlagKeys,
    });
  }

  /** Custom Page Title, Logo, and Favicon: resetLogo */
  resetLogo(body: BrandingResetLogoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding",
      command: "--reset-logo",
      schema: BrandingResetLogoRequestSchema,
      body,
      optionFlags: _brandingOptionFlags,
      flagKeys: _brandingFlagKeys,
    });
  }

  /** Custom Page Title, Logo, and Favicon: setCustomBackground */
  setCustomBackground(body: BrandingSetCustomBackgroundRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding",
      command: "--set-custom-background",
      schema: BrandingSetCustomBackgroundRequestSchema,
      body,
      optionFlags: _brandingOptionFlags,
      flagKeys: _brandingFlagKeys,
    });
  }

  /** Custom Page Title, Logo, and Favicon: resetCustomBackground */
  resetCustomBackground(body: BrandingResetCustomBackgroundRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding",
      command: "--reset-custom-background",
      schema: BrandingResetCustomBackgroundRequestSchema,
      body,
      optionFlags: _brandingOptionFlags,
      flagKeys: _brandingFlagKeys,
    });
  }

  /** Custom Page Title, Logo, and Favicon: show */
  show(body: BrandingShowRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "branding",
      command: "--show",
      schema: BrandingShowRequestSchema,
      body,
      optionFlags: _brandingOptionFlags,
      flagKeys: _brandingFlagKeys,
    });
  }
}
