<template>
  <button><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: `MyButton`,
});
</script>
<style lang="scss" scoped>
button {
  background: #eb45cf;
  border: purple solid 3px;
  border-radius: 20px;
  max-height: 50px;
  min-height: 50px;
  width: 80vw;
  transition: 200ms filter ease-in-out;
  font-family: "Shrikhand", cursive;
  font-size: 1.5em;
  color: #001220;

  &:hover {
    filter: brightness(90%);
  }
}
</style>
