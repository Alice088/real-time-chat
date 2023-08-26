<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  watch: {
    "$store.state.theme.dark": function () {
      let root = document.documentElement;

      if (!this.$store.state.theme.dark) {
        root.style.setProperty(
          "--ThemeLandscape",
          "url(`assets/bg-horizontally-light.svg`)"
        );

        root.style.setProperty(
          "--ThemeLandscape",
          "url(`assets/bg-virtically-ligth.svg`)"
        );
      }
    },
  },
});
</script>

<style lang="scss">
:root {
  --ThemeLandscape: "@/assets/bg-horizontally-dark.svg";
  --ThemePortain: "@/assets/bg-virtically-dark.svg";
}

* {
  margin: 0;
  padding: 0;
}
</style>
