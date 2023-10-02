<template>
  <div
    class="registration"
    :class="[
      { lightTheme: !$store.state.theme.dark },
      { darkTheme: $store.state.theme.dark },
    ]"
  >
    <div class="dialogLoginIn">
      <TheDialogLoginIn />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.registration {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100svh;
  min-height: 100vh;
  width: 100svw;
  overflow: hidden;
}

.dialogLoginIn {
  grid-column: 2 / 2;
}

@media (max-width: 1066px) {
  .registration {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .dialogLoginIn {
    grid-column: 1 / 2;
  }
}

.lightTheme {
  background-image: url("@/assets/background-light.jpg");
}

@media (max-width: 1000px) {
  .lightTheme {
    background-image: url("@/assets/background-light-mobile.jpg");
  }
}

.darkTheme {
  background-image: url("@/assets/background-dark.jpg");
}

@media (max-width: 1000px) {
  .darkTheme {
    background-image: url("@/assets/background-dark-mobile.jpg");
  }
}
</style>
