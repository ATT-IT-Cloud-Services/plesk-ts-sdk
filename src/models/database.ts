import { z } from "zod";
import { DomainReferenceSchema } from "./domain.js";

export interface Database {
  id?: number;
  name?: string;
  type?: "mssql" | "mysql" | "postgresql";
  parent_domain?: number;
  server_id?: number;
  default_user_id?: number;
}

export const DatabaseRequestSchema = z.object({
  name: z.string(),
  type: z.enum(["mssql", "mysql", "postgresql"]).optional(),
  parent_domain: DomainReferenceSchema,
  server_id: z.number().optional(),
});
export type DatabaseRequest = z.infer<typeof DatabaseRequestSchema>;

export interface DatabaseServer {
  id?: number;
  host?: string;
  port?: number;
  type?: "mssql" | "mysql" | "postgresql";
  status?: string;
  db_count?: number;
  is_default?: boolean;
  is_local?: boolean;
}

export interface DatabaseUser {
  id?: number;
  login?: string;
  database_id?: number;
}

/** Either parent_domain and server_id together, or database_id must be provided. */
export const DatabaseUserRequestSchema = z
  .object({
    login: z.string(),
    password: z.string(),
    database_id: z.number().optional(),
    parent_domain: DomainReferenceSchema.optional(),
    server_id: z.number().optional(),
  })
  .refine(
    (v) =>
      v.database_id !== undefined ||
      (v.parent_domain !== undefined && v.server_id !== undefined),
    {
      message:
        "Either database_id, or both parent_domain and server_id, must be provided",
    },
  );
export type DatabaseUserRequest = z.infer<typeof DatabaseUserRequestSchema>;

export const DatabaseUserUpdateRequestSchema = z.object({
  login: z.string().optional(),
  password: z.string().optional(),
});
export type DatabaseUserUpdateRequest = z.infer<typeof DatabaseUserUpdateRequestSchema>;
