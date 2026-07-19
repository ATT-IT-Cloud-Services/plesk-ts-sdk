/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _certificateOptionFlags: Record<string, string> = {

};

/** @internal */
export const _certificateFlagKeys: string[] = [];

/** Request for `plesk.certificate.create` */
export const CertificateCreateRequestSchema = z.object({
  name: z.string(),
});
export type CertificateCreateRequest = z.infer<typeof CertificateCreateRequestSchema>;

/** Request for `plesk.certificate.update` */
export const CertificateUpdateRequestSchema = z.object({
  name: z.string(),
});
export type CertificateUpdateRequest = z.infer<typeof CertificateUpdateRequestSchema>;

/** Request for `plesk.certificate.remove` */
export const CertificateRemoveRequestSchema = z.object({
  name: z.string(),
});
export type CertificateRemoveRequest = z.infer<typeof CertificateRemoveRequestSchema>;

/** Request for `plesk.certificate.assignCert` */
export const CertificateAssignCertRequestSchema = z.object({
  name: z.string(),
});
export type CertificateAssignCertRequest = z.infer<typeof CertificateAssignCertRequestSchema>;

/** Request for `plesk.certificate.list` */
export const CertificateListRequestSchema = z.object({
  name: z.string().optional(),
});
export type CertificateListRequest = z.infer<typeof CertificateListRequestSchema>;

