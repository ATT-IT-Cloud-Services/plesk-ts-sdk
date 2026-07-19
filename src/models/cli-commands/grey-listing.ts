/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _greyListingOptionFlags: Record<string, string> = {

};

/** @internal */
export const _greyListingFlagKeys: string[] = [];

/** Request for `plesk.greyListing.updateMailname` */
export const GreyListingUpdateMailnameRequestSchema = z.object({
  name: z.string(),
});
export type GreyListingUpdateMailnameRequest = z.infer<typeof GreyListingUpdateMailnameRequestSchema>;

/** Request for `plesk.greyListing.updateDomain` */
export const GreyListingUpdateDomainRequestSchema = z.object({
  name: z.string(),
});
export type GreyListingUpdateDomainRequest = z.infer<typeof GreyListingUpdateDomainRequestSchema>;

/** Request for `plesk.greyListing.updateServer` */
export const GreyListingUpdateServerRequestSchema = z.object({
  name: z.string().optional(),
});
export type GreyListingUpdateServerRequest = z.infer<typeof GreyListingUpdateServerRequestSchema>;

/** Request for `plesk.greyListing.infoMailname` */
export const GreyListingInfoMailnameRequestSchema = z.object({
  name: z.string(),
});
export type GreyListingInfoMailnameRequest = z.infer<typeof GreyListingInfoMailnameRequestSchema>;

/** Request for `plesk.greyListing.infoDomain` */
export const GreyListingInfoDomainRequestSchema = z.object({
  name: z.string(),
});
export type GreyListingInfoDomainRequest = z.infer<typeof GreyListingInfoDomainRequestSchema>;

/** Request for `plesk.greyListing.infoServer` */
export const GreyListingInfoServerRequestSchema = z.object({
  name: z.string().optional(),
});
export type GreyListingInfoServerRequest = z.infer<typeof GreyListingInfoServerRequestSchema>;

