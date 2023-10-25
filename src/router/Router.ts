import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RegistrationPage from "@/views/RegistrationPage.vue";
import HomePage from "@/views/HomePage.vue";
import store from "@/store/Store";

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

router.beforeEach((to, from, next) => {
  if (to.name === "home" && !store.state.isAuthorized) {
    next({ name: "registration" });
  } else if (to.name === "registration" && store.state.isAuthorized) {
    next({ name: "home" });
  } else {
    next();
  }
});
export default router;
