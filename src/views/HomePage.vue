<template>
  <div
    class="home"
    :class="[
      { homeLight: !$store.state.theme.dark },
      { homeDark: $store.state.theme.dark },
    ]"
  >
    <TheChatsPanel />
    <TheChat />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  height: 100svh;

  .home__chat {
    grid-area: 1 / 2 / 2 / 3;
  }

  .home__chatsPanel {
    grid-area: 1 / 1 / 2 / 2;
  }
}

.homeDark {
  background-image: url("@/assets/backgroundForest-dark.jpg");
  background-position: center;
  background-size: cover;
}

.homeLight {
  background-image: url("@/assets/background-light.jpg");
  background-position: center;
  background-size: cover;
}
</style>
