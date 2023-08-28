<template>
  <div
    class="registration"
    :class="[
      { lightTheme: !$store.state.theme.dark },
      { darkTheme: $store.state.theme.dark },
    ]"
  >
    <ThemeButton class="themeBar" />
    <DialogLoginIn class="dialogLoginIn" />
  </div>
</template>

<script lang="ts">
import DialogLoginIn from "@/components/DialogLoginIn.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    DialogLoginIn,
  },
});
</script>

<style lang="scss" scoped>
.registration {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.dialogLoginIn {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  justify-self: center;
}

.themeBar {
  margin: 20px;
  justify-self: end;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}

.lightTheme {
  background-image: url("@/assets/bg-horizontally-light.svg");
}

@media (orientation: portrait) {
  .lightTheme {
    background-image: url("@/assets/bg-virtically-ligth.svg");
  }
}

.darkTheme {
  background-image: url("@/assets/bg-horizontally-dark.svg");
}

@media (orientation: portrait) {
  .darkTheme {
    background-image: url("@/assets/bg-virtically-dark.svg");
  }
}
</style>
