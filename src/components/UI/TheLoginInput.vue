<template>
  <span class="p-input-icon-right">
    <i class="pi pi-user" />
    <InputText
      class="w-full text-center border-[1px] focus:outline"
      aria-describedby="loginInput"
      v-model.trim="localLogin"
      placeholder="Логин"
      autofocus
      :class="{ 'p-invalid': !isValidLogin }"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheLoginInput",
});
</script>

<script lang="ts" setup>
import { defineProps, defineEmits, watch, ref } from "vue";

const props = defineProps<{
  isValidLogin?: boolean;
  login?: string;
}>();

const emits = defineEmits<{
  (e: "changeLogin", login: string): void;
  (e: "changeIsValidLogin", isValidLogin: boolean): void;
}>();

const localLogin = ref(props.login);

const isValidLoginValue = ref(props.isValidLogin);

watch(localLogin, (newValue) => {
  emits("changeLogin", newValue);
});

watch(isValidLoginValue, (newValue) => {
  emits("changeIsValidLogin", newValue);
});
</script>
