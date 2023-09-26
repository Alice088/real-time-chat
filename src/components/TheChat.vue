<template>
  <div class="home__containerChat">
    <div class="home__chat">
      <TheUserBar />

      <InputText
        class="inputChatText focus:border-none border-none h-14 rounded-none"
        :class="[
          { inputChatTextLight: !$store.state.theme.dark },
          { inputChatTextDark: $store.state.theme.dark },
        ]"
        placeholder="Пишите текст...."
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

<style lang="scss" scoped>
.inputChatText:focus {
  box-shadow: none !important;
}

.inputChatTextLight {
  background-color: rgb(255, 255, 255);
  background-color: #00000000;
  backdrop-filter: blur(20px) brightness(90%);
  border-top: 1px rgba(255, 255, 255, 0.08) solid;
  color: white;
}

.inputChatTextDark {
  background-color: #00000000;
  backdrop-filter: blur(20px) brightness(90%);
  border-top: 1px rgba(255, 255, 255, 0.08) solid;
}

.home__chat {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(7px);
}
</style>
