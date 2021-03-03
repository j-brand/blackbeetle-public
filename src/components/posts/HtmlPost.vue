<template>
  <div class="flex flex-col rounded-lg px-5 lg:p-0 my-8">
    <div class="flex flex-col md:flex-row justify-between mb-2">
      <span class="md:order-2 md:text-xl">{{ formatDate(post.date) }}</span>
      <h2 class="text-2xl font-semibold">{{ post.title }}</h2>
    </div>
    <article v-html="post.content" class="text-lg  md:text-xl html-post"></article>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Post } from "@/common/models/post";
import helpers from "@/common/helpers";
export default {
  name: "HtmlPost",
  props: {
    post: { type: Object as PropType<Post>, required: true },
  },
  setup(props) {
    const formatDate = helpers();
    return formatDate;
  },
};
</script>
