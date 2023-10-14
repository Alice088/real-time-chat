<template>
  <div class="home__chatsPanel">
    <div>
      <!-- <TheItemOfChatsPanelList
        v-for="user in Store.state.usersList"
        :key="user.id"
      >
        <template v-slot:avatar>
          {{ user.avatarImage }}
        </template>
        <template v-slot:name>
          {{ user.name }}
        </template>
      </TheItemOfChatsPanelList> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "@/classes/User";
import Store from "@/store/Store";

export default defineComponent({
  name: "TheChatsPanel",
});
</script>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.home__chatsPanel {
  transition: 150ms ease-in-out background-color;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(20px) brightness(80%);
  border-right: 1px rgba(255, 255, 255, 0.08) solid;
}
</style>
