import { BskyAgent } from "@atproto/api";

export default defineEventHandler(async (event) => {
  const { session } = await readBody(event);
  if (!session) {
    return { status: 401, data: null };
  }

  const agent = new BskyAgent({ service: "https://bsky.social/" });

  agent.resumeSession(session);

  const { data } = await agent.getTimeline({ limit: 10 });
  // console.log(data);

  return { status: 200, feed: data.feed, cursor: data.cursor };
});
