<template>
  <div class="userBar border-b-[2px] border-gray-50/5">
    <TheButton
      class="backButton"
      @click="BackToChatsPanel"
      v-if="windwosWidth < 1200"
    >
      <img :src="objectOfSrc.src" alt="arrow back" class="w-10" />
    </TheButton>

    <div class="flex items-center gap-x-3 m-4" v-if="Store.state.currentUser">
      <img :src="Store.state.currentUser.avatarImage" alt="avatar" />
      <p>
        {{ Store.state.currentUser.getName() }}
      </p>
    </div>

    <TheButton>
      <img
        :src="
          Store.state.theme.dark
            ? require('@/assets/icons/parameter-light.png')
            : require('@/assets/icons/parameter.png')
        "
        alt="parameter"
      />
    </TheButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "TheUserBar",
});
</script>

<script lang="ts" setup>
import TheButton from "@/components/UI/TheButton.vue";

const Store = useStore();
let windwosWidth = ref(0);

onMounted(() => {
  window.addEventListener("resize", () => {
    windwosWidth.value = document.documentElement.clientWidth;
  });
});

function BackToChatsPanel(): void {
  Store.commit(`isVisibleTheChatsPanelChange`, true);
  Store.commit(`isVisibleChatChange`, false);
}

onMounted(() => {
  windwosWidth.value = document.documentElement.clientWidth;

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
  height: 64px;
  backdrop-filter: blur(40px) brightness(85%);
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    border-radius: 10px;
  }
}
</style>
