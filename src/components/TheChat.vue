<template>
  <div class="home__containerChat">
    <div class="home__chat">
      <TheUserBar />
      <div></div>
      <InputText
        class="inputChatText focus:border-none border-none h-14 rounded-none"
        placeholder="Пишите текст...."
        @focus="scrollTo($event.target as HTMLInputElement)"
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
function scrollTo<T extends HTMLElement>(target: T): void {
  setTimeout(() => target.scrollIntoView(), 300);
}
</script>

<style lang="scss" scoped>
.inputChatText:focus {
  box-shadow: none !important;
}

.inputChatText {
  backdrop-filter: blur(40px) brightness(85%);
  background-color: rgba(0, 0, 0, 0);
  border-top: 1px rgba(255, 255, 255, 0.08) solid;
  color: white;
  text-align: start;
}

.home__chat {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>
