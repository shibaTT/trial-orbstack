<script lang="ts" setup>
import type { GeneratorView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

const props = defineProps<{
  tabs: GeneratorView[];
}>();

// console.log(props.tabs);
</script>

<template>
  <div class="headerTabs">
    <ul class="headerTabs__list">
      <li class="headerTabs__item" :class="{ 'headerTabs__item--current': true }">
        <a href="/">ホーム</a>
      </li>
      <li v-for="tab in tabs" :key="tab.cid" class="headerTabs__item">
        <a :href="tab.uri">{{ tab.displayName }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.headerTabs {
  border-bottom: 1px solid var(--color-gray-white);

  gap: 1rem;
}

.headerTabs__list {
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: 180px;
}

.headerTabs__item--current {
  border-bottom: 2px solid var(--color-gray-black);
}

.headerTabs__item a {
  display: block;
  padding: 8px 12px;
  color: var(--color-gray-black);
}
</style>
