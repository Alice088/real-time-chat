<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>

  <transition name="loadingScreen" appear>
    <LoadingScreen v-if="store.state.isLoading"></LoadingScreen>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
onMounted(() => setTimeout(() => store.commit(`lodingEnd`), 1500));
</script>

<style lang="scss">
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Shrikhand&display=swap");

html {
  background-color: #001122;
}

* {
  margin: 0;
  overflow: hidden;
}
.loadingScreen-enter-active,
.loadingScreen-leave-active {
  transition: opacity 1s linear;
}
.loadingScreen-enter-from {
  opacity: 1;
}
.loadingScreen-leave-from {
  opacity: 1;
}
.loadingScreen-leave-to {
  opacity: 0;
}
</style>
