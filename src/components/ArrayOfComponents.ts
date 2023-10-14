import { Component } from "vue";
import TheChangeThemeButton from "@/components/UI/TheChangeThemeButton.vue";
import TheLoadingScreenVue from "./TheLoadingScreen.vue";
import Toast from "primevue/toast";
import ProgressSpinner from "primevue/progressspinner";
import Password from "primevue/password";
import ThePasswordInput from "@/components/UI/ThePasswordInput.vue";
import InputText from "primevue/inputtext";
import TheLoginInput from "@/components/UI/TheLoginInput.vue";
import Button from "primevue/button";
import TheButton from "@/components/UI/TheButton.vue";
import TheUserBar from "@/components/TheUserBar.vue";
import TheDialogLoginIn from "@/components/TheDialogLoginIn.vue";
import TheChatPanel from "@/components/TheChatsPanel.vue";
import TheChat from "@/components/TheChat.vue";
import TheItemOfChatsPanelList from "@/components/TheItemOfChatsPanelList.vue";

const components: Component[] = [
  Button,
  TheChangeThemeButton,
  TheLoadingScreenVue,
  Toast,
  ProgressSpinner,
  Password,
  InputText,
  TheUserBar,
  TheDialogLoginIn,
  TheChatPanel,
  TheChat,
  ThePasswordInput,
  TheLoginInput,
  TheButton,
  TheItemOfChatsPanelList,
];

export default components;
