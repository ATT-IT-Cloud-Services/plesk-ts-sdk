/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _greyListingOptionFlags,
  _greyListingFlagKeys,
  GreyListingUpdateMailnameRequestSchema,
  GreyListingUpdateDomainRequestSchema,
  GreyListingUpdateServerRequestSchema,
  GreyListingInfoMailnameRequestSchema,
  GreyListingInfoDomainRequestSchema,
  GreyListingInfoServerRequestSchema,
  type GreyListingUpdateMailnameRequest,
  type GreyListingUpdateDomainRequest,
  type GreyListingUpdateServerRequest,
  type GreyListingInfoMailnameRequest,
  type GreyListingInfoDomainRequest,
  type GreyListingInfoServerRequest,
} from "../../models/cli-commands/grey-listing.js";

/** Greylisting */
export class GreyListingResource {
  constructor(private readonly http: HttpClient) {}

  /** Greylisting: updateMailname */
  updateMailname(body: GreyListingUpdateMailnameRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "grey_listing",
      command: "--update-mailname",
      schema: GreyListingUpdateMailnameRequestSchema,
      body,
      optionFlags: _greyListingOptionFlags,
      flagKeys: _greyListingFlagKeys,
    });
  }

  /** Greylisting: updateDomain */
  updateDomain(body: GreyListingUpdateDomainRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "grey_listing",
      command: "--update-domain",
      schema: GreyListingUpdateDomainRequestSchema,
      body,
      optionFlags: _greyListingOptionFlags,
      flagKeys: _greyListingFlagKeys,
    });
  }

  /** Greylisting: updateServer */
  updateServer(body: GreyListingUpdateServerRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "grey_listing",
      command: "--update-server",
      schema: GreyListingUpdateServerRequestSchema,
      body,
      optionFlags: _greyListingOptionFlags,
      flagKeys: _greyListingFlagKeys,
    });
  }

  /** Greylisting: infoMailname */
  infoMailname(body: GreyListingInfoMailnameRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "grey_listing",
      command: "--info-mailname",
      schema: GreyListingInfoMailnameRequestSchema,
      body,
      optionFlags: _greyListingOptionFlags,
      flagKeys: _greyListingFlagKeys,
    });
  }

  /** Greylisting: infoDomain */
  infoDomain(body: GreyListingInfoDomainRequest): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "grey_listing",
      command: "--info-domain",
      schema: GreyListingInfoDomainRequestSchema,
      body,
      optionFlags: _greyListingOptionFlags,
      flagKeys: _greyListingFlagKeys,
    });
  }

  /** Greylisting: infoServer */
  infoServer(body: GreyListingInfoServerRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "grey_listing",
      command: "--info-server",
      schema: GreyListingInfoServerRequestSchema,
      body,
      optionFlags: _greyListingOptionFlags,
      flagKeys: _greyListingFlagKeys,
    });
  }
}
