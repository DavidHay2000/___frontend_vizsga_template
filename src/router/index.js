import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/adatok",
      name: "Details",
      component: DetailsView,
    },
    {
      path: "/registration",
      name: "RegistrationView",
      component: RegistrationView,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
  ],
});

export default router;
