<template>
  <img v-if="storySlug == 'the-journey'" class="h-32 md:h-48 w-auto object-contain transform -rotate-10 mt-10" src="@/assets/img/flower_export_800.png" />
</template>

<script lang="ts">
export default {
  name: "StoryImage",
  props: {
    storySlug: { type: String },
  },
};
</script>
