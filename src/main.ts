import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/components/ArrayOfComponents";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";

const app = createApp(App);

components.forEach((component): void => {
  app.component(component.name, component);
});

app.use(PrimeVue).use(store).use(router).mount("#app");
