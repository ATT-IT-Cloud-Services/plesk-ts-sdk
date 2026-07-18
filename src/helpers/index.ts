import type { PleskClient } from "../client.js";
import {
  createCustomerWithDomain,
  createDomainForExistingCustomer,
  type CustomerHelperInput,
} from "./customer.js";
import {
  createDatabaseWithUser,
  type CreateDatabaseWithUserInput,
} from "./database.js";
import { upsertDnsRecord, type UpsertDnsRecordInput } from "./dns.js";
import {
  createFtpUserForDomain,
  type CreateFtpUserForDomainInput,
} from "./ftp.js";
import {
  activateClient,
  activateDomain,
  setDomainStatus,
  suspendClient,
  suspendDomain,
} from "./domain.js";
import type { DomainStatus } from "../models/domain.js";

export class Helpers {
  constructor(private readonly client: PleskClient) {}

  createCustomerWithDomain(
    domain: string,
    customer: CustomerHelperInput,
    plan: string,
  ) {
    return createCustomerWithDomain(this.client, domain, customer, plan);
  }

  createDomainForExistingCustomer(
    domain: string,
    customer: CustomerHelperInput,
    plan: string,
  ) {
    return createDomainForExistingCustomer(this.client, domain, customer, plan);
  }

  createDatabaseWithUser(input: CreateDatabaseWithUserInput) {
    return createDatabaseWithUser(this.client, input);
  }

  upsertDnsRecord(input: UpsertDnsRecordInput) {
    return upsertDnsRecord(this.client, input);
  }

  createFtpUserForDomain(input: CreateFtpUserForDomainInput) {
    return createFtpUserForDomain(this.client, input);
  }

  setDomainStatus(domainId: number, status: DomainStatus["status"]) {
    return setDomainStatus(this.client, domainId, status);
  }

  suspendDomain(domainId: number) {
    return suspendDomain(this.client, domainId);
  }

  activateDomain(domainId: number) {
    return activateDomain(this.client, domainId);
  }

  suspendClient(clientId: number) {
    return suspendClient(this.client, clientId);
  }

  activateClient(clientId: number) {
    return activateClient(this.client, clientId);
  }
}

export * from "./customer.js";
export * from "./database.js";
export * from "./dns.js";
export * from "./ftp.js";
export * from "./domain.js";
export * from "./password.js";
