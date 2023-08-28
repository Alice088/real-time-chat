<template>
  <div class="dialog">
    <picture>
      <source
        media="(max-width: 510px)"
        srcset="@/assets/icons/logo-mini.svg"
      />
      <img src="@/assets/icons/GoshaStarChatIcon.png" alt="Logo" />
    </picture>
    <form action="" method="post">
      <MyInput placeholder="LOGIN" />
      <MyInput placeholder="PASSWORD" type="password" />
      <MyButton @click.prevent="">Submit</MyButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  methods: {
    ...mapMutations({
      changeTheme: `theme/changeTheme`,
    }),
    ...mapState({
      IsDark: `theme/dark`,
    }),
  },
});
</script>

<style lang="scss" scoped>
.dialog {
  display: flex;
  flex-direction: column;
  max-width: max-content;
  min-width: min-content;
  min-height: max-content;
  outline: purple solid 4px;
  border: #eb45cf 3px solid;
  box-shadow: 0 0 12px 10px rgb(79, 0, 128);
  background: #001220;
  border-radius: 20px;
  padding: 30px;
  row-gap: 5vw;
  transition: 300ms ease-in-out box-shadow;

  &:hover {
    box-shadow: 0 0 30px 12px rgb(79, 0, 128);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin-top: 5px;
      max-width: 80vw;
      min-width: 80vw;
    }

    input {
      max-width: 80vw;
      min-width: 80vw;
    }
  }

  img {
    max-width: 90%;
    min-width: 1%;
    margin: 20px;
  }
}

@media (max-width: 680px) {
  .dialog {
    min-width: 100vw;
    outline: none;
    box-shadow: none;
    border: none;
    background: none;

    &:hover {
      box-shadow: none;
    }

    form {
      width: 100%;
    }
  }
}

@media (max-width: 510px) {
  img {
    width: 70vw;
  }
}
</style>
