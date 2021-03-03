<template>
  <footer>
    <div class="bg-bb-charcole opacity-75 w-full py-2"></div>
    <div class="bg-bb-charcole w-full text-bb-lighter">
      <div class="container flex justify-between flex-col py-3 mx-auto">
        <div class="flex flex-row mb-3">
<!--           <router-link to="/privacy-policy" class="ml-4">Datemschutzerklärung</router-link>
          <router-link to="/imprint" class="ml-4">Impressum</router-link> -->
        </div>

        <div class="flex flex-row justify-between">
          <div class="flex flex-col md:flex-row">
            <span class="ml-4 font-sans-secondary">© 2020 BLACKBEETLE</span>
            <span class="ml-4"
              >Created and developed by
              <span class="text-bb-red">Johannes Brand</span>
            </span>
          </div>
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
