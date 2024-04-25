<template>
  <div class="post-item">
    <div>{{ props?.post?.id }}</div>
    <div>{{ props?.post?.title }}</div>
    <div>{{ props?.post?.body }}</div>
    <div class="post-item-reactions">
      <button
        v-if="visibleReactionBtn(props?.post?.stateReactions, 'like')"
        @click="likePost"
      >
        Like
      </button>
      <button
        v-if="visibleReactionBtn(props?.post?.stateReactions, 'dislike')"
        @click="dislikePost"
      >
        Dislike
      </button>
      <button
        v-if="visibleReactionBtn(props?.post?.stateReactions, 'reset')"
        @click="resetReactionPost"
      >
        Reset reaction
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useCommonStore } from "@/store/index.js";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const store = useCommonStore();

const visibleReactionBtn = (state, reactionName) => {
  let result = true;
  if (reactionName === "like") {
    if (state) {
      return false;
    } else if (state === false) {
      return true;
    } else if (state === null) {
      return true;
    }
  }
  if (reactionName === "dislike") {
    if (state) {
      return true;
    } else if (state === false) {
      return false;
    } else if (state === null) {
      return true;
    }
  }
  if (reactionName === "reset") {
    if (state || state === false) {
      return true;
    } else {
      return false;
    }
  }
  return result;
};

const likePost = () => {
  store.setReactionOnPost(props?.post?.id, "like");
};
const dislikePost = () => {
  store.setReactionOnPost(props?.post?.id, "dislike");
};
const resetReactionPost = () => {
  store.setReactionOnPost(props?.post?.id, "reset");
};
</script>
<style lang="scss" scoped>
.post-item {
  margin-bottom: 16px;
  padding: 16px 0px;
  border-bottom: 1px solid black;
  &-reactions {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }
}
</style>
