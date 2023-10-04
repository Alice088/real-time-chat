<template>
  <span class="p-input-icon-right">
    <i class="pi pi-user" />
    <InputText
      class="w-full text-center border-[2px]"
      aria-describedby="loginInput"
      v-model.trim="localLogin"
      placeholder="Логин"
      autofocus
      :class="{ 'p-invalid': !isValidLogin }"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent, defineProps, defineEmits, watch, ref } from "vue";

export default defineComponent({
  name: "TheLoginInput",
});
</script>

<script lang="ts" setup>
const props = defineProps<{
  isValidLogin?: boolean;
  login?: string;
}>();

const emits = defineEmits<{
  (e: "update:login", login: string): void;
  (e: "update:isValidLogin", isValidLogin: boolean): void;
}>();

const localLogin = ref(props.login);

const isValidLoginValue = ref(props.isValidLogin);

watch(localLogin, (newValue) => {
  emits("update:login", newValue);
});

watch(isValidLoginValue, (newValue) => {
  emits("update:isValidLogin", newValue);
});
</script>
