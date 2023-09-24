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
    <ThemeButton class="themeButton" />

    <div class="placeForm">
      <span class="p-input-icon-right">
        <i class="pi pi-user" />
        <InputText
          class="w-full text-center border-[2px] focus:outline"
          aria-describedby="loginInput"
          v-model="login"
          placeholder="Логин"
          autofocus
          :class="{ 'p-invalid': !isValidLogin }"
        />
      </span>

      <Password
        class="[&_input]:w-full [&_input]:text-center"
        v-model="password"
        placeholder="Пароль"
        promptLabel="Придумайте пароль"
        weakLabel="Простой"
        mediumLabel="средний"
        strongLabel="Хороший"
        toggleMask
        :class="{ 'p-invalid': !isValidPassword }"
      >
        <template #footer>
          <div class="border-t-[1px] border-solid border-gray-700 mt-5 pt-5">
            <strong>Правила ввода:</strong>

            <ul class="rulesList [&_li]:font-bold justify-center">
              <li>не больше 20 символов</li>
              <li>не должен быть пустой</li>
              <li>не должен быть меньше 10 символов</li>
            </ul>
          </div>
        </template>
      </Password>

      <Button
        @click.prevent="sendForm(login, password, toast)"
        icon="pi pi-send"
        iconPos="right"
        label="Отправить"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DialogLoginIn",
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
import showToastMessage from "@/hooks/showToastMessage";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { typeLogin, typePassword } from "@/types/TypeFormsInput";
import { ToastServiceMethods } from "primevue/toastservice";
import { typeValidFormOject } from "@/types/TypeValidFormOject";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const toast = useToast();

const login = ref(``);
const isValidLogin = ref(true);

const password = ref(``);
const isValidPassword = ref(true);

function sendForm(
  login: typeLogin,
  password: typePassword,
  toast: ToastServiceMethods
): void {
  isInvalidInput(showToastMessage(login, password, toast));
}

const isInvalidInput = (result: typeValidFormOject): void => {
  result.result // eslint-disable-next-line prettier/prettier
    ? ((password.value = ``), (login.value = ``), setTimeout(() => router.push(`/home`), 1000))
    : result.error.at === "password"
    ? (isValidPassword.value = !isValidPassword.value)
    : (isValidLogin.value = !isValidLogin.value);

  setTimeout(() => {
    isValidPassword.value = true;
    isValidLogin.value = true;
  }, 2000);
};
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
  width: 100%;
  height: 110%;
  transition: 300ms ease-in-out;
  padding: 20px;
  backdrop-filter: blur(9px);

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
  background-color: rgba(0, 18, 36, 0.69);
  border-left: 1px rgba(255, 255, 255, 0.08) solid;
}

.lightThemeDialog {
  background-color: rgba(255, 255, 255, 0.69);
  border-left: 1px rgba(0, 0, 0, 0.26) solid;
}
</style>
