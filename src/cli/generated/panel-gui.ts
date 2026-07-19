/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _panelGuiOptionFlags,
  _panelGuiFlagKeys,
  PanelGuiPreferencesRequestSchema,
  type PanelGuiPreferencesRequest,
} from "../../models/cli-commands/panel-gui.js";

/** Customizing the Plesk GUI */
export class PanelGuiResource {
  constructor(private readonly http: HttpClient) {}

  /** Customizing the Plesk GUI: preferences */
  preferences(body: PanelGuiPreferencesRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "panel_gui",
      command: "--preferences",
      schema: PanelGuiPreferencesRequestSchema,
      body,
      optionFlags: _panelGuiOptionFlags,
      flagKeys: _panelGuiFlagKeys,
    });
  }
}
