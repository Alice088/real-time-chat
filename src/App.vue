<template>
  <LoadingScreen v-if="isLoading"></LoadingScreen>

  <router-view v-slot="{ Component }" v-if="!isLoading">
    <transition name="loadingScreen" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => setTimeout(() => (isLoading.value = !isLoading.value), 1000));
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

.loadingScreen-enter-active {
  transition: opacity 1.2s linear;
}
.loadingScreen-leave-active {
  transition: opacity 10s linear;
}
.loadingScreen-enter-from {
  opacity: 0;
}
.loadingScreen-enter-to {
  opacity: 1;
}
.loadingScreen-leave-from {
  opacity: 1;
}
.loadingScreen-leave-to {
  opacity: 0;
}
</style>
