<template>
  <div
    class="home"
    :class="[
      { homeLight: !$store.state.theme.dark },
      { homeDark: $store.state.theme.dark },
    ]"
  >
    <TheChatsPanel v-if="Store.state.isVisibleTheChatsPanel" />
    <TheChat v-if="Store.state.isVisibleChat" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import device from "current-device";
import Store from "@/store/Store";

onMounted(() => {
  if (device.mobile() || device.tablet()) {
    Store.commit(`isVisibleTheChatsPanelChange`);
  }

  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 1200) {
      Store.commit(`isVisibleChatChange`, false);
    } else {
      Store.commit(`isVisibleChatChange`, true);
      Store.commit(`isVisibleTheChatsPanelChange`, true);
    }
  });
});
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
