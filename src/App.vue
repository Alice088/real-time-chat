<template>
  <router-view v-slot="{ Component }">
    <Transition name="transitionPage" mode="out-in" appear>
      <component :is="Component" />
    </Transition>
  </router-view>

  <transition name="loadingScreen" appear>
    <TheLoadingScreen v-if="store.state.isLoading" />
  </transition>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
onMounted(() => setTimeout(() => store.commit(`isLodingChange`), 1500));
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
  transition: opacity 1s ease-in-out;
}
.loadingScreen-enter-from,
.loadingScreen-leave-from {
  opacity: 1;
}

.loadingScreen-leave-to {
  opacity: 0;
}

///=============================

.transitionPage-enter-active,
.transitionPage-leave-active {
  transition: 0.5s opacity ease-in-out;
}

.transitionPage-enter-from,
.transitionPage-leave-to {
  opacity: 0;
}

.transitionPage-enter-to,
.transitionPage-leave-from {
  opacity: 1;
}
</style>
