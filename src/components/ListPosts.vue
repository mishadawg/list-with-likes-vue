<template>
  <div class="list-post">
    <ul>
      <li v-for="(item, index) in itemsToIteration" :key="index">
        <Post :post="slicedUserComp[index]" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useCommonStore } from "@/store/index.js";
import { computed, defineProps } from "vue";
import Post from "@/components/Post";

const props = defineProps({
  posts: {
    required: true,
  },
});

const store = useCommonStore();

const itemsToShow = computed(() => {
  return store?.getItemsToShow;
});
const currentPageInfo = computed(() => {
  return store?.getCurrentPageInfo;
});

const slicedUserComp = computed(() => {
  let result = props?.posts?.slice(
    currentPageInfo?.value?.pageStart,
    currentPageInfo?.value?.pageStart + itemsToShow?.value
  );
  return result ? result : null;
});

const itemsToIteration = computed(() => {
  let summ = itemsToShow?.value + currentPageInfo?.value?.pageStart;
  if (itemsToShow?.value < props?.posts?.length) {
    if (summ > props?.posts?.length) {
      return props?.posts?.length - currentPageInfo?.value?.pageStart;
    } else {
      return itemsToShow?.value;
    }
  } else {
    return props?.posts?.length;
  }
});
</script>
<style lang="scss" scoped>
.list-post {
  ul {
    list-style: none;
  }
}
</style>
