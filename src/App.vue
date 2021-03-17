<template>
  <TheHeader />
  <router-view />
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    // Set specific favicon if browser is in dark mode
    function setFavicon() {
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
    window.addEventListener("DOMContentLoaded", setFavicon);
  },
};
</script>
