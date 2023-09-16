<template>
  <Toast
    :style="{ minWidth: `10vw`, maxWidth: `98vw`, right: `5px` }"
    :pt="{
      buttonContainer: {
        class: `p-2 pr-3`,
      },
    }"
  />
  <form
    action=""
    method="post"
    class="dialog"
    :class="[
      { lightThemeDialog: !$store.state.theme.dark },
      { darkThemeDialog: $store.state.theme.dark },
    ]"
    v-on="$attrs"
  >
    <ThemeButton class="themeButton focus: outline-green-950" />

    <div class="placeForm">
      <span class="p-input-icon-right">
        <i class="pi pi-user" />
        <InputText
          aria-describedby="loginInput"
          v-model="login"
          placeholder="Логин"
          autofocus
          :pt="{
            root: {
              class: `w-full text-center border-[2px] focus:outline`,
            },
          }"
        />
      </span>

      <Password
        v-model="password"
        placeholder="Пароль"
        promptLabel="Придумайте пароль"
        weakLabel="Простой"
        mediumLabel="средний"
        strongLabel="Хороший"
        :pt="{
          input: {
            class: `w-full text-center border-[2px]`,
          },
        }"
        toggleMask
      >
        <template #footer>
          <div class="border-t-[1px] border-solid border-gray-700 mt-5 pt-5">
            <strong>Правила ввода:</strong>

            <ul class="rulesList [&_li]:font-bold">
              <li>не больше 20 символов</li>
              <li>не должен быть пустой</li>
            </ul>
          </div>
        </template>
      </Password>

      <Button
        @click.prevent="showToastMessage"
        icon="pi pi-send"
        iconPos="right"
        label="Отправить"
        :pt="{
          root: { class: 'focus:outline-none' },
        }"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import useValidationPost from "@/hooks/validationForms";

export default defineComponent({
  data() {
    return {
      login: null,
      password: null,
    };
  },

  methods: {
    ...mapMutations({
      changeTheme: `theme/changeTheme`,
    }),

    ...mapState({
      IsDark: `theme/dark`,
    }),

    showToastMessage() {
      const validResult = useValidationPost(this.login, this.password);

      if (validResult.result) {
        this.$toast.add({
          severity: "success",
          summary: "Все прошло успешно",
          detail: "Данные отправлены",
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Ошибка",
          detail: validResult.error,
          life: 3000,
        });
      }
    },

    showRule(event: object) {
      this.$refs.inputRules.toggle(event);
    },

    hideRule(event: object) {
      if (this.$refs.inputRules) {
        this.$refs.inputRules.hide(event);
      } else {
        return;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.rulesList {
  display: flex;
  flex-direction: column;

  li {
    margin-top: 10px;
  }

  li:before {
    content: "● ";
    color: grey;
  }
}
.dialog {
  display: grid;
  grid-template-rows: max-content 50% 50%;
  max-width: 100%;
  min-width: 100%;
  max-height: 100%;
  min-height: 100%;
  transition: 300ms ease-in-out;
  padding: 20px;
  backdrop-filter: blur(300px);

  button {
    max-width: 100%;
    min-width: 100%;
  }

  .placeForm {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 20px;
  }

  .themeButton {
    display: flex;
    align-items: start;
  }
}

.darkThemeDialog {
  background-color: #001122be;
  border-left: 1px rgba(255, 255, 255, 0.08) solid;
}

.lightThemeDialog {
  background-color: #ffffff1c;
  border-left: 1px rgba(0, 0, 0, 0.26) solid;
}
</style>
