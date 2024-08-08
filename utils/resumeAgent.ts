import { BskyAgent, type AtpSessionData } from "@atproto/api";
import { db } from "./database";

export const resumeAgent = async (session: AtpSessionData) => {
  const agent = new BskyAgent({
    service: "https://bsky.social/",
    persistSession: async (event, sessionData) => {
      const { data: user } = await agent.getProfile({ actor: sessionData?.did || session.did });

      db.user.put({
        id: 1,
        session: sessionData || session,
        avatar: user.avatar || "",
        name: user.displayName || "",
      });
    },
  });

  const user = await db.user.get(1);
  if (!user) {
    console.error("データが存在しません");
    return null;
  }

  agent.resumeSession(user.session);

  return agent;
};
