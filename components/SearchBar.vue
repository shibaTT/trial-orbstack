<script lang="ts" setup>
const searchText = defineModel<string>("value");

const isSearchActive = computed(() => searchText.value !== "");

const emit = defineEmits(["click"]);
</script>

<template>
  <div class="search-bar__search">
    <input
      class="search-bar__searchBox"
      type="text"
      placeholder=""
      autocomplete="off"
      v-model="searchText"
    />

    <div
      class="search-bar__searchDeleteIcon"
      :class="{ 'search-bar__searchIcon--active': isSearchActive }"
      @click="() => emit('click')"
    >
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        ></path>
      </svg>
    </div>

    <div class="search-bar__searchIcon">
      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-bar__search {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  width: 550px;
  min-height: 24px;
  padding: 8px 14px;
  border: solid 1px transparent;
  border-radius: 24px;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);

  & > div {
    flex-shrink: 0;
  }
}

.search-bar__searchBox {
  width: 100%;
  margin: 5px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  outline: none;
}

.search-bar__searchDeleteIcon {
  display: none;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  padding-right: 12px;
  border-right: solid 1px var(--color-light-gray);
  color: var(--color-gray);
  cursor: pointer;

  svg {
    fill: currentColor;
  }

  &.search-bar__searchIcon--active {
    display: block;
  }
}

.search-bar__searchIcon {
  width: 24px;
  height: 24px;
  color: #4285f4;

  svg {
    fill: currentColor;
  }
}
</style>
