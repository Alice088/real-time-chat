<template>
  <div class="registration">
    <DialogLoginIn />
  </div>
</template>

<script lang="ts">
import DialogLoginIn from "@/components/DialogLoginIn.vue";

export default {
  components: {
    DialogLoginIn,
  },
};
</script>

<style lang="scss" scoped>
.registration {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/bg-horizontally-dark.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
