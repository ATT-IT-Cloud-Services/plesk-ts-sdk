/* AUTO-GENERATED - do not edit. Run: npm run cli:generate */
import { z } from "zod";

/** @internal */
export const _mailserverOptionFlags: Record<string, string> = {

};

/** @internal */
export const _mailserverFlagKeys: string[] = [];

/** Request for `plesk.mailserver.setRelay` */
export const MailserverSetRelayRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetRelayRequest = z.infer<typeof MailserverSetRelayRequestSchema>;

/** Request for `plesk.mailserver.setMaxLetterSize` */
export const MailserverSetMaxLetterSizeRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetMaxLetterSizeRequest = z.infer<typeof MailserverSetMaxLetterSizeRequestSchema>;

/** Request for `plesk.mailserver.setMaxConnections` */
export const MailserverSetMaxConnectionsRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetMaxConnectionsRequest = z.infer<typeof MailserverSetMaxConnectionsRequestSchema>;

/** Request for `plesk.mailserver.setMaxConnectionsPerIp` */
export const MailserverSetMaxConnectionsPerIpRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetMaxConnectionsPerIpRequest = z.infer<typeof MailserverSetMaxConnectionsPerIpRequestSchema>;

/** Request for `plesk.mailserver.setMapsStatus` */
export const MailserverSetMapsStatusRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetMapsStatusRequest = z.infer<typeof MailserverSetMapsStatusRequestSchema>;

/** Request for `plesk.mailserver.addMapsZone` */
export const MailserverAddMapsZoneRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverAddMapsZoneRequest = z.infer<typeof MailserverAddMapsZoneRequestSchema>;

/** Request for `plesk.mailserver.setMapsZone` */
export const MailserverSetMapsZoneRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetMapsZoneRequest = z.infer<typeof MailserverSetMapsZoneRequestSchema>;

/** Request for `plesk.mailserver.removeMapsZone` */
export const MailserverRemoveMapsZoneRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverRemoveMapsZoneRequest = z.infer<typeof MailserverRemoveMapsZoneRequestSchema>;

/** Request for `plesk.mailserver.setAccountType` */
export const MailserverSetAccountTypeRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetAccountTypeRequest = z.infer<typeof MailserverSetAccountTypeRequestSchema>;

/** Request for `plesk.mailserver.useVocabulary` */
export const MailserverUseVocabularyRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverUseVocabularyRequest = z.infer<typeof MailserverUseVocabularyRequestSchema>;

/** Request for `plesk.mailserver.addToBlackList` */
export const MailserverAddToBlackListRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverAddToBlackListRequest = z.infer<typeof MailserverAddToBlackListRequestSchema>;

/** Request for `plesk.mailserver.removeFromBlackList` */
export const MailserverRemoveFromBlackListRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverRemoveFromBlackListRequest = z.infer<typeof MailserverRemoveFromBlackListRequestSchema>;

/** Request for `plesk.mailserver.addToWhiteList` */
export const MailserverAddToWhiteListRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverAddToWhiteListRequest = z.infer<typeof MailserverAddToWhiteListRequestSchema>;

/** Request for `plesk.mailserver.removeFromWhiteList` */
export const MailserverRemoveFromWhiteListRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverRemoveFromWhiteListRequest = z.infer<typeof MailserverRemoveFromWhiteListRequestSchema>;

/** Request for `plesk.mailserver.setVirusfilter` */
export const MailserverSetVirusfilterRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetVirusfilterRequest = z.infer<typeof MailserverSetVirusfilterRequestSchema>;

/** Request for `plesk.mailserver.updateSpf` */
export const MailserverUpdateSpfRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverUpdateSpfRequest = z.infer<typeof MailserverUpdateSpfRequestSchema>;

/** Request for `plesk.mailserver.enableDmarc` */
export const MailserverEnableDmarcRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverEnableDmarcRequest = z.infer<typeof MailserverEnableDmarcRequestSchema>;

