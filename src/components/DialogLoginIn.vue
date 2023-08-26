<template>
  <div class="dialog">
    <form action="" method="post">
      <MyInput placeholder="LOGIN" />
      <MyInput placeholder="PASSWORD" type="password" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      login: null,
    };
  },
});
</script>

<style lang="scss" scoped>
.dialog {
  max-width: 600px;
  min-width: 300px;
  max-height: 600px;
  min-height: 300px;
  background-color: rgb(53, 53, 53);
  border-radius: 20px;

  form {
    display: flex;
    flex-direction: column;
  }
}
</style>
