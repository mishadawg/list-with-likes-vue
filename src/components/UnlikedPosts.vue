<template>
  <div :class="styleListPosts">
    <h2>Не понравившиеся посты:</h2>
    <PostsContainer :listPosts="props?.posts" />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import PostsContainer from "@/components/PostsContainer";
import { styleListPosts } from "@/helpers/style.js";

const props = defineProps({
  posts: {
    required: true,
  },
});
</script>
