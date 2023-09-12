<template>
  <div class="loadingScreen">
    <img src="@/assets/icons/loading.gif" alt="loadig" />
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
  display: flex;
  width: 100svw;
  height: 100svh;
  justify-content: center;
  align-items: center;
}
</style>
