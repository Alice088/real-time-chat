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
    lodingEnd(state: { isLoading: boolean }): void {
      state.isLoading = !state.isLoading;
    },
  },
});
