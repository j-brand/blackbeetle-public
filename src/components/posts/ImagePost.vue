<template>
  <div class="swiper-container w-full h-auto">
    <div class="swiper-wrapper">
      <div class="swiper-slide w-full" v-for="(image, index) in post.images" :key="index"><img v-lazy="getImgObj(image, '_aswipe')" loading="lazy" /></div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script lang="ts">
import { Post } from "@/common/models/post";
import { onMounted, PropType } from "vue";

import helpers from "@/common/helpers";
import Swiper from "swiper/bundle";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

export default {
  name: "ImagePost",
  props: {
    post: { type: Object as PropType<Post>, required: true },
  },
  setup() {
    const { getImgObj } = helpers();
    function initSwiper() {
      const swiper = new Swiper(".swiper-container", {
        loop: true,
        observer: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
    onMounted(initSwiper);
    return { getImgObj };
  },
};
</script>
