<template>
  <div class="home__chatsPanel" ref="chatsPanel">
    <TheSearchUsers />

    <div class="flex h-full">
      <div class="h-full overflow-y-scroll">
        <transition-group name="itemOfChatList" appear>
          <TheItemOfChatsPanelList
            v-for="user in Store.getters.usersList"
            :key="user.id"
            @currentItem="currentItemClick($event)"
            :user="user"
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
        v-if="documentWidth > 1200"
        @mousedown="changePanelWidth"
        class="w-2 cursor-ew-resize"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref } from "vue";
import { vTimerIf } from "@/directives/vTimerIf";
import Store from "@/store/Store";

export default defineComponent({
  name: "TheChatsPanel",
});
</script>

<script lang="ts" setup>
import TheSearchUsers from "@/components/TheSearchUsers.vue";

let lastItem: HTMLDivElement;
const chatsPanel: Ref<HTMLElement> = ref(null);
let startX = 0;
let startWidth = 0;
let documentWidth = ref(document.documentElement.offsetWidth);
let allElement = null;

onMounted(() => {
  startWidth = chatsPanel.value.offsetWidth;
  allElement = document.querySelectorAll("p, img");

  window.addEventListener(`resize`, () => {
    documentWidth.value = document.documentElement.offsetWidth;
  });
});

function currentItemClick(item: HTMLDivElement) {
  if (lastItem) lastItem.classList.remove(`currentItem`);
  lastItem = item;
  item.classList.add(`currentItem`);
}

function changePanelWidth(event: MouseEvent) {
  startX = chatsPanel.value.offsetWidth - event.clientX;

  allElement.forEach((element: HTMLElement) => {
    element.style.userSelect = `none`;
  });

  document.addEventListener("mousemove", onMouseMove);

  function onMouseMove(event: MouseEvent) {
    chatsPanel.value.style.width = `${Math.min(
      Math.max(event.clientX - startX, startWidth),
      700
    )}px`;
  }

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);

    allElement.forEach((element: HTMLElement) => {
      element.style.userSelect = `auto`;
    });
  });
}
</script>

<style lang="scss" scoped>
.home__chatsPanel {
  display: flex;
  flex-direction: column;
  transition: 150ms ease-in-out background-color;
  backdrop-filter: blur(40px) brightness(85%);
  background-color: rgba(0, 0, 0, 0);
  border-right: 1px rgba(255, 255, 255, 0.08) solid;
}

.currentItem {
  outline: 1px solid white;
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
