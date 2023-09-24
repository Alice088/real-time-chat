import { createStore } from "vuex";
import StateOfTheme from "@/store/StateOfTheme";

export default createStore({
  modules: {
    theme: StateOfTheme,
  },
  state() {
    return {
      isLoading: true,
    };
  },

  mutations: {
    isLoding(state: { isLoading: boolean }): void {
      state.isLoading = !state.isLoading;
    },
  },
});
