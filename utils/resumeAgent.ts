import { BskyAgent } from "@atproto/api";
import { db } from "./database";

export const resumeAgent = async () => {
  const agent = new BskyAgent({ service: "https://bsky.social/" });
  const user = await db.user.get(1);
  if (!user) {
    console.error("データが存在しません");
    return null;
  }

  agent.resumeSession(user.session);

  return agent;
};
