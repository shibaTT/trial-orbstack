<script setup lang="ts">
import Header from "@/components/Header.vue";
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
