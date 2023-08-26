import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegistrationPage from "@/views/RegistrationPage.vue";
import HomePage from "@/views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },

  {
    path: "/",
    name: "registration",
    component: RegistrationPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
