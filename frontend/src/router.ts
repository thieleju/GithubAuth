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

// this is an async function without try catch, but only autologin will fail, which is ok
router.beforeEach(async (to, from, next) => {
  const mainStore = useMainStore()
  // do auto login
  const jwtToken = localStorage.getItem("jwt.token")
  const ghToken = localStorage.getItem("gh.token")
  if (!mainStore.isAuthenticated && jwtToken && ghToken) {
    await mainStore.login(jwtToken, ghToken)
  }

  // if meta.requiresAuth is true, check if the user is authenticated
  // only next() if the user is authenticated, otherwise redirect to start
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (mainStore.isUserAuthenticated) next()
    else next({ name: "start" })
  } else next()
})


router.afterEach((to, from) => {
  // set the page title
  document.title = String(to.meta.title || DEFAULT_TITLE)
})

export default router;
