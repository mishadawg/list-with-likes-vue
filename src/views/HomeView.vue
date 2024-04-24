<template>
  <div class="container">
    <ListPosts />
    <Paggination />
  </div>
</template>

<script>
import ListPosts from "@/components/ListPosts";
import Paggination from "@/components/Paggination";

export default {
  name: "HomeView",
  components: {
    ListPosts,
    Paggination,
  },
};
</script>
