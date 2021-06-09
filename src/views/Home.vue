<template>
  <div class="flex justify-center items-center w-full">
    <BeetleAlice/>
  </div>
</template>

<script lang="ts">
import { onMounted, computed } from "vue";

import { ActionTypes } from "@/store/action.type";
import { useStore } from "vuex";

import BeetleAlice from "@/components/BeetleAlice.vue";

export default {
  components: {
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
