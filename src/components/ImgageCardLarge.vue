<template>
  <div class="relative text-bb-lighter overflow-hidden">
    <template v-if="type == 'album'">
      <div class="absolute flex justify-between top-0 w-full p-5 text-shadow-lg z-10">
        <span>{{ formatDate(resource.start_date, true) }} - {{ formatDate(resource.end_date, true) }}</span>
        <div>
          <p class="imageCount">{{ resource.images_count }}</p>
        </div>
      </div>
    </template>
    <template v-else-if="type == 'story'">
      <div class="absolute flex justify-end top-0 w-full p-5 text-shadow-lg z-10">
        <div>
          <p class="postCount">{{ resource.posts_count }}</p>
        </div>
      </div>
    </template>
    <div class="absolute bottom-0 p-5 md:p-10 pr-48 z-10">
      <h1 class="text-2xl md:text-4xl font-bold uppercase text-shadow-lg">
        {{ resource.title }}
      </h1>
      <span class="text-shadow-lg hidden md:block">{{ getExcerpt(resource.description, 150) }}</span>
    </div>
    <img :height="500" :width="1000" v-lazy="getImgObj(resource.title_image, '_aslider')" loading="lazy" class="rounded-md" />
  </div>
</template>

<script lang="ts">
import { Post } from "@/common/models/post";
import { PropType } from "@vue/runtime-core";
import { Story } from "@/common/models/story";

import helpers from "@/common/helpers";
export default {
  name: "ImageCardLarge",
  props: {
    resource: {
      type: Object as PropType<Post | Story>,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { getExcerpt, formatDate, getImgObj } = helpers();

    return { getExcerpt, formatDate, getImgObj };
  },
};
</script>

<style lang="scss" scoped>
.imageCount::before,
.postCount::before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  margin-top: 5px;
  float: left;
}
.postCount::before {
  background: url("~@/assets/img/icon_posts.svg") no-repeat top left;
}
.imageCount::before {
  background: url("~@/assets/img/icon_images.svg") no-repeat top left;
}
</style>
