<template>
  <div
    class="h-16 w-full userBar"
    :class="[
      { userBarLight: !$store.state.theme.dark },
      { userBarDark: $store.state.theme.dark },
    ]"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheUserBar",
});
</script>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.userBar {
  transition: 150ms ease-in-out background-color;
}
.userBarLight {
  background-color: white;
}

.userBarDark {
  background-color: #001122;
}
</style>
