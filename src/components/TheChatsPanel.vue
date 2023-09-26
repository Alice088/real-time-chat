<template>
  <div class="home__chatsPanel">
    <TheChangeThemeButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheChatsPanel",
});
</script>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home__chatsPanel {
  transition: 150ms ease-in-out background-color;
  background-color: rgba(0, 255, 238, 0);
  backdrop-filter: blur(20px) brightness(90%);
  border-right: 1px rgba(255, 255, 255, 0.08) solid;
}
</style>
