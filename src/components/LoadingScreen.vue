<template>
  <div class="loadingScreen">
    <ProgressSpinner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: `LoadingScreen`,
});
</script>

<style lang="scss">
.loadingScreen {
  background-color: #001122;
  display: flex;
  width: 100svw;
  height: 100svh;
  justify-content: center;
  align-items: center;
}
</style>
