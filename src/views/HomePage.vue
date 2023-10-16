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
import { useStore } from "vuex";
import device from "current-device";
import { User } from "@/classes/User";

const Store = useStore();
const gosha = new User();
Store.state.usersList.push(gosha);

onMounted(() => {
  const divHome = document.querySelector(`.home`) as HTMLDivElement;
  // eslint-disable-next-line prettier/prettier
  const divContainerChat = document.querySelector(`.home__containerChat`) as HTMLDivElement;

  if (device.mobile() || (device.tablet() && divHome && divContainerChat)) {
    Store.commit(`isVisibleTheChatsPanelChange`);
    divHome.style.gridTemplateColumns = `1fr`;
    divContainerChat.style.gridColumn = `1 / 3`;
  }
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
</style>
