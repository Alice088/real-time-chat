<template>
  <button @click.prevent="Store.commit(`theme/changeTheme`)">
    <img :src="objectOfSrc.src" alt="icon Theme" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThemeButton",
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
import { reactive, watch } from "vue";
import { useStore } from "vuex";
import { usePrimeVue } from "primevue/config";

const PrimeVue = usePrimeVue();
const Store = useStore();

const objectOfSrc = reactive({
  src: require("@/assets/icons/sun.svg"),
  darkIcon: require("@/assets/icons/moon.svg"),
  lightIcon: require("@/assets/icons/sun.svg"),
});

function changeThemeOfPrimeVue(isDark: boolean): void {
  if (isDark) {
    PrimeVue.changeTheme(
      "soho-light",
      "soho-dark",
      "theme-link",
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {}
    );
  } else {
    PrimeVue.changeTheme(
      "soho-dark",
      "soho-light",
      "theme-link",
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {}
    );
  }
}
watch(
  () => Store.state.theme.dark,
  (isDark: boolean): void => {
    changeThemeOfPrimeVue(isDark);

    switch (isDark) {
      case true:
        objectOfSrc.src = objectOfSrc.lightIcon;
        break;

      case false:
        objectOfSrc.src = objectOfSrc.darkIcon;
        break;
    }
  }
);
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
  width: fit-content;
}
</style>
