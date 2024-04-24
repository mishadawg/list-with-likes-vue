<template>
  <div>
    <div>{{ props?.post?.id }}</div>
    <div>{{ props?.post?.title }}</div>
    <div>{{ props?.post?.body }}</div>
    <div>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