/** Request for `plesk.mailserver.disableDmarc` */
export const MailserverDisableDmarcRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverDisableDmarcRequest = z.infer<typeof MailserverDisableDmarcRequestSchema>;

/** Request for `plesk.mailserver.setMessageSubmission` */
export const MailserverSetMessageSubmissionRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetMessageSubmissionRequest = z.infer<typeof MailserverSetMessageSubmissionRequestSchema>;

/** Request for `plesk.mailserver.signOutgoingMail` */
export const MailserverSignOutgoingMailRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSignOutgoingMailRequest = z.infer<typeof MailserverSignOutgoingMailRequestSchema>;

/** Request for `plesk.mailserver.verifyIncomingMail` */
export const MailserverVerifyIncomingMailRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverVerifyIncomingMailRequest = z.infer<typeof MailserverVerifyIncomingMailRequestSchema>;

/** Request for `plesk.mailserver.updateWebmail` */
export const MailserverUpdateWebmailRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverUpdateWebmailRequest = z.infer<typeof MailserverUpdateWebmailRequestSchema>;

/** Request for `plesk.mailserver.info` */
export const MailserverInfoRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverInfoRequest = z.infer<typeof MailserverInfoRequestSchema>;

/** Request for `plesk.mailserver.cleanMailQueue` */
export const MailserverCleanMailQueueRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverCleanMailQueueRequest = z.infer<typeof MailserverCleanMailQueueRequestSchema>;

/** Request for `plesk.mailserver.addExternalWebmail` */
export const MailserverAddExternalWebmailRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverAddExternalWebmailRequest = z.infer<typeof MailserverAddExternalWebmailRequestSchema>;

/** Request for `plesk.mailserver.updateExternalWebmail` */
export const MailserverUpdateExternalWebmailRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverUpdateExternalWebmailRequest = z.infer<typeof MailserverUpdateExternalWebmailRequestSchema>;

/** Request for `plesk.mailserver.removeExternalWebmail` */
export const MailserverRemoveExternalWebmailRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverRemoveExternalWebmailRequest = z.infer<typeof MailserverRemoveExternalWebmailRequestSchema>;

/** Request for `plesk.mailserver.updateSmtpSettings` */
export const MailserverUpdateSmtpSettingsRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverUpdateSmtpSettingsRequest = z.infer<typeof MailserverUpdateSmtpSettingsRequestSchema>;

/** Request for `plesk.mailserver.enableOutgoingAntispam` */
export const MailserverEnableOutgoingAntispamRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverEnableOutgoingAntispamRequest = z.infer<typeof MailserverEnableOutgoingAntispamRequestSchema>;

