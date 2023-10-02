<template>
  <Toast
    :style="{ minWidth: `10vw`, maxWidth: `98vw`, right: `5px` }"
    :pt="{
      buttonContainer: {
        class: `p-2 pr-3`,
      },
    }"
  />
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

//loadingScreen
///=============================
//transitionPage

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
