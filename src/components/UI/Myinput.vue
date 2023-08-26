<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input type="text" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: `MyInput`,
});
</script>

<style lang="scss" scoped>
input {
  margin: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.097);
  color: red;
}
</style>
