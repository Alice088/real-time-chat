import { createStore } from "vuex";
import { Store } from "vuex";
import StateOfTheme from "@/store/StateOfTheme";
import { IRootState } from "@/interfaces/IRootState";
import { User } from "@/classes/User";

const gosha = new User(`Gosha`);

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
      usersList: [gosha, gosha, gosha],
      currentUser: null,
      mainUser: null,
    };
  },

  getters: {
    usersList: (state: IRootState) => state.usersList,
  },

  mutations: {
    isLodingChange(state: IRootState) {
      state.isLoading = !state.isLoading;
    },

    isAuthorizedChange(state: IRootState) {
      state.isAuthorized = !state.isAuthorized;
    },

    isVisibleTheChatsPanelChange(state: IRootState, toBoolean: boolean) {
      state.isVisibleTheChatsPanel = toBoolean;
    },

    isVisibleChatChange(state: IRootState, toBoolean: boolean) {
      state.isVisibleChat = toBoolean;
    },

    isFirstEntryChange(state: IRootState) {
      state.isFirstEntry = false;
    },

    setCurrentUser(state: IRootState, User: User) {
      state.currentUser = User;
    },

    setMainUser(state: IRootState, User: User) {
      state.mainUser = User;
    },
  },
});

export default store;
