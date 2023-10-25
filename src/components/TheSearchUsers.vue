<script setup lang="ts"></script>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheSearchUsers",
});
</script>

<template>
  <input placeholder="Искать людей..." class="searcBar" disabled />
</template>

<style scoped lang="scss">
.searcBar {
  height: 69px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom: solid 1px rgb(249 250 251 / 0.05);
  text-align: center;
  cursor: zoom-in;
}

.searcBar:focus {
  outline: none;
}
</style>
