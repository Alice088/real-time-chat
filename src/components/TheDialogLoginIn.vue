<template>
  <Toast
    :style="{ minWidth: `10vw`, maxWidth: `98vw`, right: `5px` }"
    :pt="{
      buttonContainer: {
        class: `p-2 pr-3`,
      },
    }"
  />

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

      <TheButton @click.prevent="sendForm(login, password, toast)" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheDialogLoginIn",
});
</script>

<script lang="ts" setup>
import showToastMessage from "@/hooks/showToastMessage";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { typeInput } from "@/types/TypeFormsInput";
import { ToastServiceMethods } from "primevue/toastservice";
import { typeValidFormOject } from "@/types/TypeValidFormOject";
import { useRouter } from "vue-router";

const router = useRouter();
const toast = useToast();

const login = ref(``);
const isValidLogin = ref(true);

const password = ref(``);
const isValidPassword = ref(true);

function sendForm(
  login: typeInput,
  password: typeInput,
  toast: ToastServiceMethods
): void {
  isInvalidInput(showToastMessage(login, password, toast));
}

const isInvalidInput = (result: typeValidFormOject): void => {
  try {
    result.result // eslint-disable-next-line prettier/prettier
    ? ((password.value = ``), (login.value = ``), setTimeout(() => router.push(`/home`), 900))
      : result.error.at === "password"
      ? (isValidPassword.value = false)
      : (isValidLogin.value = false);
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
  transition: 300ms ease-in-out;
  padding: 20px;
  backdrop-filter: blur(109px);
  background-color: rgba(0, 18, 36, 0);
  border-left: 1px rgba(255, 255, 255, 0.081) solid;

  .placeForm {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 20px;
  }
}
</style>
