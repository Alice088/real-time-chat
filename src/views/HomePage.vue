<template>
  <div class="home">
    <div class="home__chat"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  height: 100svh;

  .home__chat {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
}
</style>
