import { createApp } from "vue";
import { Component } from "vue";

import App from "@/App.vue";
import router from "@/router/Router";
import store from "@/store/Store";
import components from "@/components/ArrayOfComponents";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import DialogService from "primevue/dialogservice";
import "primeicons/primeicons.css";

const app = createApp(App);

components.forEach((component: Component): void => {
  app.component(component.name, component);
});

app
  .use(PrimeVue)
  .use(ToastService)
  .use(DialogService)
  .use(store)
  .use(router)
  .mount("#app");
