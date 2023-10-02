<template>
  <div class="h-16 w-full userBar border-b-[2px] border-gray-50/5">
    <Button
      icon="pi pi-arrow-left"
      class="bg-white/0 focus:bg-white/0 backButton"
    />
  </div>
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
  display: flex;
}

@media (min-width: 1270px) {
  .backButton {
    display: none;
  }
}
</style>
