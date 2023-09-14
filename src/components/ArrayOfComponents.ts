import { Component } from "vue";
import Myinput from "@/components/UI/Myinput.vue";
import MyButton from "@/components/UI/MyMegaButton.vue";
import ChangeThemeButton from "@/components/UI/ChangeThemeButton.vue";
import LoadingScreenVue from "./LoadingScreen.vue";
import Toast from "primevue/toast";
import OverlayPanel from "primevue/overlaypanel";
import ProgressSpinner from "primevue/progressspinner";
import Password from "primevue/password";

const components: Component[] = [
  Myinput,
  MyButton,
  ChangeThemeButton,
  LoadingScreenVue,
  Toast,
  OverlayPanel,
  ProgressSpinner,
  Password,
];

export default components;
