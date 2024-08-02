<script lang="ts" setup></script>

<template>
  <div class="modal">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: block;
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 5;
  width: calc(
    100% - 652px - 180px - 20px
  ); /* 652pxはコンテンツの横幅、180pxはコンテンツ左マージン、20pxは普通に余白 */
  height: calc(100% - 100px);
  overflow: hidden;
  border-radius: 12px 0 0 12px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  background-color: var(--color-white);
}
</style>
