<template>
    <div v-if="albums.length >= 0" class="flex flex-col justify-center items-center pt-40">
      <router-link :to="{ name: 'album', params: { slug: album.slug } }" v-for="(album, index) in albums" :key="index" class="mb-6 px-5 lg:px-0">
        <ImageCardLarge :resource="album" :type="'album'" />
      </router-link>
    </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/action.type";
import helpers from "@/common/helpers";

import ImageCardLarge from "@/components/ImgageCardLarge.vue";

export default {
  components: {
    ImageCardLarge,
  },
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
