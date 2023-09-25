<template>
  <div class="loadingScreen">
    <div class="flex items-center justify-center h-screen">
      <ProgressSpinner />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: `TheLoadingScreen`,
});
</script>

<style lang="scss">
.loadingScreen {
  background-color: #001122;
  position: fixed;
  inset: 0 0 0 0;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
}
</style>
