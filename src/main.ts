import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import ApiService from "./common/api.service";
import VueLoadNext from "vue-lazyload-next";

import "@/assets/scss/app.scss";

import { clickOutside } from "./directives/clickOutside";

ApiService.init();

const app = createApp(App);

app.directive("clickOutside", clickOutside);

app.use(VueLoadNext);
app.use(store);
app.use(router);
app.mount("#app");
