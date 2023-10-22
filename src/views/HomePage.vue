<template>
  <div
    v-if="!Store.state.isFirstEntry"
    class="home overflow-hidden"
    :class="[
      { homeLight: !$store.state.theme.dark },
      { homeDark: $store.state.theme.dark },
    ]"
  >
    <TheChatsPanel v-if="Store.state.isVisibleTheChatsPanel" />
    <TheChat v-if="Store.state.isVisibleChat" />
  </div>

  <div
    v-else
    class="h-[100svh] h-min-[100vh] flex flex-col text-center justify-center"
  >
    <p>Welcome, {{ Store.state.currentUser.getName() }}</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import device from "current-device";
import Store from "@/store/Store";
const isMobileOrTable = device.mobile() || device.tablet();

onMounted(() => {
  if (isMobileOrTable) Store.commit(`isVisibleTheChatsPanelChange`);

  window.addEventListener("resize", resizeHandler);

  if (Store.state.isFirstEntry) {
    setTimeout(() => {
      Store.commit(`isFirstEntryChange`);
    }, 2500);
  }
});

function resizeHandler() {
  const chatsPanel: HTMLDivElement =
    document.querySelector(`.home__chatsPanel`);

  if (document.documentElement.clientWidth < 1200) {
    Store.commit(`isVisibleChatChange`, false);
    if (chatsPanel) chatsPanel.style.width = `auto`;
  } else {
    Store.commit(`isVisibleChatChange`, true);
    Store.commit(`isVisibleTheChatsPanelChange`, true);
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  height: 100svh;
}

.homeDark {
  background-image: url("@/assets/background-dark.jpg");
  background-position: center;
  background-size: cover;
}

.homeLight {
  background-image: url("@/assets/background-light.jpg");
  background-position: center;
  background-size: cover;
}

@media (max-width: 1200px) {
  .home__containerChat {
    grid-column: 1 / 3;
  }

  .home {
    grid-template-columns: 1fr;
  }
}
</style>
