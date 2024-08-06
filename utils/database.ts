import type { AtpSessionData } from "@atproto/api";
import Dexie, { type Table } from "dexie";

export interface User {
  id?: number;
  session: AtpSessionData;
  avatar?: string;
  name?: string;
}

export const db = new Dexie("accountDB") as Dexie & {
  user: Table<User>;
};

db.version(1).stores({
  user: "++id, session, avatar, name",
});

export const addUser = async (session: AtpSessionData) => {
  // putにすると自動でid採番してくれるし、id指定すれば更新もできる
  // て思ったけどidは1以外存在しないはずなので自動採番する必要性がなかった
  db.user
    .put({
      id: 1,
      session: session,
    })
    .catch((error) => {
      console.error(error);
      return false;
    });

  return true;
};
