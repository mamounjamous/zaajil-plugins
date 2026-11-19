import type { ChatSummary, IncomingMessage, PluginIngressRoute, PluginManifest } from './zaajil';

type Assert<T extends true> = T;
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;

type VersionFloor = Assert<Equal<PluginManifest['minZaajilVersion'], string | null | undefined>>;
type Poll = Assert<Equal<IncomingMessage['poll'], {
  name: string;
  options: string[];
  allowMultipleAnswers: boolean;
} | undefined>>;
type LastMessageType = Assert<Equal<ChatSummary['lastMessageType'], string | undefined>>;
type DedupBodyMismatchAsNew = Assert<Equal<PluginIngressRoute['dedupBodyMismatchAsNew'], boolean | undefined>>;
type IsForwarded = Assert<Equal<IncomingMessage['isForwarded'], boolean | undefined>>;
type ForwardingScore = Assert<Equal<IncomingMessage['forwardingScore'], number | undefined>>;
