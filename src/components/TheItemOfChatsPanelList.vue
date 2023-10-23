<template>
  <div
    class="TheItemOfChatsPanelList"
    @click="toChat($event.currentTarget as HTMLDivElement)"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineEmits, defineProps } from "vue";
import Store from "@/store/Store";
import { User } from "@/classes/User";

export default defineComponent({
  name: "TheItemOfChatsPanelList",
});
</script>

<script lang="ts" setup>
const emit = defineEmits<{
  (e: `currentItem`, currentItem: HTMLDivElement);
}>();

const props = defineProps<{
  user: User;
}>();

function toChat(target: HTMLDivElement) {
  Store.commit(`setCurrentUser`, props.user);
  emit(`currentItem`, target);

  if (document.documentElement.clientWidth < 1200) {
    Store.commit(`isVisibleTheChatsPanelChange`, false);
    Store.commit(`isVisibleChatChange`, true);
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
    color: white;
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

.currentItem {
  border: 1px solid rgba(255, 255, 255, 0.465);
}
</style>
