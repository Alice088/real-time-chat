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
  isDark
    ? PrimeVue.changeTheme("soho-light", "soho-dark", "theme-link")
    : PrimeVue.changeTheme("soho-dark", "soho-light", "theme-link");
}

watch(
  () => Store.state.theme.dark,
  (isDark: boolean): void => {
    changeThemeOfPrimeVue(isDark);

    isDark
      ? (objectOfSrc.src = objectOfSrc.lightIcon)
      : (objectOfSrc.src = objectOfSrc.darkIcon);
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
