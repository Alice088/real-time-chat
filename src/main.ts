import { createApp } from "vue";
import { Component } from "vue";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import components from "@/components/ArrayOfComponents";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/soho-dark/theme.css";
import ToastService from "primevue/toastservice";
import Divider from "primevue/divider";

const app = createApp(App);

components.forEach((component: Component): void => {
  app.component(component.name, component);
});

app
  .use(PrimeVue)
  .component("Divider", Divider)
  .use(ToastService)
  .use(store)
  .use(router)
  .mount("#app");
