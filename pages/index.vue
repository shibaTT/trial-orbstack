<script setup lang="ts">
import type { GetFeedRecord } from "@/types/types";
import type { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

type ExtendFeedViewPost = FeedViewPost & {
  post: {
    record: GetFeedRecord;
  };
};

type Feed = {
  feed: ExtendFeedViewPost[];
  cursor: string;
};

// const response = await useFetch<Feed>("/api/getPopularPosts");
// const feeds = response.data.value?.feed;
// console.log(feeds);

const feeds = ref<ExtendFeedViewPost[]>([]);

onBeforeMount(async () => {
  const agent = await resumeAgent();

  if (!agent) {
    navigateTo("/login");
    return;
  }

  // const { data } = await agent.getTimeline({ limit: 10 });
  const { feed } = await $fetch<Feed>("/api/getTimeline", {
    method: "POST",
    body: JSON.stringify({ session: agent.session }),
  });

  feeds.value = feed;
});

const isModalOpen = ref(false);
const modalFeed = ref(null);
const openModal = (payload: any) => {
  modalFeed.value = payload.feed;
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div v-if="feeds !== undefined" class="posts">
    <Post v-for="feed in feeds" :key="feed.post.cid" :feed="feed" @on-click="openModal" />
  </div>
  <Modal v-if="isModalOpen" @close="isModalOpen = false">
    <ModalPostDescription v-if="modalFeed !== null" :feed="modalFeed" @close="closeModal" />
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
