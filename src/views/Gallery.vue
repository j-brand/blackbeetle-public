<template>
  <main class="pb-40 pt-40 container m-auto">
    <div v-if="albums.length >= 0" class="flex flex-col justify-center items-center">
      <router-link :to="{ name: 'album', params: { slug: album.slug } }" v-for="(album, index) in albums" :key="index" class="mb-6">
        <img :height="500" :width="1000" v-lazy="getImgObj(album.title_image, '_aslider')" loading="lazy" />
      </router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/action.type";
import getImgObj from "@/common/helpers";

export default {
  components: {},
  setup() {
    const store = useStore();

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
