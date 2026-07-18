import type { PleskClient } from "../client.js";
import type { DomainStatus } from "../models/domain.js";
import type { StatusResponse } from "../models/common.js";

export async function setDomainStatus(
  client: PleskClient,
  domainId: number,
  status: DomainStatus["status"],
): Promise<StatusResponse> {
  return client.domains.setStatus(domainId, { status });
}

export async function suspendDomain(
  client: PleskClient,
  domainId: number,
): Promise<StatusResponse> {
  return setDomainStatus(client, domainId, "suspended");
}

export async function activateDomain(
  client: PleskClient,
  domainId: number,
): Promise<StatusResponse> {
  return setDomainStatus(client, domainId, "active");
}

export async function suspendClient(
  client: PleskClient,
  clientId: number,
): Promise<StatusResponse> {
  return client.clients.suspend(clientId);
}

export async function activateClient(
  client: PleskClient,
  clientId: number,
): Promise<StatusResponse> {
  return client.clients.activate(clientId);
}
