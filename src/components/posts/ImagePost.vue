<template>
  <div class="swiper-container w-full h-auto" ref="swiperEle">
    <div class="swiper-wrapper" ref="galleryEle">
      <div class="swiper-slide w-full" v-for="(image, index) in post.images" :key="index">
        <a :href="getImgPath(image, '_large')" :data-sub-html="'#caption_' + image.id">
          <img v-lazy="getImgObj(image, '_aswipe')" loading="lazy" />
          <div class="hidden" :id="'caption_' + image.id">{{ image.description }}</div>
        </a>
      </div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script lang="ts">
import { Post } from "@/common/models/post";
import { ref, onMounted, PropType } from "vue";

import helpers from "@/common/helpers";

//Lightgallery Imports
import "lightgallery.js";
import "lg-fullscreen.js";
import "lg-autoplay.js";
import "lightgallery.js/src/sass/lightgallery.scss";

// Swiper Js Imports
import Swiper from "swiper/bundle";
import "@/assets/style/scss/swiper.scss";

declare const window: any;
export default {
  name: "ImagePost",
  props: {
    post: { type: Object as PropType<Post>, required: true },
  },
  setup() {
    const galleryEle = ref<HTMLElement | null>(null);
    const swiperEle = ref<HTMLElement | any>(null);
    const swiperRef = ref();
    const { getImgObj, getImgPath } = helpers();

    function initGallery() {
      window.lightGallery(galleryEle.value, {
        download: false,
        selector: ".swiper-slide a",
      });

      galleryEle.value?.addEventListener("onAfterSlide", function(event: any) {
        swiperRef.value.slideTo(event.detail.index);
      });
    }

    function initSwiper() {
      swiperRef.value = new Swiper(swiperEle.value, {
        autoHeight: true,
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

    onMounted(() => {
      initSwiper();
      setTimeout(function() {
        initGallery();
      }, 300);
    });

    return { getImgObj, getImgPath, galleryEle, swiperEle };
  },
};
</script>

<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  height: 100%;
  top: 1.5rem;
  width: 50px;
  &:focus {
    outline: none;
  }
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}
</style>
