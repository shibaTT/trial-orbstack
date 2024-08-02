import { BskyAgent } from "@atproto/api";

export default defineEventHandler(async (event) => {
  const agent = new BskyAgent({ service: "https://bsky.social/" });
  if (!process.env.NUXT_BSKY_USER || !process.env.NUXT_BSKY_PW) {
    return { status: 401 };
  }

  await agent.login({
    identifier: process.env.NUXT_BSKY_USER,
    password: process.env.NUXT_BSKY_PW,
  });

  const { data } = await agent.getTimeline({ limit: 10 });
  // console.log(data);

  return data;
});
