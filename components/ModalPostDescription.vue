<script setup lang="ts">
import { defineProps, watch, ref } from "vue";
import type { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
import type { GetFeedRecord } from "@/types/types";

const props = defineProps<{
  feed: FeedViewPost & {
    post: {
      record: GetFeedRecord;
    };
  };
}>();

// const { post, reply } = props.feed;
const post = ref(props.feed.post);
const reply = ref(props.feed.reply);

watch(
  () => props.feed,
  () => {
    post.value = props.feed.post;
    reply.value = props.feed.reply;
  }
);
</script>

<template>
  <div class="description">
    <div class="description__header">
      <img
        class="description__userIcon"
        :src="post.author.avatar"
        :alt="post.author.displayName"
        width="28"
        height="28"
      />
      <span class="description__userName">{{ post.author.displayName }}</span>
      <div class="description__closeButton" @click="$emit('close')">
        <svg viewBox="0 0 24 24" focusable="false" height="24" width="24">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          ></path>
        </svg>
      </div>
    </div>

    <div class="description__meta">
      <div class="description__titleContainer">
        <h3 class="description__title">{{ post.record.text }}</h3>
        <LinkButton href="/" width="80px" bgcolor="var(--color-blue)" color="var(--color-white)"
          >表示</LinkButton
        >
      </div>
      <div class="description__description">{{ post.record.text }}</div>
      <div class="description__metaButtons">
        <Button bgcolor="var(--color-sky-blue)">シェア</Button>
        <Button bgcolor="var(--color-sky-blue)">リポスト</Button>
        <Button bgcolor="var(--color-sky-blue)">いいね</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.description {
  padding: 16px;
}

.description__header {
  display: flex;
  align-items: center;

  gap: 12px;
}

.description__userName {
  font-size: 0.9rem;
}

.description__userIcon {
  border: 1px solid var(--color-light-gray);
  border-radius: 50%;
  background-color: var(--color-gray-white);
}

.description__closeButton {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-sky-blue);
  }
}

.description__meta {
  display: flex;
  flex-direction: column;

  gap: 12px;
}

.description__titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;

  gap: 10px;

  > a {
    flex-shrink: 0;
  }
}

.description__title {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.3;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.description__description {
  color: var(--color-gray-black);
  font-size: 0.9rem;
  white-space: pre-line;
  word-break: break-all;
}

.description__metaButtons {
  display: flex;

  gap: 12px;
}
</style>
