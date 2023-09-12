<template>
  <router-view v-if="isLoading"></router-view>
  <LoadingScreen v-else></LoadingScreen>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isLoading: false,
    };
  },

  mounted() {
    setTimeout(() => (this.isLoading = true), 1000);
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Shrikhand&display=swap");

* {
  margin: 0;
  overflow: hidden;
}
</style>
