import { z } from "zod";

/** Command execution parameters */
export const CliCallRequestSchema = z.object({
  "params": z.array(z.string()).optional(),
  "env": z.record(z.string(), z.unknown()).optional(),
  "fail_on_error": z.boolean().optional(),
});
export type CliCallRequest = z.infer<typeof CliCallRequestSchema>;

/** Command execution result */
export interface CliCallResponse {
  code?: number;
  stdout?: string;
  stderr?: string;
}

/** GET /cli/{id}/ref */
export interface CliRefResponse {
  allowed_commands?: Record<string, unknown>;
  allowed_options?: Record<string, unknown>;
}

