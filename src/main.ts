import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import ApiService from "./common/api.service";


ApiService.init();

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
