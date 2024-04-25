<template>
  <div class="unliked-post">
    <h2>unliked-post</h2>
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
.unliked-post {
  ul {
    list-style: none;
  }
}
</style>
