<template>
  <div class="h-16 w-full userBar border-b-[2px] border-gray-50/5"></div>
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
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(40px) brightness(90%);
}
</style>
