<template>
  <div class="home__containerChat">
    <div class="home__chat">
      <TheUserBar />
      <div></div>
      <input
        class="inputChatText focus:border-none border-none h-14 rounded-none"
        placeholder="Пишите текст...."
        @focus="scrollTo($event.target as HTMLInputElement, 300)"
        autofocus
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheChat",
});
</script>

<script lang="ts" setup>
import { scrollTo } from "@/Utilities/scrollTo";
</script>

<style lang="scss" scoped>
.inputChatText:focus {
  outline: none;
}

.inputChatText {
  backdrop-filter: blur(40px) brightness(85%);
  background-color: rgba(0, 0, 0, 0);
  border-top: 1px rgba(255, 255, 255, 0.08) solid;
  text-align: start;
  padding: 10px;
}

.home__chat {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>