/** Request for `plesk.mailserver.disableOutgoingAntispam` */
export const MailserverDisableOutgoingAntispamRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverDisableOutgoingAntispamRequest = z.infer<typeof MailserverDisableOutgoingAntispamRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingMessagesMboxLimit` */
export const MailserverSetOutgoingMessagesMboxLimitRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingMessagesMboxLimitRequest = z.infer<typeof MailserverSetOutgoingMessagesMboxLimitRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingMessagesDomainLimit` */
export const MailserverSetOutgoingMessagesDomainLimitRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingMessagesDomainLimitRequest = z.infer<typeof MailserverSetOutgoingMessagesDomainLimitRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingMessagesSubscriptionLimit` */
export const MailserverSetOutgoingMessagesSubscriptionLimitRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingMessagesSubscriptionLimitRequest = z.infer<typeof MailserverSetOutgoingMessagesSubscriptionLimitRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingMessagesEnableSendmail` */
export const MailserverSetOutgoingMessagesEnableSendmailRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingMessagesEnableSendmailRequest = z.infer<typeof MailserverSetOutgoingMessagesEnableSendmailRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingMessagesReportPeriod` */
export const MailserverSetOutgoingMessagesReportPeriodRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingMessagesReportPeriodRequest = z.infer<typeof MailserverSetOutgoingMessagesReportPeriodRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingMessagesNotificationPeriod` */
export const MailserverSetOutgoingMessagesNotificationPeriodRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingMessagesNotificationPeriodRequest = z.infer<typeof MailserverSetOutgoingMessagesNotificationPeriodRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingEmailMode` */
export const MailserverSetOutgoingEmailModeRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingEmailModeRequest = z.infer<typeof MailserverSetOutgoingEmailModeRequestSchema>;

/** Request for `plesk.mailserver.setCertificate` */
export const MailserverSetCertificateRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetCertificateRequest = z.infer<typeof MailserverSetCertificateRequestSchema>;

/** Request for `plesk.mailserver.emailSubaddressingEnable` */
export const MailserverEmailSubaddressingEnableRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverEmailSubaddressingEnableRequest = z.infer<typeof MailserverEmailSubaddressingEnableRequestSchema>;

/** Request for `plesk.mailserver.setAuthMechanisms` */
export const MailserverSetAuthMechanismsRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetAuthMechanismsRequest = z.infer<typeof MailserverSetAuthMechanismsRequestSchema>;

/** Request for `plesk.mailserver.allowPlaintextAuth` */
export const MailserverAllowPlaintextAuthRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverAllowPlaintextAuthRequest = z.infer<typeof MailserverAllowPlaintextAuthRequestSchema>;

/** Request for `plesk.mailserver.setMailAutodiscover` */
export const MailserverSetMailAutodiscoverRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetMailAutodiscoverRequest = z.infer<typeof MailserverSetMailAutodiscoverRequestSchema>;

/** Request for `plesk.mailserver.setMailAutodiscoverDomainName` */
export const MailserverSetMailAutodiscoverDomainNameRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetMailAutodiscoverDomainNameRequest = z.infer<typeof MailserverSetMailAutodiscoverDomainNameRequestSchema>;

/** Request for `plesk.mailserver.quotaWarningEnable` */
export const MailserverQuotaWarningEnableRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverQuotaWarningEnableRequest = z.infer<typeof MailserverQuotaWarningEnableRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingMessagesFormSender` */
export const MailserverSetOutgoingMessagesFormSenderRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingMessagesFormSenderRequest = z.infer<typeof MailserverSetOutgoingMessagesFormSenderRequestSchema>;

/** Request for `plesk.mailserver.setOutgoingMessagesCountRecipients` */
export const MailserverSetOutgoingMessagesCountRecipientsRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverSetOutgoingMessagesCountRecipientsRequest = z.infer<typeof MailserverSetOutgoingMessagesCountRecipientsRequestSchema>;

/** Request for `plesk.mailserver.addExtraAutoReplyHeader` */
export const MailserverAddExtraAutoReplyHeaderRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverAddExtraAutoReplyHeaderRequest = z.infer<typeof MailserverAddExtraAutoReplyHeaderRequestSchema>;

/** Request for `plesk.mailserver.removeExtraAutoReplyHeader` */
export const MailserverRemoveExtraAutoReplyHeaderRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverRemoveExtraAutoReplyHeaderRequest = z.infer<typeof MailserverRemoveExtraAutoReplyHeaderRequestSchema>;

/** Request for `plesk.mailserver.configureSmarthost` */
export const MailserverConfigureSmarthostRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverConfigureSmarthostRequest = z.infer<typeof MailserverConfigureSmarthostRequestSchema>;

/** Request for `plesk.mailserver.enableSmarthost` */
export const MailserverEnableSmarthostRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverEnableSmarthostRequest = z.infer<typeof MailserverEnableSmarthostRequestSchema>;

/** Request for `plesk.mailserver.disableSmarthost` */
export const MailserverDisableSmarthostRequestSchema = z.object({
  name: z.string().optional(),
});
export type MailserverDisableSmarthostRequest = z.infer<typeof MailserverDisableSmarthostRequestSchema>;

