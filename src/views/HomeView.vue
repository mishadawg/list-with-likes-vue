<template>
  <div class="container mx-auto">
    <ListPosts :posts="listPostsData" />
    <Paggination v-if="listPostsData?.length" :items="listPostsData" />
    <div class="flex justify-between items-start gap-4">
      <LikedPosts class="flex-initial w-full" :posts="likedPostsData" />
      <UnlikedPosts class="flex-initial w-full" :posts="dislikedPostsData" />
    </div>
  </div>
</template>

<script setup>
import ListPosts from "@/components/ListPosts";
import Paggination from "@/components/Paggination";
import LikedPosts from "@/components/LikedPosts";
import UnlikedPosts from "@/components/UnlikedPosts";
import { onMounted, computed } from "vue";
import { useCommonStore } from "@/store/index.js";

const store = useCommonStore();
onMounted(() => {
  store.getDataFromUrl();
});

const listPostsData = computed(() => {
  return store?.getFullData?.filter((item) => item.stateReactions === null);
});

const likedPostsData = computed(() => {
  return store?.getFullData?.filter((item) => item.stateReactions === true);
});

const dislikedPostsData = computed(() => {
  return store?.getFullData?.filter((item) => item.stateReactions === false);
});
</script>
