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
import { User } from "@/classes/User";
import Store from "@/store/Store";

export default defineComponent({
  name: "TheDialogLoginIn",
});
</script>

<script lang="ts" setup>
const router = useRouter();
const toast = useToast();

const [password, login] = [ref(""), ref("")];
const [isValidPassword, isValidLogin] = [ref(true), ref(true)];

watch(password, (newPassword) => (password.value = newPassword));

function sendForm(
  login: typeInput,
  password: typeInput,
  toast: ToastServiceMethods
): void {
  const loopFlag = true;

  while (loopFlag) {
    try {
      isInvalidingInput(showToastMessage(login, password, toast));
      break;
    } catch (error: unknown) {
      alert(`Ошибка!: ${error}`);
      console.log(error);

      if (confirm(`Повторить попытку?`)) continue;
      else break;
    }
  }
}

const isInvalidingInput = (result: typeValidFormOject): void => {
  if (result.result) postRegistrationTasks();
  else {
    result.error.at === "password"
      ? (isValidPassword.value = false)
      : (isValidLogin.value = false);
  }

  setTimeout(() => {
    isValidPassword.value = true;
    isValidLogin.value = true;
  }, 2000);
};

function postRegistrationTasks() {
  //fetch
  Store.commit(`setMainUser`, new User(login.value));

  password.value = null;
  login.value = null;

  setTimeout(() => router.push(`/home`), 900);
  Store.commit(`isAuthorizedChange`);
}
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
