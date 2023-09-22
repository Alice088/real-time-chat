<template>
  <div class="home">
    <div
      class="home__chatsPanel"
      :class="[
        { home__chatsPanelLight: !$store.state.theme.dark },
        { home__chatsPanelDark: $store.state.theme.dark },
      ]"
    >
      <ThemeButton />
    </div>

    <div
      class="home__containerChat"
      :class="[
        { home__containerChatLight: !$store.state.theme.dark },
        { home__containerChatDark: $store.state.theme.dark },
      ]"
    >
      <div class="home__chat">
        <UserBar />

        <InputText
          class="inputChatText focus:border-none border-none h-14 rounded-none"
          :class="[
            { inputChatTextLight: !$store.state.theme.dark },
            { inputChatTextDark: $store.state.theme.dark },
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.inputChatText:focus {
  box-shadow: none !important;
}

.inputChatTextLight {
  background-color: rgb(255, 255, 255);
}

.inputChatTextDark {
  background-color: #001122;
}

.home {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  height: 100svh;
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
    grid-area: 1 / 2 / 2 / 3;
    backdrop-filter: blur(7px);
  }

  .home__chatsPanel {
    grid-area: 1 / 1 / 2 / 2;
    transition: 150ms ease-in-out background-color;
  }

  .home__chatsPanelLight {
    background-color: white;
    border-right: 1px rgba(0, 0, 0, 0.26) solid;
  }
  .home__chatsPanelDark {
    background-color: #001122;
    border-right: 1px rgba(255, 255, 255, 0.08) solid;
  }
}
</style>
