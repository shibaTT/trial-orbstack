<script setup lang="ts">
// (async () => {
//   const router = useRouter();
//   const accounts = await db.user.toArray();

//   if (accounts.length === 0) {
//     router.push("/login");
//   }
// })();
const tabs = ref([]);

onBeforeMount(async () => {
  const userData = await db.user.get(1);

  tabs.value = userData ? await getFeeds(userData.session) : [];
});
</script>

<template>
  <Header />
  <HeaderTabs :tabs="tabs" />
  <main>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  width: 100%;
}
</style>
