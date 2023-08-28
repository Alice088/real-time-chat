<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input type="text" autofocus :class="[{}]" />
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
  color: #001220;
  text-align: center;
  font-family: "Shrikhand", cursive;
  max-width: 100%;
  min-width: 100%;
  padding: 10px;
  border-radius: 20px;
  border-color: white;
  border: #ff006688 3px solid;
  outline: none;
  font-size: 1.5em;
  font-stretch: ultra-expanded;
  transition: 200ms ease-in-out;
  transition-property: box-shadow outline;

  &:focus {
    outline: purple solid 4px;
    box-shadow: 0 0 30px 5px rgba(128, 0, 128, 0.853);
  }

  &:active {
    filter: brightness(90%);
  }
}
</style>
