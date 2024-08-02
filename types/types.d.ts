import * as AppBskyEmbedImages from "@atproto/api/dist/client/types/app/bsky/embed/images";
import * as AppBskyEmbedExternal from "@atproto/api/dist/client/types/app/bsky/embed/external";
import * as AppBskyEmbedRecord from "@atproto/api/dist/client/types/app/bsky/embed/record";
import * as AppBskyEmbedRecordWithMedia from "@atproto/api/dist/client/types/app/bsky/embed/recordWithMedia";
import * as AppBskyRichtextFacet from "@atproto/api/dist/client/types/app/bsky/richtext/facet";

export type RecordType =
  | "app.bsky.feed.post"
  | "app.bsky.feed.like"
  | "app.bsky.feed.repost"
  | "app.bsky.feed.reply";

export interface GetFeedRecord {
  $type: RecordType;
  createdAt: string;
  embed?:
    | AppBskyEmbedImages.View
    | AppBskyEmbedExternal.View
    | AppBskyEmbedRecord.View
    | AppBskyEmbedRecordWithMedia.View
    | { $type: string; [k: string]: unknown };
  facets?: AppBskyRichtextFacet.Main[];
  langs?: string[];
  text: string;
  [k: string]: string | unknown;
}
