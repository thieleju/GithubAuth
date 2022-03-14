import { createRouter, createWebHistory } from "vue-router";
import { useMainStore } from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "start",
      component: () => import("./views/Start.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/cb",
      name: "cb",
      component: () => import("./views/LoginRedirect.vue"),
    },
  ],
});


router.beforeEach((to, from, next) => {
  // if meta.requiresAuth is true, check if the user is authenticated
  // only next() if the user is authenticated, otherwise redirect to start

  const authUserStore = useMainStore()

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (authUserStore.isUserAuthenticated) next()
    else next({ name: "start" })
  } else next()
})

export default router;
