import { BskyAgent } from "@atproto/api";

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);

  const agent = new BskyAgent({ service: "https://bsky.social/" });
  if (!username || !password) {
    return { status: 401, data: null };
  }

  await agent
    .login({
      identifier: username,
      password: password,
    })
    .catch((error) => {
      console.error(error);
    });

  // console.log(agent.session);

  if (agent.session) {
    return { status: 200, data: agent.session };
  } else {
    return { status: 401, data: null };
  }
});
