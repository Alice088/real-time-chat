<template>
  <button @click.prevent="Store.commit(`theme/changeTheme`)">
    <img :src="objectOfSrc.src" alt="icon Theme" />
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, onMounted } from "vue";
import { useStore } from "vuex";
import { usePrimeVue } from "primevue/config";

export default defineComponent({
  name: "TheChangeThemeButton",
});
</script>

<script lang="ts" setup>
const PrimeVue = usePrimeVue();
const Store = useStore();

onMounted(() => {
  Store.state.theme.dark
    ? (objectOfSrc.src = objectOfSrc.lightIcon)
    : (objectOfSrc.src = objectOfSrc.darkIcon);
});

const objectOfSrc = reactive({
  src: "",
  darkIcon: require("@/assets/icons/moon.svg"),
  lightIcon: require("@/assets/icons/sun.svg"),
});

function changeTheme(isDark: boolean): void {
  try {
    isDark
      ? PrimeVue.changeTheme("soho-light", "soho-dark", "theme-link")
      : PrimeVue.changeTheme("soho-dark", "soho-light", "theme-link");

    isDark
      ? (objectOfSrc.src = objectOfSrc.lightIcon)
      : (objectOfSrc.src = objectOfSrc.darkIcon);
  } catch (error) {
    alert(
      `непредвиденная ошибка, тип: ${error.message}, пожалуйста не паникуйте`
    );
    throw error;
  }
}

watch(
  () => Store.state.theme.dark,
  (isDark: boolean): void => changeTheme(isDark)
);
</script>

<style lang="scss" scoped>
img {
  max-width: 50px;
  min-width: 50px;
  max-height: 50px;
  min-height: 50px;
  margin: 10px;
}

button {
  background: none;
  outline: none;
  border: none;
  width: fit-content;
}
</style>
