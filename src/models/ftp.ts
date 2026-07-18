import { z } from "zod";
import { DomainReferenceSchema } from "./domain.js";

export interface FtpUser {
  id: number;
  name: string;
  home: string;
  quota?: number;
  permissions?: {
    write?: "true" | "false";
    read?: "true" | "false";
  };
  parent_domain: number;
}

export const FtpUserRequestSchema = z.object({
  name: z.string(),
  password: z.string(),
  home: z.string().optional(),
  quota: z.number().optional(),
  permissions: z
    .object({
      read: z.enum(["true", "false"]).optional(),
      write: z.enum(["true", "false"]).optional(),
    })
    .optional(),
  parent_domain: DomainReferenceSchema,
});
export type FtpUserRequest = z.infer<typeof FtpUserRequestSchema>;

export const FtpUserUpdateRequestSchema = z.object({
  name: z.string().optional(),
  password: z.string().optional(),
  home: z.string().optional(),
  quota: z.number().optional(),
  permissions: z
    .object({
      read: z.enum(["true", "false"]).optional(),
      write: z.enum(["true", "false"]).optional(),
    })
    .optional(),
});
export type FtpUserUpdateRequest = z.infer<typeof FtpUserUpdateRequestSchema>;
