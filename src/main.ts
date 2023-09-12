import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/components/ArrayOfComponents";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import OverlayPanel from "primevue/overlaypanel";

const app = createApp(App);

components.forEach((component): void => {
  app.component(component.name, component);
});

app
  .use(PrimeVue)
  .component("Toast", Toast)
  .component("OverlayPanel", OverlayPanel)
  .use(ToastService)
  .use(store)
  .use(router)
  .mount("#app");
