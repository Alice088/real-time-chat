<template>
  <div
    class="home__chatsPanel"
    :class="[
      { home__chatsPanelLight: !$store.state.theme.dark },
      { home__chatsPanelDark: $store.state.theme.dark },
    ]"
  >
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
}

.home__chatsPanelLight {
  background-color: white;
  border-right: 1px rgba(0, 0, 0, 0.26) solid;
}
.home__chatsPanelDark {
  background-color: #001122;
  border-right: 1px rgba(255, 255, 255, 0.08) solid;
}
</style>
