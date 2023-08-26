import { createStore } from "vuex";
import StateOfTheme from "@/store/StateOfTheme";

export default createStore({
  modules: {
    theme: StateOfTheme,
  },
});
