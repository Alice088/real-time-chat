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
  backdrop-filter: blur(40px) brightness(80%);
  -webkit-backdrop-filter: blur(40px) brightness(80%);
  background-color: rgba(0, 0, 0, 0);
  transition: 150ms ease-in-out background-color;
}
</style>
