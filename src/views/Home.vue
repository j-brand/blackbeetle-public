<template>
  <main class="pb-40">
    <BeetleAlice />

    <!-- Last albums row -->
    <div class="container mx-auto" v-if="albums.length >= 0">
      <h1 class="ml-4 text-3xl font-medium">Neuste Alben</h1>
      <div class="flex items-center flex-wrap">
        <AlbumItem class="m-4 md:mb-4 md:flex-3 albumItem" v-for="(album, index) in albums" :key="index" :album="album" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { onMounted, computed } from "vue";

import { ActionTypes } from "@/store/action.type";
import { useStore } from "vuex";

import AlbumItem from "@/components/AlbumItem.vue";
import BeetleAlice from "@/components/BeetleAlice.vue";

export default {
  components: {
    AlbumItem,
    BeetleAlice,
  },
  setup() {
    const store = useStore();

    function fetchAlbums() {
      store.dispatch(ActionTypes.GET_ALBUMS);
    }

    onMounted(fetchAlbums); // on `mounted` call `getUserRepositories`

    return {
      albums: computed(() => store.getters.albums),
    };
  },
};
</script>

<style>
.albumItem p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
