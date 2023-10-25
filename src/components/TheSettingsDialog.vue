<script setup lang="ts">
import Store from "@/store/Store";
import Divider from "primevue/divider";
</script>

<template>
  <div>
    <div
      class="flex w-[50svw] [&_img]:w-20 [&_img]:rounded-[10px] SettingsDialog"
    >
      <img :src="Store.state.mainUser.avatarImage" alt="avatar" />
      <p>{{ Store.state.mainUser.getName() }}</p>
    </div>

    <Divider />

    <div class="flex justify-center">{{ Store.state.mainUser.bio }}</div>

    <Divider />

    <div class="flex justify-center">
      <TheButton>black</TheButton>
      <TheButton>white</TheButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.SettingsDialog {
  p {
    align-self: center;
    margin-left: 29%;
  }
}
</style>
