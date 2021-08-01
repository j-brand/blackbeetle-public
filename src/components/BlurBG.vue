<template>
  <div class="w-full h-full flex items-center justify-center fixed top-0 backdrop-filter backdrop-blur-md bg-bb-charcole md:bg-transparent">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "BlurBG",
};
</script>
