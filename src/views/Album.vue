<template>
  <div class="pt-40 pb-10">
    <div v-if="album" class="container mx-auto mb-24 px-5 md:px-0 lg:px-0 flex flex-col justify-between">
      <span class="text-lg flex justify-end mb-10 md:mb-0">
        {{ formatDate(album.start_date, true) }} -
        {{ formatDate(album.end_date, true) }}
      </span>

      <div class=" max-w-screen-lg">
        <h2 class="text-3xl mb-3">{{ album.title }}</h2>
        <p class="text-lg">{{ album.description }}</p>
      </div>
    </div>

    <div class="container mx-auto">
      <div v-if="album" id="lightgallery">
        <a v-for="(img, index) in album.images" :key="index" :href="getImgPath(img, '_large')" :data-sub-html="'#caption_' + index">
          <img :height="img.height" :width="img.width" v-lazy="getImgObj(img, '_thn')" loading="lazy" />
          <div class="hidden" :id="'caption_' + index">{{ img.description }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import { ActionTypes } from "@/store/action.type";
import { useStore } from "vuex";

import "lightgallery.js";
import "lg-fullscreen.js";
import "lg-autoplay.js";
import "lightgallery.js/src/sass/lightgallery.scss";

import helpers from "@/common/helpers";
declare const window: any;
export default {
  name: "Album",

  setup() {
    const store = useStore();
    const route = useRoute();

    const { getImgObj, getImgPath, formatDate } = helpers();

    function initGallery(): any {
      window.lightGallery(document.getElementById("lightgallery"), {
        thumbnail: true,
        download: false,
        selector: "a",
      });
    }

    function fetchAlbum() {
      store.dispatch(ActionTypes.GET_ALBUM_BY_SLUG, route.params.slug).then(
        window.setTimeout(() => {
          initGallery();
        }, 300)
      );
    }

    onMounted(() => {
      fetchAlbum();
    });

    return {
      album: computed(() => store.getters.album),
      getImgPath,
      getImgObj,
      formatDate,
    };
  },
};
</script>

<style lang="scss" scoped>
#lightgallery {
  columns: 4 200px;
  column-gap: 1rem;
  a img {
    margin-bottom: 1rem;
  }
}
</style>
