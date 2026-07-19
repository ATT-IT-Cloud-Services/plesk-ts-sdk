/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _productInfoOptionFlags: Record<string, string> = {

};

/** @internal */
export const _productInfoFlagKeys: string[] = [];

/** Request for `plesk.productInfo.getMode` */
export const ProductInfoGetModeRequestSchema = z.object({
  name: z.string().optional(),
});
export type ProductInfoGetModeRequest = z.infer<typeof ProductInfoGetModeRequestSchema>;

/** Request for `plesk.productInfo.updatesInfo` */
export const ProductInfoUpdatesInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type ProductInfoUpdatesInfoRequest = z.infer<typeof ProductInfoUpdatesInfoRequestSchema>;

