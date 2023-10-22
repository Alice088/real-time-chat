import { createStore } from "vuex";
import { Store } from "vuex";
import StateOfTheme from "@/store/StateOfTheme";
import { IRootState } from "@/interfaces/IRootState";
import { User } from "@/classes/User";

const store: Store<IRootState> = createStore({
  modules: {
    theme: StateOfTheme,
  },
  state() {
    return {
      isFirstEntry: true,
      isLoading: true,
      isAuthorized: false,
      isVisibleTheChatsPanel: true,
      isVisibleChat: true,
      usersList: [],
      currentUser: null,
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

    isVisibleTheChatsPanelChange(state: IRootState, toBoolean: boolean): void {
      state.isVisibleTheChatsPanel = toBoolean;
    },

    isVisibleChatChange(state: IRootState, toBoolean: boolean): void {
      state.isVisibleChat = toBoolean;
    },

    isFirstEntryChange(state: IRootState) {
      state.isFirstEntry = false;
    },

    setCurrentUser(state: IRootState, User: User) {
      state.currentUser = User;
    },
  },
});

export default store;
