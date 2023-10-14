<template>
  <div>
    <slot name="avatar"></slot>
    <slot name="name"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheItemOfChatsPanelList",
});
</script>

<style lang="scss" scoped></style>
