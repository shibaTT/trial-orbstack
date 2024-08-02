<script setup lang="ts">
import { defineProps } from "vue";
import type { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
import type { GetFeedRecord } from "@/types/types";

const props = defineProps<{
  feed: FeedViewPost & {
    post: {
      record: GetFeedRecord;
    };
  };
}>();

const { post, reply } = props.feed;

const formatDateOnUrl = (date: string) => {
  const postDate = new Date(date);
  return (
    " > " +
    postDate.getFullYear() +
    " > " +
    (postDate.getMonth() + 1) +
    " > " +
    postDate.getDate() +
    " > " +
    postDate.getHours() +
    " > " +
    postDate.getMinutes() +
    " > " +
    postDate.getSeconds()
  );
};

const emits = defineEmits(["onClick"]);
const clickHandler = () => {
  const payload = {
    feed: props.feed,
  };
  emits("onClick", payload);
};
</script>

<template>
  <article class="post">
    <div class="post__meta" @click="clickHandler">
      <img
        class="post__userIcon"
        :src="post.author.avatar"
        :alt="post.author.displayName"
        width="28"
        height="28"
      />
      <div class="post__userInfo">
        <span class="post__userName">{{ post.author.displayName }}</span>
        <div class="post__urlContainer">
          <span class="post__url"
            >https://bsky.app {{ formatDateOnUrl(post.record.createdAt) }}</span
          >
          <span class="post__menu">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
    <h3 class="post__title" @click="clickHandler">
      {{ post.record.text ? post.record.text : "No description" }}
    </h3>
    <p class="post__description">
      {{ post.record.text ? post.record.text : "No description" }}
      <!-- {{ post }} -->
    </p>
  </article>
</template>

<style scoped lang="scss">
.post {
  display: flex;
  flex-direction: column;
  color: var(--color-gray-black);

  gap: 6px;
}

.post__meta {
  display: flex;
  align-items: center;

  gap: 1rem;

  &:hover {
    cursor: pointer;
  }
}

.post__userIcon {
  border: 1px solid var(--color-light-gray);
  border-radius: 50%;
  background-color: var(--color-gray-white);
}

.post__urlContainer {
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  gap: 4px;
}

.post__userName {
  color: var(--color-grayish-black);
  font-size: 0.9rem;
}

.post__menu {
  width: 18px;
  height: 18px;
}

.post__title {
  display: -webkit-box;
  width: 100%;
  margin: 0;
  overflow: hidden;
  color: var(--color-link-blue);
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.3;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

.post__description {
  font-size: 0.9rem;
  // white-space: pre-line;
  // word-break: break-all;
}
</style>
