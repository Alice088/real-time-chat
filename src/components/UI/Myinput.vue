<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="[
      { lightThemeInput: !$store.state.theme.dark },
      { darkThemeInput: $store.state.theme.dark },
    ]"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: [String, Number],
  },
  emits: ["update:modelValue"],
  name: `MyInput`,
});
</script>

<style lang="scss" scoped>
input {
  color: #ff0066;
  text-align: center;
  font-family: "Shrikhand", cursive;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.5em;
  font-stretch: ultra-expanded;
  transition: 150ms ease-in-out;
  transition-property: box-shadow border;

  &:active {
    filter: brightness(90%);
  }
}

.darkThemeInput {
  border: 1px rgba(255, 255, 255, 0.08) solid;
  border-left: 2px #ff0066 solid;
  background-color: #001122;

  &:focus {
    border: 1px #ff0066 solid;
  }
}

.lightThemeInput {
  border: 1px rgba(0, 0, 0, 0.321) solid;
  border-left: 2px #ff0066 solid;
  background-color: rgb(255, 255, 255);

  &:focus {
    border: 1px #ff0066 solid;
  }
}
</style>
