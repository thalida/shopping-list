import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Signout from "@/views/SignoutView.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/signout",
      name: "Signout",
      component: Signout,
      alias: "/logout",
    },
    // {
    //   path: "/n/:notebookUid",
    //   props: true,
    //   name: "Notebook",
    //   component: () => import("@/views/NotebookView.vue"),
    // },
    // {
    //   path: "/p/:pageUid",
    //   props: true,
    //   name: "Page",
    //   component: () => import("@/views/PageView.vue"),
    // },
  ],
});

router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (!requiresAuth) {
    return true;
  }

  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;

  if (isAuthenticated) {
    return true;
  }

  return {
    name: "Login",
    query: { redirect: to.fullPath },
  };
});

export default router;
