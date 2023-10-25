<script setup lang="ts">
import DynamicDialog from "primevue/dynamicdialog";
import TheSettingsDialog from "@/components/TheSettingsDialog.vue";

let TheSettingsButton: HTMLButtonElement;
const Store = useStore();
const Dialog = useDialog();

onMounted(() => {
  TheSettingsButton = document.querySelector(`#TheSettingsButton`);
});

function openSettings() {
  Dialog.open(TheSettingsDialog);
  TheSettingsButton.disabled = true;
}
</script>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useDialog } from "primevue/usedialog";

export default defineComponent({
  name: "TheSettingsButton",
});
</script>

<template>
  <TheButton id="TheSettingsButton">
    <img
      :src="
        Store.state.theme.dark
          ? require('@/assets/icons/parameter-light.png')
          : require('@/assets/icons/parameter.png')
      "
      alt="parameter"
      class="w-[50px]"
      @click="openSettings"
    />
  </TheButton>

  <DynamicDialog />
</template>

<style scoped lang="scss"></style>
