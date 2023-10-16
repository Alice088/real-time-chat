<template>
  <div class="home__chatsPanel">
    <div class="h-[100svh] overflow-y-scroll">
      <TheItemOfChatsPanelList
        v-for="user in Store.getters.usersList"
        :key="user.id"
      >
        <img :src="user.avatarImage" alt="avatar Image" />
        <p>{{ user.getName() }}</p>
      </TheItemOfChatsPanelList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheChatsPanel",
});
</script>

<script lang="ts" setup>
import Store from "@/store/Store";
</script>

<style lang="scss" scoped>
.home__chatsPanel {
  transition: 150ms ease-in-out background-color;
  backdrop-filter: blur(40px) brightness(80%);
  background-color: rgba(0, 0, 0, 0);
  border-right: 1px rgba(255, 255, 255, 0.08) solid;
}
</style>
