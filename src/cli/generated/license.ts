/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _licenseOptionFlags,
  _licenseFlagKeys,
  LicenseInstallRequestSchema,
  LicenseCheckInstalledLicenseRequestSchema,
  LicenseRetrieveRequestSchema,
  type LicenseInstallRequest,
  type LicenseCheckInstalledLicenseRequest,
  type LicenseRetrieveRequest,
} from "../../models/cli-commands/license.js";

/** License Keys */
export class LicenseResource {
  constructor(private readonly http: HttpClient) {}

  /** License Keys: install */
  install(body: LicenseInstallRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "license",
      command: "--install",
      schema: LicenseInstallRequestSchema,
      body,
      optionFlags: _licenseOptionFlags,
      flagKeys: _licenseFlagKeys,
    });
  }

  /** License Keys: checkInstalledLicense */
  checkInstalledLicense(body: LicenseCheckInstalledLicenseRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "license",
      command: "--check-installed-license",
      schema: LicenseCheckInstalledLicenseRequestSchema,
      body,
      optionFlags: _licenseOptionFlags,
      flagKeys: _licenseFlagKeys,
    });
  }

  /** License Keys: retrieve */
  retrieve(body: LicenseRetrieveRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "license",
      command: "--retrieve",
      schema: LicenseRetrieveRequestSchema,
      body,
      optionFlags: _licenseOptionFlags,
      flagKeys: _licenseFlagKeys,
    });
  }
}
