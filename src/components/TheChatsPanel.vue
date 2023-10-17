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
      v-timer-if="{ flag: Store.state.usersList.length === 0, time: 500 }"
      class="w-full self-center text-center"
    >
      Чатов пока нет
    </p>
    <!-- <div class="w-2 bg-red-600"></div> -->
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
