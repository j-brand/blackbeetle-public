<template>
  <main class="pb-40 pt-40 container m-auto">
    <div v-if="albums.length >= 0" class="flex flex-col justify-center items-center">
      <router-link :to="{ name: 'album', params: { slug: album.slug } }" v-for="(album, index) in albums" :key="index" class="mb-6 px-5 md:px-0">
        <div class="relative">
          <h1 class="text-4xl absolute text-bb-lighter font-bold z-10 uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:transform-none md:bottom-20 md:left-24 text-shadow-lg">
            {{ album.title }}
          </h1>
          <img :height="500" :width="1000" v-lazy="getImgObj(album.title_image, '_aslider')" loading="lazy" class="rounded-md" />
        </div>
      </router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/action.type";
import helpers from "@/common/helpers";

export default {
  components: {},
  setup() {
    const store = useStore();
    const { getImgObj } = helpers();

    function fetchStories() {
      store.dispatch(ActionTypes.GET_ALBUMS);
    }

    onMounted(fetchStories);

    return {
      albums: computed(() => store.getters.albums),
      getImgObj,
    };
  },
};
</script>
