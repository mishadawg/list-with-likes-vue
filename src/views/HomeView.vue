<template>
  <div class="container">
    <!-- filtering without like/dislike state -->
    <ListPosts :posts="listPostsData" />
    <Paggination v-if="listPostsData?.length" :items="listPostsData" />
    <div>
      <!-- filtering with like state -->
      <LikedPosts />
      <!-- filtering with dislike state -->
      <UnlikedPosts />
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
</script>
