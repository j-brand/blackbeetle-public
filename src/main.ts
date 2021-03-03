import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import ApiService from "./common/api.service";
import VueLoadNext from "vue-lazyload-next";

import { environment } from "@/common/envionment";
import "@/assets/style/index.css";


ApiService.init();

const app = createApp(App);


app.config.globalProperties.envionment = environment;
app.use(VueLoadNext);
app.use(store);
app.use(router);
app.mount("#app");

/* createApp(App)
  .use(store)
  .use(router)
  .mount("#app"); */
