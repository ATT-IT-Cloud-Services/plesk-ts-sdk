/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import type { HttpClient } from "../../http.js";
import type { ActionResponse } from "../../models/common.js";
import { invokeManagedCommand } from "../runtime.js";
import {
  _mailserverOptionFlags,
  _mailserverFlagKeys,
  MailserverSetRelayRequestSchema,
  MailserverSetMaxLetterSizeRequestSchema,
  MailserverSetMaxConnectionsRequestSchema,
  MailserverSetMaxConnectionsPerIpRequestSchema,
  MailserverSetMapsStatusRequestSchema,
  MailserverAddMapsZoneRequestSchema,
  MailserverSetMapsZoneRequestSchema,
  MailserverRemoveMapsZoneRequestSchema,
  MailserverSetAccountTypeRequestSchema,
  MailserverUseVocabularyRequestSchema,
  MailserverAddToBlackListRequestSchema,
  MailserverRemoveFromBlackListRequestSchema,
  MailserverAddToWhiteListRequestSchema,
  MailserverRemoveFromWhiteListRequestSchema,
  MailserverSetVirusfilterRequestSchema,
  MailserverUpdateSpfRequestSchema,
  MailserverEnableDmarcRequestSchema,
  MailserverDisableDmarcRequestSchema,
  MailserverSetMessageSubmissionRequestSchema,
  MailserverSignOutgoingMailRequestSchema,
  MailserverVerifyIncomingMailRequestSchema,
  MailserverUpdateWebmailRequestSchema,
  MailserverInfoRequestSchema,
  MailserverCleanMailQueueRequestSchema,
  MailserverAddExternalWebmailRequestSchema,
  MailserverUpdateExternalWebmailRequestSchema,
  MailserverRemoveExternalWebmailRequestSchema,
  MailserverUpdateSmtpSettingsRequestSchema,
  MailserverEnableOutgoingAntispamRequestSchema,
  MailserverDisableOutgoingAntispamRequestSchema,
  MailserverSetOutgoingMessagesMboxLimitRequestSchema,
  MailserverSetOutgoingMessagesDomainLimitRequestSchema,
  MailserverSetOutgoingMessagesSubscriptionLimitRequestSchema,
  MailserverSetOutgoingMessagesEnableSendmailRequestSchema,
  MailserverSetOutgoingMessagesReportPeriodRequestSchema,
  MailserverSetOutgoingMessagesNotificationPeriodRequestSchema,
  MailserverSetOutgoingEmailModeRequestSchema,
  MailserverSetCertificateRequestSchema,
  MailserverEmailSubaddressingEnableRequestSchema,
  MailserverSetAuthMechanismsRequestSchema,
  MailserverAllowPlaintextAuthRequestSchema,
  MailserverSetMailAutodiscoverRequestSchema,
  MailserverSetMailAutodiscoverDomainNameRequestSchema,
  MailserverQuotaWarningEnableRequestSchema,
  MailserverSetOutgoingMessagesFormSenderRequestSchema,
  MailserverSetOutgoingMessagesCountRecipientsRequestSchema,
  MailserverAddExtraAutoReplyHeaderRequestSchema,
  MailserverRemoveExtraAutoReplyHeaderRequestSchema,
  MailserverConfigureSmarthostRequestSchema,
  MailserverEnableSmarthostRequestSchema,
  MailserverDisableSmarthostRequestSchema,
  type MailserverSetRelayRequest,
  type MailserverSetMaxLetterSizeRequest,
  type MailserverSetMaxConnectionsRequest,
  type MailserverSetMaxConnectionsPerIpRequest,
  type MailserverSetMapsStatusRequest,
  type MailserverAddMapsZoneRequest,
  type MailserverSetMapsZoneRequest,
  type MailserverRemoveMapsZoneRequest,
  type MailserverSetAccountTypeRequest,
  type MailserverUseVocabularyRequest,
  type MailserverAddToBlackListRequest,
  type MailserverRemoveFromBlackListRequest,
  type MailserverAddToWhiteListRequest,
  type MailserverRemoveFromWhiteListRequest,
  type MailserverSetVirusfilterRequest,
  type MailserverUpdateSpfRequest,
  type MailserverEnableDmarcRequest,
  type MailserverDisableDmarcRequest,
  type MailserverSetMessageSubmissionRequest,
  type MailserverSignOutgoingMailRequest,
  type MailserverVerifyIncomingMailRequest,
  type MailserverUpdateWebmailRequest,
  type MailserverInfoRequest,
  type MailserverCleanMailQueueRequest,
  type MailserverAddExternalWebmailRequest,
  type MailserverUpdateExternalWebmailRequest,
  type MailserverRemoveExternalWebmailRequest,
  type MailserverUpdateSmtpSettingsRequest,
  type MailserverEnableOutgoingAntispamRequest,
  type MailserverDisableOutgoingAntispamRequest,
  type MailserverSetOutgoingMessagesMboxLimitRequest,
  type MailserverSetOutgoingMessagesDomainLimitRequest,
  type MailserverSetOutgoingMessagesSubscriptionLimitRequest,
  type MailserverSetOutgoingMessagesEnableSendmailRequest,
  type MailserverSetOutgoingMessagesReportPeriodRequest,
  type MailserverSetOutgoingMessagesNotificationPeriodRequest,
  type MailserverSetOutgoingEmailModeRequest,
  type MailserverSetCertificateRequest,
  type MailserverEmailSubaddressingEnableRequest,
  type MailserverSetAuthMechanismsRequest,
  type MailserverAllowPlaintextAuthRequest,
  type MailserverSetMailAutodiscoverRequest,
  type MailserverSetMailAutodiscoverDomainNameRequest,
  type MailserverQuotaWarningEnableRequest,
  type MailserverSetOutgoingMessagesFormSenderRequest,
  type MailserverSetOutgoingMessagesCountRecipientsRequest,
  type MailserverAddExtraAutoReplyHeaderRequest,
  type MailserverRemoveExtraAutoReplyHeaderRequest,
  type MailserverConfigureSmarthostRequest,
  type MailserverEnableSmarthostRequest,
  type MailserverDisableSmarthostRequest,
} from "../../models/cli-commands/mailserver.js";

