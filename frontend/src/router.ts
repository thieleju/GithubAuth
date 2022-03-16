import { createRouter, createWebHistory } from "vue-router";
import { useMainStore } from './store/index';

const DEFAULT_TITLE: string = "Default Title"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "start",
      component: () => import("./views/Start.vue"),
      meta: {
        title: "Start"
      }
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue"),
      meta: {
        requiresAuth: true,
        title: "Home"
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/Profile.vue"),
      meta: {
        requiresAuth: true,
        title: "Profile"
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
      meta: {
        title: "About"
      }
    },
    {
      path: "/cb",
      name: "cb",
      component: () => import("./views/LoginRedirect.vue"),
      meta: {
        title: "Redirecting ..."
      }
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


router.afterEach((to, from) => {
  // set the page title
  document.title = String(to.meta.title || DEFAULT_TITLE)
})

export default router;
