/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _statisticsOptionFlags: Record<string, string> = {

};

/** @internal */
export const _statisticsFlagKeys: string[] = [];

/** Request for `plesk.statistics.calculateAll` */
export const StatisticsCalculateAllRequestSchema = z.object({
  name: z.string().optional(),
});
export type StatisticsCalculateAllRequest = z.infer<typeof StatisticsCalculateAllRequestSchema>;

/** Request for `plesk.statistics.calculateList` */
export const StatisticsCalculateListRequestSchema = z.object({
  name: z.string().optional(),
});
export type StatisticsCalculateListRequest = z.infer<typeof StatisticsCalculateListRequestSchema>;

/** Request for `plesk.statistics.calculateOne` */
export const StatisticsCalculateOneRequestSchema = z.object({
  name: z.string().optional(),
});
export type StatisticsCalculateOneRequest = z.infer<typeof StatisticsCalculateOneRequestSchema>;

/** Request for `plesk.statistics.generateAllWebstat` */
export const StatisticsGenerateAllWebstatRequestSchema = z.object({
  name: z.string().optional(),
});
export type StatisticsGenerateAllWebstatRequest = z.infer<typeof StatisticsGenerateAllWebstatRequestSchema>;

/** Request for `plesk.statistics.generateDomainWebstat` */
export const StatisticsGenerateDomainWebstatRequestSchema = z.object({
  name: z.string().optional(),
});
export type StatisticsGenerateDomainWebstatRequest = z.infer<typeof StatisticsGenerateDomainWebstatRequestSchema>;

/** Request for `plesk.statistics.processDomains` */
export const StatisticsProcessDomainsRequestSchema = z.object({
  name: z.string().optional(),
});
export type StatisticsProcessDomainsRequest = z.infer<typeof StatisticsProcessDomainsRequestSchema>;

/** Request for `plesk.statistics.all` */
export const StatisticsAllRequestSchema = z.object({
  name: z.string().optional(),
});
export type StatisticsAllRequest = z.infer<typeof StatisticsAllRequestSchema>;

