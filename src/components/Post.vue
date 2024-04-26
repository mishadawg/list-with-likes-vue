<template>
  <div class="mb-1 py-2 border-black border-b-2">
    <div>Id: {{ props?.post?.id }}</div>
    <div class="fs-16 py-2 text-lg text-sky-600">
      {{ props?.post?.title }}
    </div>
    <div>{{ props?.post?.body }}</div>
    <div class="flex gap-4 mt-2">
      <button
        v-if="visibleReactionBtn(props?.post?.stateReactions, 'like')"
        @click="likePost"
        :class="[styleBtnLike, stockStylesBtn, stockTransitions]"
      >
        Like!
      </button>
      <button
        v-if="visibleReactionBtn(props?.post?.stateReactions, 'dislike')"
        @click="dislikePost"
        :class="[styleBtnDislike, stockStylesBtn, stockTransitions]"
      >
        Dislike
      </button>
      <button
        v-if="visibleReactionBtn(props?.post?.stateReactions, 'reset')"
        @click="resetReactionPost"
        :class="[styleBtnReset, stockStylesBtn, stockTransitions]"
      >
        Reset reaction
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useCommonStore } from "@/store/index.js";
import {
  stockStylesBtn,
  stockTransitions,
  styleBtnLike,
  styleBtnDislike,
  styleBtnReset,
} from "@/helpers/style.js";

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
