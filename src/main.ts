import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import Toast from "vue-toastification";
import ApiService from "./common/api.service";
import VueLoadNext from "vue-lazyload-next";

import "@/assets/scss/app.scss";

import { clickOutside } from "./directives/clickOutside";
import BaseCheckbox from "@/components/BaseCheckbox.vue";




const options = {
    containerClassName:"bb-toast",
    position: "bottom-right",
};

ApiService.init();

const app = createApp(App);

app.directive("clickOutside", clickOutside);

app.component("BaseCheckbox", BaseCheckbox);

app.use(VueLoadNext);
app.use(Toast, options);
app.use(store);
app.use(router);
app.mount("#app");
