<script lang="ts" setup>
const props = defineProps<{
  bgcolor?: string;
  color?: string;
  width?: string | number;
}>();
</script>

<template>
  <button
    :style="{ backgroundColor: props.bgcolor, color: props.color, width: props.width }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-radius: 1000px;
  background: var(--color-light-gray);
  outline: none;
  cursor: pointer;

  appearance: none;
}
</style>
