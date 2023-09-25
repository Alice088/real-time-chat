<template>
  <div
    class="home__containerChat"
    :class="[
      { home__containerChatLight: !$store.state.theme.dark },
      { home__containerChatDark: $store.state.theme.dark },
    ]"
  >
    <div class="home__chat">
      <TheUserBar />

      <InputText
        class="inputChatText focus:border-none border-none h-14 rounded-none"
        :class="[
          { inputChatTextLight: !$store.state.theme.dark },
          { inputChatTextDark: $store.state.theme.dark },
        ]"
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
}

.inputChatTextDark {
  background-color: #001122;
}
.home__containerChatDark {
  background-image: url("@/assets/backgroundForest-dark.jpg");
  background-position: center;
  background-size: cover;
}

.home__containerChatLight {
  background-image: url("@/assets/background-light.jpg");
  background-position: center;
  background-size: cover;
}

.home__chat {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(7px);
}
</style>
