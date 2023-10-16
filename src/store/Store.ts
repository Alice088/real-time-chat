import { createStore } from "vuex";
import { Store } from "vuex";
import StateOfTheme from "@/store/StateOfTheme";
import { IRootState } from "@/interfaces/IRootState";

const store: Store<IRootState> = createStore({
  modules: {
    theme: StateOfTheme,
  },
  state() {
    return {
      isLoading: true,
      isAuthorized: false,
      isVisibleTheChatsPanel: true,
      isVisibleChat: true,
      usersList: [],
    };
  },

  getters: {
    usersList: (state: IRootState) => state.usersList,
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

export default store;
