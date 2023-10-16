<template>
  <div class="h-16 w-full userBar border-b-[2px] border-gray-50/5">
    <TheButton
      class="backButton"
      @click="BackToChatsPanel"
      v-if="device.mobile() || device.tablet()"
    >
      <img :src="objectOfSrc.src" alt="arrow back" class="w-10" />
    </TheButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import device from "current-device";

export default defineComponent({
  name: "TheUserBar",
});
</script>

<script lang="ts" setup>
const Store = useStore();

function BackToChatsPanel(): void {
  Store.commit(`isVisibleTheChatsPanelChange`);
  Store.commit(`isVisibleChatChange`);
}

onMounted(() => {
  Store.state.theme.dark
    ? (objectOfSrc.src = objectOfSrc.lightIcon)
    : (objectOfSrc.src = objectOfSrc.darkIcon);
});

const objectOfSrc = reactive({
  src: "",
  darkIcon: require("@/assets/icons/arrow-back-dark.svg"),
  lightIcon: require("@/assets/icons/arrow-back-light.svg"),
});

watch(
  () => Store.state.theme.dark,
  (isDark: boolean): void => {
    isDark
      ? (objectOfSrc.src = objectOfSrc.lightIcon)
      : (objectOfSrc.src = objectOfSrc.darkIcon);
  }
);
</script>

<style lang="scss" scoped>
.userBar {
  backdrop-filter: blur(40px) brightness(80%);
  background-color: rgba(0, 0, 0, 0);
  display: flex;
}
</style>
