<template>
  <div
    class="registration"
    :class="[
      { lightTheme: !$store.state.theme.dark },
      { darkTheme: $store.state.theme.dark },
    ]"
  >
    <DialogLoginIn />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
