<script lang="ts" setup>
const props = defineProps<{
  href: string;
  color?: string;
  bgcolor?: string;
  width?: string | number;
}>();
</script>

<template>
  <a
    :href="href"
    :style="{ backgroundColor: props.bgcolor, color: props.color, width: props.width }"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
a {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-radius: 1000px;
  background: var(--color-light-gray);
  text-decoration: none;
  text-align: center;
  outline: none;
  cursor: pointer;

  appearance: none;
}
</style>
