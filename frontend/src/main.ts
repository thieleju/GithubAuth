import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import { createPinia } from "pinia";
import { useMainStore } from "./store";

const pinia = createPinia()
const store = useMainStore(pinia)

store.setBaseUrl(import.meta.env.VITE_API_BASE_URL)

loadFonts();

createApp(App)
  .use(pinia)
  .use(vuetify)
  .use(router)
  .mount("#app");
