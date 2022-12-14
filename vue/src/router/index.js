import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ViewEscape01 from "../views/ViewEscape01.vue";
import TextView from "../views/TextView.vue";
import NewAiView from "../views/NewAiView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "NewAiView",
      component: NewAiView,
    },
    {
      path: "/escape",
      name: "escape",
      component: ViewEscape01,
    },
    {
      path: "/tekst",
      name: "tekst",
      component: TextView,
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
