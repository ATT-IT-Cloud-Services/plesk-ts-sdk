import { z } from "zod";

/** Secret key parameters */
export const SecretKeyRequestSchema = z.object({
  "ip": z.string().optional(),
  "ips": z.array(z.string()).optional(),
  "login": z.string().optional(),
  "description": z.string().optional(),
});
export type SecretKeyRequest = z.infer<typeof SecretKeyRequestSchema>;

export interface SecretKeyResponse {
  key: string;
}

/** Session creation parameters */
export const SessionRequestSchema = z.object({
  "login": z.string(),
  "user_ip": z.string().optional(),
  "skip_mfa": z.boolean().optional(),
});
export type SessionRequest = z.infer<typeof SessionRequestSchema>;

export interface SessionResponse {
  id: string;
}

