import { z } from "zod";

/** Server Meta Information */
export interface ServerMeta {
  platform: string;
  hostname: string;
  guid: string;
  panel_version: string;
  panel_revision: string;
  panel_build_date: string;
  panel_update_version: string;
  extension_version: string;
  extension_release: string;
}

/** Plesk administrator information */
export const AdminSchema = z.object({
  name: z.string(),
  email: z.string(),
  company: z.string().optional(),
  phone: z.string().optional(),
  fax: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  post_code: z.string().optional(),
  country: z.string().optional(),
  send_announce: z.boolean().optional(),
  locale: z.string().optional(),
  multiple_sessions: z.boolean().optional(),
});
export type Admin = z.infer<typeof AdminSchema>;

/** Initial server setup parameters */
export const ServerInitSchema = z.object({
  admin: AdminSchema,
  password: z.string(),
  server_name: z.string().optional(),
});
export type ServerInit = z.infer<typeof ServerInitSchema>;

/** Server IP Addresses */
export interface ServerIp {
  ipv4?: string;
  ipv6?: string;
  netmask: string;
  interface: string;
  type: "shared" | "exclusive";
}

/** License parameters */
export const ServerLicenseSchema = z.object({
  key: z.string().optional(),
  code: z.string().optional(),
  additional: z.boolean().optional(),
});
export type ServerLicense = z.infer<typeof ServerLicenseSchema>;
