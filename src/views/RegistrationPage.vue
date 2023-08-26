<template>
  <div class="registration">
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
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

@media (orientation: portrait) {
  .registration {
    // background-image: url("var(--ThemePortain)");
  }
}

@media (orientation: landscape) {
  .registration {
    // background-image: url("var(--ThemeLandscape)");
  }
}
</style>
