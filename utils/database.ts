import "fake-indexeddb/auto";
import Dexie, { type Table } from "dexie";

export interface User {
  id: number;
  service: string;
  accessJwt: string;
  refreshJwt: string;
}

export const db = new Dexie("accountDB") as Dexie & {
  user: Table<User>;
};

db.version(1).stores({
  user: "++id, service, accessJwt, refreshJwt",
});
