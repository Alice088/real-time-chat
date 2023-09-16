<template>
  <button @click.prevent="changeTheme">
    <img :src="src" alt="theme-icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: `ThemeButton`,

  data() {
    return {
      src: require(`@/assets/icons/light-theme.svg`),
      darkIcon: require(`@/assets/icons/dark-theme.svg`),
      lightIcon: require(`@/assets/icons/light-theme.svg`),
    };
  },

  methods: {
    ...mapMutations({
      changeTheme: `theme/changeTheme`,
    }),

    changeThemeOfPrimeVue(state: { dark: boolean }): void {
      if (state) {
        this.$primevue.changeTheme(
          "soho-light",
          "soho-dark",
          "theme-link",
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          () => {}
        );
      } else {
        this.$primevue.changeTheme(
          "soho-dark",
          "soho-light",
          "theme-link",
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          () => {}
        );
      }
    },
  },

  watch: {
    "$store.state.theme.dark": function () {
      this.changeThemeOfPrimeVue(this.$store.state.theme.dark);
      switch (this.$store.state.theme.dark) {
        case true:
          this.src = this.lightIcon;
          break;

        case false:
          this.src = this.darkIcon;
          break;
      }
    },
  },
});
</script>
<style lang="scss" scoped>
img {
  max-width: 50px;
  min-width: 50px;
  max-height: 50px;
  min-height: 50px;
  filter: drop-shadow(0 0 5px black);
  margin: 10px;
}

button {
  background: none;
  outline: none;
  border: none;
}
</style>
