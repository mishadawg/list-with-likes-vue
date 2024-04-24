<template>
  <div>
    <div>{{ props?.post?.id }}</div>
    <div>{{ props?.post?.title }}</div>
    <div>{{ props?.post?.body }}</div>
    <div>
      <button v-if="visibleReactionBtn()" @click="likePost">Like</button>
      <button v-if="visibleReactionBtn()" @click="dislikePost">Dislike</button>
      <button v-if="visibleReactionBtn()" @click="resetReactionPost">
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

const visibleReactionBtn = () => {
  let result = true;
  // console.log(state);
  // console.log(reactionName);
  // if (reactionName === "like") {
  //   if (state === "like") result = true;
  // } else if (reactionName === "dislike") {
  //   if (state === "dislike") result = true;
  // } else if (reactionName === "reset") {
  //   if (state === "like" || state === "dislike") result = true;
  // }
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
