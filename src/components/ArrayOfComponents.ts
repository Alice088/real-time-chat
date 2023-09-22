import { Component } from "vue";
import ChangeThemeButton from "@/components/UI/ChangeThemeButton.vue";
import LoadingScreenVue from "./LoadingScreen.vue";
import Toast from "primevue/toast";
import ProgressSpinner from "primevue/progressspinner";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import UserBar from "@/components/UserBar.vue";

const components: Component[] = [
  Button,
  ChangeThemeButton,
  LoadingScreenVue,
  Toast,
  ProgressSpinner,
  Password,
  InputText,
  UserBar,
];

export default components;
