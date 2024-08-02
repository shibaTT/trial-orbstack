<script setup lang="ts">
import type { GetFeedRecord } from "@/types/types";
import type { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

type Feed = {
  feed: (FeedViewPost & {
    post: {
      record: GetFeedRecord;
    };
  })[];
  cursor: string;
};

const response = await useFetch<Feed>("/api/getPopularPosts");
const feeds = response.data.value?.feed;
// console.log(feeds);

const isModalOpen = ref(false);
const modalFeed = ref(null);
const toggleModal = (payload: any) => {
  modalFeed.value = payload.feed;
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <div v-if="feeds !== undefined" class="posts">
    <Post v-for="feed in feeds" :key="feed.post.cid" :feed="feed" @on-click="toggleModal" />
  </div>
  <Modal v-if="isModalOpen" @close="isModalOpen = false">
    <ModalPostDescription :feed="modalFeed" />
  </Modal>
</template>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 652px;
  margin-left: 180px;
  padding-top: 24px;

  gap: 2rem;
}
</style>
