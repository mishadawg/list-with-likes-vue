import { defineStore } from "pinia";
import axios from "axios";

const dataUrl = "https://jsonplaceholder.typicode.com/posts";

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      data: null,
      loaded: false,
      itemsToShow: 5,
      currentPageInfo: {
        currentPage: 1,
        pageStart: 0,
      },
    };
  },
  actions: {
    async getDataFromUrl() {
      this.loaded = true;
      await axios.get(dataUrl).then((response) => {
        this.data = response?.data.map((item) => {
          item.stateReactions = null;
          return item;
        });
        this.loaded = false;
      });
    },
    setPage(payload) {
      this.currentPageInfo = payload;
    },
  },
  getters: {
    getFullData: (state) => state.data,
    getItemsToShow: (state) => state.itemsToShow,
    getCurrentPageInfo: (state) => state.currentPageInfo,
  },
});
