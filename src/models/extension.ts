import { z } from "zod";

/** Extension entity */
export interface Extension {
  id: string;
  name: string;
  version: string;
  release: string;
  active: boolean;
}

/** Extension installation request */
export const ExtensionInstallRequestSchema = z.object({
  "id": z.string().optional(),
  "url": z.string().optional(),
  "file": z.string().optional(),
});
export type ExtensionInstallRequest = z.infer<typeof ExtensionInstallRequestSchema>;

