<template>
  <button @click="changeTheme">
    <img src="@/assets/icons/dark-theme.svg" alt="logo-dark" ref="themeLogo" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: `ThemeButton`,

  methods: {
    ...mapMutations({
      changeTheme: `theme/changeTheme`,
    }),
  },

  watch: {
    "$store.state.theme.dark": function () {
      if (this.$store.state.theme.dark) {
        let img = this.$refs.themeLogo as HTMLImageElement;
      }
    },
  },
});
</script>
<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
