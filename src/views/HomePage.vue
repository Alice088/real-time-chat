<template>
  <div
    class="home"
    :class="[
      { homeLight: !$store.state.theme.dark },
      { homeDark: $store.state.theme.dark },
    ]"
  >
    <TheChatsPanel v-if="Store.state.isVisibleTheChatsPanel" />
    <TheChat v-if="Store.state.isVisibleChat" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const Store = useStore();

onMounted(() => {
  if (window.innerWidth < 1270) {
    Store.commit(`isVisibleTheChatsPanelChange`);
  }
});
</script>

<style scoped lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  height: 100svh;
}

@media (max-width: 1270px) {
  .home {
    grid-template-columns: 1fr;
  }

  .home__containerChat {
    grid-column: 1 / 3;
  }
}

.homeDark {
  background-image: url("@/assets/background-dark.jpg");
  background-position: center;
  background-size: cover;
}

.homeLight {
  background-image: url("@/assets/background-light.jpg");
  background-position: center;
  background-size: cover;
}
</style>
