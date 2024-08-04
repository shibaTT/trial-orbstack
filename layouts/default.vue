<script setup lang="ts">
// (async () => {
//   const router = useRouter();
//   const accounts = await db.user.toArray();

//   if (accounts.length === 0) {
//     router.push("/login");
//   }
// })();
</script>

<template>
  <Header />
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
