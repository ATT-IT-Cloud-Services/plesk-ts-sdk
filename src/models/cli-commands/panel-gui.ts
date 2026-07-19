/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _panelGuiOptionFlags: Record<string, string> = {

};

/** @internal */
export const _panelGuiFlagKeys: string[] = [];

/** Request for `plesk.panelGui.preferences` */
export const PanelGuiPreferencesRequestSchema = z.object({
  name: z.string().optional(),
});
export type PanelGuiPreferencesRequest = z.infer<typeof PanelGuiPreferencesRequestSchema>;

