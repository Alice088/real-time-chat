<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input type="text" :value="login" />
</template>

<script>
export default {
  data() {
    return {
      login: null,
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  margin: 20px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.097);
  color: red;
}

input[value] {
  color: red;
}
</style>
