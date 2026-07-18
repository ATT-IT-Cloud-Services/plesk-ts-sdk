import { z } from "zod";

/** Reference to a domain. At least one of id, name, or guid must be provided. */
export const DomainReferenceSchema = z
  .object({
    id: z.number().optional(),
    name: z.string().optional(),
    guid: z.string().optional(),
  })
  .refine((v) => v.id !== undefined || v.name !== undefined || v.guid !== undefined, {
    message: "At least one of id, name, or guid must be provided",
  });
export type DomainReference = z.infer<typeof DomainReferenceSchema>;

/** Reference to a client. One of the following properties is required. */
export const OwnerClientReferenceSchema = z
  .object({
    id: z.number().optional(),
    login: z.string().optional(),
    guid: z.string().optional(),
    external_id: z.string().optional(),
  })
  .refine(
    (v) =>
      v.id !== undefined ||
      v.login !== undefined ||
      v.guid !== undefined ||
      v.external_id !== undefined,
    { message: "At least one of id, login, guid, or external_id must be provided" },
  );
export type OwnerClientReference = z.infer<typeof OwnerClientReferenceSchema>;

/** Identifies the service plan. One of the following properties is required. */
export const PlanReferenceSchema = z
  .object({
    name: z.string().optional(),
    id: z.number().optional(),
    guid: z.string().optional(),
    external_id: z.string().optional(),
  })
  .refine(
    (v) =>
      v.id !== undefined ||
      v.name !== undefined ||
      v.guid !== undefined ||
      v.external_id !== undefined,
    { message: "At least one of id, name, guid, or external_id must be provided" },
  );
export type PlanReference = z.infer<typeof PlanReferenceSchema>;

const HostingSettingsSchema = z.object({
  ftp_login: z.string().optional(),
  ftp_password: z.string().optional(),
  www_root: z.string().optional(),
  dest_url: z.string().optional(),
  http_code: z.union([z.literal(301), z.literal(302)]).optional(),
});

export const DomainRequestSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  hosting_type: z
    .enum(["virtual", "standard_forwarding", "frame_forwarding", "none"])
    .optional(),
  hosting_settings: HostingSettingsSchema.optional(),
  base_domain: DomainReferenceSchema.optional(),
  parent_domain: DomainReferenceSchema.optional(),
  owner_client: OwnerClientReferenceSchema.optional(),
  ip_addresses: z.array(z.string()).optional(),
  ipv4: z.array(z.string()).optional(),
  ipv6: z.array(z.string()).optional(),
  plan: PlanReferenceSchema.optional(),
});
export type DomainRequest = z.infer<typeof DomainRequestSchema>;

export interface DomainAlias {
  id: number;
  name: string;
  ascii_name: string;
  web: boolean;
  dns: boolean;
  mail: boolean;
  seo_redirect: boolean;
}

export interface DomainResponse {
  id: number;
  name: string;
  ascii_name: string;
  hosting_type: "virtual" | "standard_forwarding" | "frame_forwarding" | "none";
  base_domain_id: number;
  www_root: string;
  guid: string;
  created: string;
  aliases?: DomainAlias[];
}

export const DomainUpdateRequestSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  hosting_type: z
    .enum(["virtual", "standard_forwarding", "frame_forwarding", "none"])
    .optional(),
  hosting_settings: HostingSettingsSchema.optional(),
  owner_client: OwnerClientReferenceSchema.optional(),
  ip_addresses: z.array(z.string()).optional(),
  ipv4: z.array(z.string()).optional(),
  ipv6: z.array(z.string()).optional(),
  plan: PlanReferenceSchema.optional(),
});
export type DomainUpdateRequest = z.infer<typeof DomainUpdateRequestSchema>;

export const DomainStatusSchema = z.object({
  status: z.enum(["active", "suspended", "disabled"]),
});
export type DomainStatus = z.infer<typeof DomainStatusSchema>;

/** Domain shell command execution parameters */
export const DomainExecRequestSchema = z.object({
  command: z.array(z.string()),
  stdin: z.string().optional(),
  env: z.record(z.string(), z.string()).optional(),
  working_directory: z.string().optional(),
  fail_on_error: z.boolean().optional(),
});
export type DomainExecRequest = z.infer<typeof DomainExecRequestSchema>;

/** Domain shell command execution result */
export interface DomainExecResponse {
  code: number;
  stdout: string;
  stderr: string;
}

/** Single domain log entry */
export interface DomainLogEntry {
  path: string;
  line: string;
}

/** Log type information with count and time range */
export interface LogTypeInfo {
  count: number;
  time_range: {
    min: string;
    max: string;
  };
}

/** Domain logs search response with per-log-type time ranges */
export interface DomainLogsResponse {
  entries: DomainLogEntry[];
  log_type_counts: Record<string, LogTypeInfo>;
}

/** A single DNS check result */
export interface DnsCheck {
  category: "dns-management" | "web" | "mail" | "email-auth" | "propagation";
  name: string;
  result: "Pass" | "Fail" | "Skipped" | "Could not determine";
  fact: string;
  context: string;
  evidence?: Record<string, unknown>;
}

/** Domain DNS resolution check report */
export interface DomainDnsResolutionResponse {
  summary: Record<string, unknown>;
  checks: DnsCheck[];
}
