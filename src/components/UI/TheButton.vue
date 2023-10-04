<template>
  <button
    class="flex justify-center items-center p-2 w-fit bg-white/0 active:scale-[0.90] active:bg-white/10 ease-in-out duration-75 transition-all"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheButton",
});
</script>
