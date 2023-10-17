<template>
  <Password
    ref="passwordInput"
    v-model.trim="password"
    placeholder="Пароль"
    promptLabel="Придумайте пароль"
    weakLabel="Простой"
    mediumLabel="средний"
    strongLabel="Хороший"
    toggleMask
    :class="{ 'p-invalid': !props.isValidPassword }"
    :pt="{
      panel: { class: 'p-3 pt-5' },
    }"
  >
    <template #footer>
      <div class="border-t-2 border-gray-500 mt-5 pt-5">
        <strong>Правила ввода:</strong>

        <ul class="rulesList [&_li]:font-bold justify-center">
          <li>не больше 20 символов</li>
          <li>не должен быть пустой</li>
          <li>не должен быть меньше 10 символов</li>
        </ul>
      </div>
    </template>
  </Password>
</template>

<script lang="ts">
import { defineComponent, defineProps, defineEmits, ref, watch } from "vue";
import Store from "@/store/Store";

export default defineComponent({
  name: "ThePasswordInput",
});
</script>

<script lang="ts" setup>
const props = defineProps<{
  isValidPassword?: boolean;
  password?: string;
}>();

const emits = defineEmits<{
  (e: "update:password", password: string): void;
  (e: "update:isValidPassword", isValidPassword: boolean): void;
}>();

const password = ref(props.password);
const isValidPassword = ref(props.isValidPassword);
const passwordInput = ref(null);

watch(password, (newCount) => {
  emits("update:password", newCount);
});

watch(isValidPassword, (newCount) => {
  emits("update:isValidPassword", newCount);
});

watch(
  () => Store.state.isAuthorized,
  () => {
    password.value = null;
  }
);
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
</style>
