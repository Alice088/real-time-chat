<template>
  <button
    :class="[
      { lightThemeButton: !$store.state.theme.dark },
      { darkThemeButton: $store.state.theme.dark },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: `MyButton`,
});
</script>
<style lang="scss" scoped>
button {
  border-radius: 5px;
  max-height: 50px;
  min-height: 50px;
  transition: 200ms filter ease-in-out;
  font-family: "Shrikhand", cursive;
  font-size: 1.5em;
  color: #ff0066;
  border: none;
  outline: none;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(50%);
  }
}

.darkThemeButton {
  border: #ff0066 solid 1px;
  background: #001122;
}

.lightThemeButton {
  border: #ff0066 solid 1px;
  background: white;
}
</style>
