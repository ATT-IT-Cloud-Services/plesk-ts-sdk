import { z } from "zod";

/** The client entity */
export interface Client {
  id: number;
  created: string;
  name: string;
  company: string;
  login: string;
  status: number;
  email: string;
  locale: string;
  guid: string;
  owner_login?: string;
  external_id?: string;
  description: string;
  type: "reseller" | "customer" | "admin";
}

/** The client entity */
export const ClientRequestSchema = z.object({
  "name": z.string(),
  "company": z.string().optional(),
  "login": z.string(),
  "status": z.number().optional(),
  "email": z.string(),
  "locale": z.string().optional(),
  "owner_login": z.string().optional(),
  "external_id": z.string().optional(),
  "description": z.string().optional(),
  "password": z.string(),
  "type": z.enum(["reseller", "customer", "admin"]),
});
export type ClientRequest = z.infer<typeof ClientRequestSchema>;

/** The client entity */
export const ClientUpdateRequestSchema = z.object({
  "name": z.string().optional(),
  "company": z.string().optional(),
  "login": z.string().optional(),
  "status": z.number().optional(),
  "email": z.string().optional(),
  "locale": z.string().optional(),
  "owner_login": z.string().optional(),
  "external_id": z.string().optional(),
  "description": z.string().optional(),
  "password": z.string().optional(),
});
export type ClientUpdateRequest = z.infer<typeof ClientUpdateRequestSchema>;

/** Client's usage */
export interface ClientStatistics {
  active_domains: number;
  subdomains: number;
  disk_space: number;
  email_postboxes: number;
  email_redirects: number;
  email_response_messages: number;
  mailing_lists: number;
  databases: number;
  traffic: number;
  traffic_prevday: number;
}

