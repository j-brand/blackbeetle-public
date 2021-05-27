<template>
  <video v-if="post" controls>
    <source :src="path" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script lang="ts">
import { Post } from "@/common/models/post";
import { computed, PropType } from "vue";

export default {
  name: "VideoPost",
  props: {
    post: { type: Object as PropType<Post>, required: true },
  },
  setup(props) {
    const path = computed(() => {
      const content = JSON.parse(props.post.content);
      return `${process.env.VUE_APP_PUBLIC_URL}/${content.path}/${content.filename}`;
    });

    return { path };
  },
};
</script>
