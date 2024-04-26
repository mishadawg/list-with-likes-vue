<template>
  <ul v-if="props?.listPosts?.length > 0">
    <li v-for="(item, index) in props?.listPosts" :key="index">
      <Post :post="item" />
    </li>
  </ul>
  <template v-else> Нет постов. </template>
</template>
<script setup>
import { defineProps } from "vue";
import Post from "@/components/Post";

const props = defineProps({
  listPosts: {
    required: true,
  },
});
</script>
