<template>
  <div class="home">
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
</style>
