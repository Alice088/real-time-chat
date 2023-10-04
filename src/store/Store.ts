import { createStore } from "vuex";
import StateOfTheme from "@/store/StateOfTheme";
import { IRootState } from "@/interfaces/IRootState";

export default createStore({
  modules: {
    theme: StateOfTheme,
  },
  state() {
    return {
      isLoading: true,
      isAuthorized: false,
      isVisibleTheChatsPanel: true,
      isVisibleChat: true,
    };
  },

  mutations: {
    isLodingChange(state: IRootState): void {
      state.isLoading = !state.isLoading;
    },

    isAuthorizedChange(state: IRootState): void {
      state.isAuthorized = !state.isAuthorized;
    },

    isVisibleTheChatsPanelChange(state: IRootState): void {
      state.isVisibleTheChatsPanel = !state.isVisibleTheChatsPanel;
    },

    isVisibleChatChange(state: IRootState): void {
      state.isVisibleChat = !state.isVisibleChat;
    },
  },
});
