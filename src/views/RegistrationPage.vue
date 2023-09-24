<template>
  <div
    class="registration"
    :class="[
      { lightTheme: !$store.state.theme.dark },
      { darkTheme: $store.state.theme.dark },
    ]"
  >
    <div class="dialogLoginIn">
      <DialogLoginIn />
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
    background-image: none;
    background-color: rgb(227, 227, 227);
  }
}

.darkTheme {
  background-image: url("@/assets/backgroundForest-dark.jpg");
}

@media (max-width: 1000px) {
  .darkTheme {
    background-image: none;
    background-color: #001122;
  }
}
</style>
