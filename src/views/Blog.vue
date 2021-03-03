<template>
  <main class="pb-40 pt-40 container m-auto">
    <div v-if="storys.length >= 0" class="flex flex-col justify-center items-center">
      <router-link :to="{ name: 'story', params: { slug: story.slug } }" v-for="(story, index) in storys" :key="index" class="mb-6">
        <img :height="500" :width="1000" v-lazy="getImgObj(story.title_image, '_sthn')" loading="lazy" />
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
      store.dispatch(ActionTypes.GET_STORIES);
    }

    onMounted(fetchStories);

    return {
      storys: computed(() => store.getters.stories),
      getImgObj,
    };
  },
};
</script>
