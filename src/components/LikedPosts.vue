<template>
  <div class="liked-post">
    <h2>liked-post</h2>
    <ul v-if="props?.posts?.length > 0">
      <li v-for="(item, index) in props?.posts" :key="index">
        <Post :post="item" />
      </li>
    </ul>
    <template v-else> Нет избранных постов. </template>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import Post from "@/components/Post";

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
