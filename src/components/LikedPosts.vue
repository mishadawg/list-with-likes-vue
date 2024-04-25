<template>
  <div class="liked-post">
    <h2>liked-post</h2>
    <PostsContainer :listPosts="props?.posts" />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import PostsContainer from "@/components/PostsContainer";

const props = defineProps({
  posts: {
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.liked-post {
  ul {
    list-style: none;
  }
}
</style>
