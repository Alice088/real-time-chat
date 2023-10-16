<template>
  <div class="TheItemOfChatsPanelList" @click="toChat">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Store from "@/store/Store";
import device from "current-device";

export default defineComponent({
  name: "TheItemOfChatsPanelList",
});
</script>

<script lang="ts" setup>
function toChat() {
  if (device.mobile() || device.tablet()) {
    Store.commit(`isVisibleTheChatsPanelChange`);
    Store.commit(`isVisibleChatChange`);
  }
}
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
    cursor: pointer;
  }

  p {
    grid-column: 1 / 1;
    grid-row: 1 / 2;
    mix-blend-mode: difference;
    position: relative;
    top: 21px;
  }

  img {
    grid-column: 1 / 1;
    grid-row: 1 / 2;
    width: 100%;
    position: relative;
    bottom: 50%;
    z-index: -999;
    filter: blur(5px) brightness(40%);
    transition: transform;
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
  }
}
</style>
