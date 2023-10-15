<template>
  <div class="TheItemOfChatsPanelList">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheItemOfChatsPanelList",
});
</script>

<style lang="scss">
.TheItemOfChatsPanelList {
  display: grid;
  overflow: hidden;
  height: 70px;
  border-radius: 5px;
  text-align: center;
  margin: 9px;
  margin-top: 20px;

  &:hover {
    img {
      transform: scale(1.1, 1.1);
    }
  }

  p {
    grid-column: 1 / 1;
    grid-row: 1 / 2;
    mix-blend-mode: difference;
    position: relative;
    top: 20px;
  }

  img {
    grid-column: 1 / 1;
    grid-row: 1 / 2;
    width: 100%;
    position: relative;
    bottom: 50%;
    z-index: -999;
    filter: blur(5px) brightness(70%);
    transition: transform;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
  }
}
</style>
