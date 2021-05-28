<template>
  <TheHeader></TheHeader>
  <main>
    <router-view />
    <transition name="fade">
      <TheCookieNotice v-if="cookiesAccept()" />
    </transition>
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import TheCookieNotice from "@/components/TheCookieNotice";

import helpers from "@/common/helpers";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheCookieNotice,
  },
  setup() {
    const { getCookie } = helpers();

    function cookiesAccept() {
      const c = getCookie("cAccept");
      if (c && c == "true") {
        return false;
      }
      return true;
    }
    return { cookiesAccept };

    // Set specific favicon if browser is in dark mode
    /*     function setFavicon() {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        const favicon = document.querySelector("[data-dark]");

        // No icon found
        if (!favicon) {
          return;
        }

        // Dark version available
        if (favicon.dataset.dark) {
          favicon.href = favicon.dataset.dark;
        }
      }
    }
    window.addEventListener("DOMContentLoaded", setFavicon); */
  },
};
</script>
