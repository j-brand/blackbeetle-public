<template>
  <footer>
    <div class="bg-bb-charcole opacity-75 w-full py-2"></div>
    <div class="bg-bb-charcole w-full text-bb-lighter py-1">
      <div class="container flex items-center justify-between flex-col md:flex-row py-3 px-5 mx-auto">


        <div class="flex flex-row justify-between">
          <div class="flex flex-col md:flex-row items-center py-1">
            <span class="text-base font-sans-secondary h-7 leading-7">© 2021 BLACKBEETLE</span>
            <span class="md:ml-4 h-7 leading-7"
              >Made with 	&#128150; and interest by
              <span class="text-bb-red h-7 leading-7">Johannes Brand</span>
            </span>
          </div>
        </div>

        <div class="flex flex-row items-center mt-2 md:m-0">
          <router-link to="/privacy-policy" class="md:ml-4">Datenschutzerklärung</router-link>
          <router-link to="/imprint" class="ml-4">Impressum</router-link>
        </div>

      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "TheFooter",
};
</script>
