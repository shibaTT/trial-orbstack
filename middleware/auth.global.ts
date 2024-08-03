import { db } from "@/utils/database";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const hasDatabase = (await db.user.count()) > 0;

  // いったん動作確認のためにコメントアウト

  // if (!hasDatabase) {
  //   if (to.meta.layout === "login-layout") {
  //     return;
  //   }
  //   console.log("no database");
  //   return navigateTo("/login");
  // } else {
  //   return navigateTo("/");
  // }
});
