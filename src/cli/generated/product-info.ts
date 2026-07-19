/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _productInfoOptionFlags,
  _productInfoFlagKeys,
  ProductInfoGetModeRequestSchema,
  ProductInfoUpdatesInfoRequestSchema,
  type ProductInfoGetModeRequest,
  type ProductInfoUpdatesInfoRequest,
} from "../../models/cli-commands/product-info.js";

/** Product Information */
export class ProductInfoResource {
  constructor(private readonly http: HttpClient) {}

  /** Product Information: getMode */
  getMode(body: ProductInfoGetModeRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "product_info",
      command: "--get-mode",
      schema: ProductInfoGetModeRequestSchema,
      body,
      optionFlags: _productInfoOptionFlags,
      flagKeys: _productInfoFlagKeys,
    });
  }

  /** Product Information: updatesInfo */
  updatesInfo(body: ProductInfoUpdatesInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "product_info",
      command: "--updates-info",
      schema: ProductInfoUpdatesInfoRequestSchema,
      body,
      optionFlags: _productInfoOptionFlags,
      flagKeys: _productInfoFlagKeys,
    });
  }
}
