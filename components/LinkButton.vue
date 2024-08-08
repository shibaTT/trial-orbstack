<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    href: string;
    color?: string;
    bgcolor?: string;
    width?: string | number;
    external?: boolean;
  }>(),
  {
    external: false,
  }
);
</script>

<template>
  <a
    :href="href"
    :style="{ backgroundColor: props.bgcolor, color: props.color, width: props.width }"
    :target="props.external ? '_blank' : '_self'"
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
