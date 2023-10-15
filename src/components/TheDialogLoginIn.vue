<template>
  <form action="" method="post" class="dialog" v-on="$attrs">
    <TheChangeThemeButton />

    <div class="placeForm">
      <TheLoginInput
        v-model:isValidLogin="isValidLogin"
        v-model:login="login"
      />

      <ThePasswordInput
        v-model:isValidPassword="isValidPassword"
        v-model:password="password"
      />

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
import { defineComponent, ref, watch } from "vue";
import showToastMessage from "@/hooks/showToastMessage";
import { useToast } from "primevue/usetoast";
import { typeInput } from "@/types/TypeFormsInput";
import { ToastServiceMethods } from "primevue/toastservice";
import { typeValidFormOject } from "@/types/TypeValidFormOject";
import { useRouter } from "vue-router";
import Store from "@/store/Store";

export default defineComponent({
  name: "TheDialogLoginIn",
});
</script>

<script lang="ts" setup>
const router = useRouter();
const toast = useToast();

const login = ref(``);
const isValidLogin = ref(true);

const password = ref(``);
const isValidPassword = ref(true);

watch(password, (newPassword) => (password.value = newPassword));

function sendForm(
  login: typeInput,
  password: typeInput,
  toast: ToastServiceMethods
): void {
  isInvalidInput(showToastMessage(login, password, toast));
}

const isInvalidInput = (result: typeValidFormOject): void => {
  try {
    if (result.result) {
      password.value = ``;
      login.value = ``;
      setTimeout(() => router.push(`/home`), 900);
      Store.commit(`isAuthorizedChange`);
    } else if (result.error.at === "password") {
      isValidPassword.value = false;
    } else {
      isValidLogin.value = false;
    }
  } catch (error) {
    alert(
      `непредвиденная ошибка, тип: ${error.message}, пожалуйста не паникуйте`
    );
    throw error;
  } finally {
    setTimeout(() => {
      isValidPassword.value = true;
      isValidLogin.value = true;
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  display: grid;
  grid-template-rows: max-content 55% 45%;
  width: 100%;
  height: 100svh;
  min-height: 100vh;
  transition: 150ms ease-in-out;
  padding: 10px;
  backdrop-filter: blur(35px);
  background-color: rgba(0, 0, 0, 0);
  border-left: 1px rgba(255, 255, 255, 0.081) solid;
  overflow: hidden;

  .placeForm {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 20px;
  }
}
</style>
