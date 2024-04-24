import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      test: false,
    };
  },
  actions: {
    toggle() {
      this.test = !this.open;
    },
  },
  getters: {
    isTest: (state) => state.test,
  },
});
