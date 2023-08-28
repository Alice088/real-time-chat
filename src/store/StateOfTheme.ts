const StateOfTheme = {
  state: (): { dark: boolean } => ({
    dark: true,
  }),

  mutations: {
    changeTheme(state: { dark: boolean }): void {
      state.dark = !state.dark;
    },
  },

  namespaced: true,
};

export default StateOfTheme;
