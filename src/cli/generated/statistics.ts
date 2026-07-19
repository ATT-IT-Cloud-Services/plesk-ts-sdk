/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _statisticsOptionFlags,
  _statisticsFlagKeys,
  StatisticsCalculateAllRequestSchema,
  StatisticsCalculateListRequestSchema,
  StatisticsCalculateOneRequestSchema,
  StatisticsGenerateAllWebstatRequestSchema,
  StatisticsGenerateDomainWebstatRequestSchema,
  StatisticsProcessDomainsRequestSchema,
  StatisticsAllRequestSchema,
  type StatisticsCalculateAllRequest,
  type StatisticsCalculateListRequest,
  type StatisticsCalculateOneRequest,
  type StatisticsGenerateAllWebstatRequest,
  type StatisticsGenerateDomainWebstatRequest,
  type StatisticsProcessDomainsRequest,
  type StatisticsAllRequest,
} from "../../models/cli-commands/statistics.js";

/** Calculating Statistics */
export class StatisticsResource {
  constructor(private readonly http: HttpClient) {}

  /** Calculating Statistics: calculateAll */
  calculateAll(body: StatisticsCalculateAllRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "statistics",
      command: "--calculate-all",
      schema: StatisticsCalculateAllRequestSchema,
      body,
      optionFlags: _statisticsOptionFlags,
      flagKeys: _statisticsFlagKeys,
    });
  }

  /** Calculating Statistics: calculateList */
  calculateList(body: StatisticsCalculateListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "statistics",
      command: "--calculate-list",
      schema: StatisticsCalculateListRequestSchema,
      body,
      optionFlags: _statisticsOptionFlags,
      flagKeys: _statisticsFlagKeys,
    });
  }

  /** Calculating Statistics: calculateOne */
  calculateOne(body: StatisticsCalculateOneRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "statistics",
      command: "--calculate-one",
      schema: StatisticsCalculateOneRequestSchema,
      body,
      optionFlags: _statisticsOptionFlags,
      flagKeys: _statisticsFlagKeys,
    });
  }

  /** Calculating Statistics: generateAllWebstat */
  generateAllWebstat(body: StatisticsGenerateAllWebstatRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "statistics",
      command: "--generate-all-webstat",
      schema: StatisticsGenerateAllWebstatRequestSchema,
      body,
      optionFlags: _statisticsOptionFlags,
      flagKeys: _statisticsFlagKeys,
    });
  }

  /** Calculating Statistics: generateDomainWebstat */
  generateDomainWebstat(body: StatisticsGenerateDomainWebstatRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "statistics",
      command: "--generate-domain-webstat",
      schema: StatisticsGenerateDomainWebstatRequestSchema,
      body,
      optionFlags: _statisticsOptionFlags,
      flagKeys: _statisticsFlagKeys,
    });
  }

  /** Calculating Statistics: processDomains */
  processDomains(body: StatisticsProcessDomainsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "statistics",
      command: "--process-domains",
      schema: StatisticsProcessDomainsRequestSchema,
      body,
      optionFlags: _statisticsOptionFlags,
      flagKeys: _statisticsFlagKeys,
    });
  }

  /** Calculating Statistics: all */
  all(body: StatisticsAllRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "statistics",
      command: "--all",
      schema: StatisticsAllRequestSchema,
      body,
      optionFlags: _statisticsOptionFlags,
      flagKeys: _statisticsFlagKeys,
    });
  }
}
