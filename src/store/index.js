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
    setReactionOnPost(id, reactionName) {
      let currentPost = this.data.find((item) => item.id === id);
      if (reactionName === "like") {
        currentPost.stateReactions = true;
      }
      if (reactionName === "dislike") {
        currentPost.stateReactions = false;
      }
      if (reactionName === "reset") {
        currentPost.stateReactions = null;
      }
    },
  },
  getters: {
    getFullData: (state) => state.data,
    getItemsToShow: (state) => state.itemsToShow,
    getCurrentPageInfo: (state) => state.currentPageInfo,
  },
});
