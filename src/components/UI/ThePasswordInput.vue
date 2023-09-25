<template>
  <Password
    class="[&_input]:w-full [&_input]:text-center"
    v-model.trim="password"
    placeholder="Пароль"
    promptLabel="Придумайте пароль"
    weakLabel="Простой"
    mediumLabel="средний"
    strongLabel="Хороший"
    toggleMask
    :class="{ 'p-invalid': !props.isValidPassword }"
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThePasswordInput",
});
</script>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps<{
  isValidPassword?: boolean;
  password?: string;
}>();

const emits = defineEmits<{
  (e: "changePassword", password: string): void;
  (e: "changeIsValidPassword", isValidPassword: boolean): void;
}>();

const password = ref(props.password);
const isValidPassword = ref(props.isValidPassword);

watch(password, (newCount) => {
  emits("changePassword", newCount);
});

watch(isValidPassword, (newCount) => {
  emits("changeIsValidPassword", newCount);
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
</style>
