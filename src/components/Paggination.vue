<template>
  <div>
    <ul class="paggination">
      <li>
        <button @click="setPage(currentPage - 1)" :disabled="currentPage === 1">
          Prev
        </button>
      </li>
      <li v-for="(page, index) in totalPage" :key="index">
        <button :disabled="currentPage === page" @click="setPage(page)">
          {{ page }}
        </button>
      </li>
      <li>
        <button
          @click="setPage(currentPage + 1)"
          :disabled="currentPage === totalPage"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useCommonStore } from "@/store/index.js";
import { computed, ref, defineProps } from "vue";

const store = useCommonStore();
const currentPage = ref(1);

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});

const dataLength = computed(() => {
  return props?.items?.length;
});
const itemsToShow = computed(() => {
  return store.itemsToShow;
});

const pageStart = computed(() => {
  return (currentPage.value - 1) * itemsToShow.value;
});
const totalPage = computed(() => {
  let result = Math.ceil(dataLength.value / itemsToShow.value);
  let stockCount = 3;
  return result ? result : stockCount;
});

const setPage = (index) => {
  if (index <= 0 || index > totalPage.value) {
    return;
  }
  currentPage.value = index;
  store.setPage({
    currentPage: currentPage.value,
    pageStart: pageStart.value,
  });
};
</script>
<style lang="scss" scoped>
.paggination {
  display: flex;
  justify-content: center;
  gap: 4px;
  list-style: none;
}
</style>
