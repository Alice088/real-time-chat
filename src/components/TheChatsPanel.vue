<template>
  <div class="home__chatsPanel">
    <div class="h-[100svh] overflow-y-scroll">
      <transition-group name="itemOfChatList" appear>
        <TheItemOfChatsPanelList
          v-for="user in Store.getters.usersList"
          :key="user.id"
          @currentItem="currentItemClick($event)"
        >
          <img :src="user.avatarImage" alt="avatar Image" />
          <p>{{ user.getName() }}</p>
        </TheItemOfChatsPanelList>
      </transition-group>
    </div>

    <p
      v-timer-if="{ flag: Store.state.usersList.length === 0, time: 600 }"
      class="w-full self-center text-center"
    >
      Чатов пока нет
    </p>

    <div
      class="w-2 hover:w-6 cursor-ew-resize transition-all duration-500 holdBar"
      @mousedown="changeWidthOfPanel"
    >
      <p class="transition-all duration-700">Тяните</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { vTimerIf } from "@/directives/vTimerIf";

export default defineComponent({
  name: "TheChatsPanel",
});
</script>

<script lang="ts" setup>
import Store from "@/store/Store";
let lastItem: HTMLDivElement;

function currentItemClick(item: HTMLDivElement) {
  if (lastItem) lastItem.classList.remove(`currentItem`);
  lastItem = item;
  item.classList.add(`currentItem`);
}

function changeWidthOfPanel(event: MouseEvent): void {
  let pointX = event.clientX;
  let element: HTMLElement = document.querySelector(`.home__chatsPanel`);
  let startWidth = element.style.width;

  document.addEventListener(`mousemove`, onMouseMove);

  function onMouseMove(mouse: MouseEvent) {
    if (pointX > mouse.clientX) {
      +element.style.width.slice(0, -2) > 307
        ? (element.style.width = pointX + mouse.clientX - pointX + `px`)
        : (element.style.width = startWidth);
    } else {
      +element.style.width.slice(0, -2) < 1000
        ? (element.style.width = pointX + mouse.clientX - pointX + `px`)
        : (element.style.width = `1000px`);
    }
  }

  document.addEventListener(`mouseup`, () => {
    document.removeEventListener(`mousemove`, onMouseMove);
  });
}
</script>

<style lang="scss" scoped>
.home__chatsPanel {
  display: flex;
  transition: 150ms ease-in-out background-color;
  backdrop-filter: blur(40px) brightness(85%);
  background-color: rgba(0, 0, 0, 0);
  border-right: 1px rgba(255, 255, 255, 0.08) solid;
}
.currentItem {
  outline: 1px solid white;
}

.holdBar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3px;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  p {
    opacity: 0;
    transform: rotate(90deg);
  }

  &:hover {
    p {
      opacity: 1;
    }

    background-color: rgba(255, 255, 255, 0.328);
  }
}

.itemOfChatList-enter-active,
.itemOfChatList-leave-active {
  transition: 0.5s opacity ease-in-out;
}

.itemOfChatList-enter-from,
.itemOfChatList-leave-to {
  opacity: 0;
}

.itemOfChatList-enter-to,
.itemOfChatList-leave-from {
  opacity: 1;
}
</style>
