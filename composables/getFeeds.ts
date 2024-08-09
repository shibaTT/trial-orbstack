import type { AtpSessionData } from "@atproto/api";

export default async function (session: AtpSessionData) {
  const agent = await resumeAgent(session);
  if (!agent) return [];
  const { data } = await agent.api.app.bsky.feed.getActorFeeds({ actor: session.did });

  return data.feeds;
}
