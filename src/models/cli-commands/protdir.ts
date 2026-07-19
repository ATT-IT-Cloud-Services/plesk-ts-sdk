/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _protdirOptionFlags: Record<string, string> = {

};

/** @internal */
export const _protdirFlagKeys: string[] = [];

/** Request for `plesk.protdir.create` */
export const ProtdirCreateRequestSchema = z.object({
  name: z.string(),
});
export type ProtdirCreateRequest = z.infer<typeof ProtdirCreateRequestSchema>;

/** Request for `plesk.protdir.update` */
export const ProtdirUpdateRequestSchema = z.object({
  name: z.string(),
});
export type ProtdirUpdateRequest = z.infer<typeof ProtdirUpdateRequestSchema>;

/** Request for `plesk.protdir.remove` */
export const ProtdirRemoveRequestSchema = z.object({
  name: z.string(),
});
export type ProtdirRemoveRequest = z.infer<typeof ProtdirRemoveRequestSchema>;

