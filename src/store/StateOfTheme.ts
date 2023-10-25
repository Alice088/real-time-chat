const StateOfTheme = {
  state: (): { dark: boolean } => ({
    dark: true,
  }),

  mutations: {
    changeTheme(state: { dark: boolean }, toBoolean: boolean): void {
      state.dark = toBoolean;
    },
  },

  namespaced: true,
};

export default StateOfTheme;
