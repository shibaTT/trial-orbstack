<script setup lang="ts">
const syncedSearchText = ref<string>("");

const props = defineProps<{
  searchText?: string;
}>();

const clickSearchDeleteHandler = () => {
  syncedSearchText.value = "";
};

onMounted(() => {
  syncedSearchText.value = props.searchText ? props.searchText : "";
});
</script>

<template>
  <nav class="header">
    <h1>Bloogle</h1>

    <SearchBar v-model:value="syncedSearchText" @click="clickSearchDeleteHandler" />

    <div class="header__settings">
      <div class="header__settingsAccount"></div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;

  gap: 2rem;
}

.header__settings {
  margin-left: auto;

  .header__settingsAccount {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--color-gray);
  }
}

@media only screen and (max-width: 480px) {
  .header__search {
    width: 90%;
  }
}
</style>
