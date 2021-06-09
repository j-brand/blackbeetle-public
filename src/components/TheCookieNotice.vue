<template>
  <div v-show="hide" class="w-full h-4/5 fixed bottom-0 gradient z-50">
    <div class="mx-auto max-w-screen-md flex flex-col p-4 justify-end h-full pb-10 ">
      <h2 class="text-lg font-bold tracking-wide text-bb-light underline">Cookiehinweis</h2>
      <span class="text-bb-light"
        >Diese Seite verwendet Cookies, um Ihnen (dem Benutzer) ein besseres Nutzererlebnis bieten zu können, bzw. die korrekte Funktionsweise der Seite zu garantieren. Welche Informationen in diesen
        Cookies gespeichert werden und was es überhaupt mit diesen "Cookies" auf sich hat, können Sie in meiner
        <router-link to="/privacy-policy" class="underline hover:text-bb-red">Datenschutzerklärung</router-link> nachlesen.</span
      >
      <button v-on:click="accept()" class="border border-bb-light text-bb-light block transition duration-300 ease-in-out hover:bg-bb-light hover:text-bb-charcole lg:w-max py-1 px-3 mt-4">
        alles klar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import helpers from "@/common/helpers";
import { ref } from 'vue';

export default {
  name: "TheCookieNotice",
  setup() {
    const { setCookie } = helpers();
    const hide = ref(true);


    function accept() {
      setCookie("cAccept", "true", 265);
        hide.value = false
    }

    return { accept, hide };
  },
};
</script>

<style lang="scss" scoped>
.gradient {
  background: linear-gradient(hsl(0 0% 0% / 0),hsl(0 0% 0% / .4),hsl(0 0% 10% / .8), hsl(0 0% 10% / 1));
}
</style>
