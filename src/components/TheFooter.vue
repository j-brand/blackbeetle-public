<template>
  <footer>
    <div class="bg-bb-charcole opacity-75 w-full py-2"></div>
    <div class="bg-bb-charcole w-full text-bb-lighter">
      <div class="container flex justify-between flex-col md:flex-row py-3 px-5 mx-auto">


        <div class="flex flex-row justify-between">
          <div class="flex flex-col md:flex-row">
            <span class="text-base font-sans-secondary">© 2021 BLACKBEETLE</span>
            <span class="ml-4"
              >Made with 	&#128150; and interest by
              <span class="text-bb-red">Johannes Brand</span>
            </span>
          </div>
        </div>

        <div class="flex flex-row mb-3">
          <router-link to="/privacy-policy" class="ml-4">Datemschutzerklärung</router-link>
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
