<template>
  <div class="container">
    <ListPosts />
    <Paggination />
    <div>
      <LikedPosts />
      <UnlikedPosts />
    </div>
  </div>
</template>

<script>
import ListPosts from "@/components/ListPosts";
import Paggination from "@/components/Paggination";
import LikedPosts from "@/components/LikedPosts";
import UnlikedPosts from "@/components/UnlikedPosts";

export default {
  name: "HomeView",
  components: {
    ListPosts,
    Paggination,
    LikedPosts,
    UnlikedPosts,
  },
};
</script>
