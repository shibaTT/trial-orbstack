<script lang="ts" setup>
import type { GeneratorView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

const props = defineProps<{
  tabs: GeneratorView[];
}>();

console.log(props.tabs);
</script>

<template>
  <div class="headerTabs">
    <ul class="headerTabs__list">
      <li class="headerTabs__item"><a href="">ホーム</a></li>
      <li v-for="tab in tabs" :key="tab.cid" class="headerTabs__item">
        <a :href="tab.uri">{{ tab.displayName }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>