/** Mail Server Settings */
export class MailserverResource {
  constructor(private readonly http: HttpClient) {}

  /** Mail Server Settings: setRelay */
  setRelay(body: MailserverSetRelayRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-relay",
      schema: MailserverSetRelayRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setMaxLetterSize */
  setMaxLetterSize(body: MailserverSetMaxLetterSizeRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-max-letter-size",
      schema: MailserverSetMaxLetterSizeRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setMaxConnections */
  setMaxConnections(body: MailserverSetMaxConnectionsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-max-connections",
      schema: MailserverSetMaxConnectionsRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setMaxConnectionsPerIp */
  setMaxConnectionsPerIp(body: MailserverSetMaxConnectionsPerIpRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-max-connections-per-ip",
      schema: MailserverSetMaxConnectionsPerIpRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setMapsStatus */
  setMapsStatus(body: MailserverSetMapsStatusRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-maps-status",
      schema: MailserverSetMapsStatusRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: addMapsZone */
  addMapsZone(body: MailserverAddMapsZoneRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--add-maps-zone",
      schema: MailserverAddMapsZoneRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setMapsZone */
  setMapsZone(body: MailserverSetMapsZoneRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-maps-zone",
      schema: MailserverSetMapsZoneRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: removeMapsZone */
  removeMapsZone(body: MailserverRemoveMapsZoneRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--remove-maps-zone",
      schema: MailserverRemoveMapsZoneRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setAccountType */
  setAccountType(body: MailserverSetAccountTypeRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-account-type",
      schema: MailserverSetAccountTypeRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: useVocabulary */
  useVocabulary(body: MailserverUseVocabularyRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--use-vocabulary",
      schema: MailserverUseVocabularyRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: addToBlackList */
  addToBlackList(body: MailserverAddToBlackListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--add-to-black-list",
      schema: MailserverAddToBlackListRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: removeFromBlackList */
  removeFromBlackList(body: MailserverRemoveFromBlackListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--remove-from-black-list",
      schema: MailserverRemoveFromBlackListRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: addToWhiteList */
  addToWhiteList(body: MailserverAddToWhiteListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--add-to-white-list",
      schema: MailserverAddToWhiteListRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: removeFromWhiteList */
  removeFromWhiteList(body: MailserverRemoveFromWhiteListRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--remove-from-white-list",
      schema: MailserverRemoveFromWhiteListRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setVirusfilter */
  setVirusfilter(body: MailserverSetVirusfilterRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-virusfilter",
      schema: MailserverSetVirusfilterRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: updateSpf */
  updateSpf(body: MailserverUpdateSpfRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--update-spf",
      schema: MailserverUpdateSpfRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: enableDmarc */
  enableDmarc(body: MailserverEnableDmarcRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--enable-dmarc",
      schema: MailserverEnableDmarcRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: disableDmarc */
  disableDmarc(body: MailserverDisableDmarcRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--disable-dmarc",
      schema: MailserverDisableDmarcRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setMessageSubmission */
  setMessageSubmission(body: MailserverSetMessageSubmissionRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-message-submission",
      schema: MailserverSetMessageSubmissionRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: signOutgoingMail */
  signOutgoingMail(body: MailserverSignOutgoingMailRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--sign-outgoing-mail",
      schema: MailserverSignOutgoingMailRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: verifyIncomingMail */
  verifyIncomingMail(body: MailserverVerifyIncomingMailRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--verify-incoming-mail",
      schema: MailserverVerifyIncomingMailRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: updateWebmail */
  updateWebmail(body: MailserverUpdateWebmailRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--update-webmail",
      schema: MailserverUpdateWebmailRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: info */
  info(body: MailserverInfoRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--info",
      schema: MailserverInfoRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: cleanMailQueue */
  cleanMailQueue(body: MailserverCleanMailQueueRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--clean-mail-queue",
      schema: MailserverCleanMailQueueRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: addExternalWebmail */
  addExternalWebmail(body: MailserverAddExternalWebmailRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--add-external-webmail",
      schema: MailserverAddExternalWebmailRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: updateExternalWebmail */
  updateExternalWebmail(body: MailserverUpdateExternalWebmailRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--update-external-webmail",
      schema: MailserverUpdateExternalWebmailRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: removeExternalWebmail */
  removeExternalWebmail(body: MailserverRemoveExternalWebmailRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--remove-external-webmail",
      schema: MailserverRemoveExternalWebmailRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: updateSmtpSettings */
  updateSmtpSettings(body: MailserverUpdateSmtpSettingsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--update-smtp-settings",
      schema: MailserverUpdateSmtpSettingsRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: enableOutgoingAntispam */
  enableOutgoingAntispam(body: MailserverEnableOutgoingAntispamRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--enable-outgoing-antispam",
      schema: MailserverEnableOutgoingAntispamRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: disableOutgoingAntispam */
  disableOutgoingAntispam(body: MailserverDisableOutgoingAntispamRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--disable-outgoing-antispam",
      schema: MailserverDisableOutgoingAntispamRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingMessagesMboxLimit */
  setOutgoingMessagesMboxLimit(body: MailserverSetOutgoingMessagesMboxLimitRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-messages-mbox-limit",
      schema: MailserverSetOutgoingMessagesMboxLimitRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingMessagesDomainLimit */
  setOutgoingMessagesDomainLimit(body: MailserverSetOutgoingMessagesDomainLimitRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-messages-domain-limit",
      schema: MailserverSetOutgoingMessagesDomainLimitRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingMessagesSubscriptionLimit */
  setOutgoingMessagesSubscriptionLimit(body: MailserverSetOutgoingMessagesSubscriptionLimitRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-messages-subscription-limit",
      schema: MailserverSetOutgoingMessagesSubscriptionLimitRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingMessagesEnableSendmail */
  setOutgoingMessagesEnableSendmail(body: MailserverSetOutgoingMessagesEnableSendmailRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-messages-enable-sendmail",
      schema: MailserverSetOutgoingMessagesEnableSendmailRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingMessagesReportPeriod */
  setOutgoingMessagesReportPeriod(body: MailserverSetOutgoingMessagesReportPeriodRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-messages-report-period",
      schema: MailserverSetOutgoingMessagesReportPeriodRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingMessagesNotificationPeriod */
  setOutgoingMessagesNotificationPeriod(body: MailserverSetOutgoingMessagesNotificationPeriodRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-messages-notification-period",
      schema: MailserverSetOutgoingMessagesNotificationPeriodRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingEmailMode */
  setOutgoingEmailMode(body: MailserverSetOutgoingEmailModeRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-email-mode",
      schema: MailserverSetOutgoingEmailModeRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setCertificate */
  setCertificate(body: MailserverSetCertificateRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-certificate",
      schema: MailserverSetCertificateRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: emailSubaddressingEnable */
  emailSubaddressingEnable(body: MailserverEmailSubaddressingEnableRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--email-subaddressing-enable",
      schema: MailserverEmailSubaddressingEnableRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setAuthMechanisms */
  setAuthMechanisms(body: MailserverSetAuthMechanismsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-auth-mechanisms",
      schema: MailserverSetAuthMechanismsRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: allowPlaintextAuth */
  allowPlaintextAuth(body: MailserverAllowPlaintextAuthRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--allow-plaintext-auth",
      schema: MailserverAllowPlaintextAuthRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setMailAutodiscover */
  setMailAutodiscover(body: MailserverSetMailAutodiscoverRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-mail-autodiscover",
      schema: MailserverSetMailAutodiscoverRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setMailAutodiscoverDomainName */
  setMailAutodiscoverDomainName(body: MailserverSetMailAutodiscoverDomainNameRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-mail-autodiscover-domain-name",
      schema: MailserverSetMailAutodiscoverDomainNameRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: quotaWarningEnable */
  quotaWarningEnable(body: MailserverQuotaWarningEnableRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--quota-warning-enable",
      schema: MailserverQuotaWarningEnableRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingMessagesFormSender */
  setOutgoingMessagesFormSender(body: MailserverSetOutgoingMessagesFormSenderRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-messages-form-sender",
      schema: MailserverSetOutgoingMessagesFormSenderRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: setOutgoingMessagesCountRecipients */
  setOutgoingMessagesCountRecipients(body: MailserverSetOutgoingMessagesCountRecipientsRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--set-outgoing-messages-count-recipients",
      schema: MailserverSetOutgoingMessagesCountRecipientsRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: addExtraAutoReplyHeader */
  addExtraAutoReplyHeader(body: MailserverAddExtraAutoReplyHeaderRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--add-extra-auto-reply-header",
      schema: MailserverAddExtraAutoReplyHeaderRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: removeExtraAutoReplyHeader */
  removeExtraAutoReplyHeader(body: MailserverRemoveExtraAutoReplyHeaderRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--remove-extra-auto-reply-header",
      schema: MailserverRemoveExtraAutoReplyHeaderRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: configureSmarthost */
  configureSmarthost(body: MailserverConfigureSmarthostRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--configure-smarthost",
      schema: MailserverConfigureSmarthostRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: enableSmarthost */
  enableSmarthost(body: MailserverEnableSmarthostRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--enable-smarthost",
      schema: MailserverEnableSmarthostRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }

  /** Mail Server Settings: disableSmarthost */
  disableSmarthost(body: MailserverDisableSmarthostRequest = {}): Promise<ActionResponse> {
    return invokeManagedCommand(this.http, {
      utilityId: "mailserver",
      command: "--disable-smarthost",
      schema: MailserverDisableSmarthostRequestSchema,
      body,
      optionFlags: _mailserverOptionFlags,
      flagKeys: _mailserverFlagKeys,
    });
  }
}
