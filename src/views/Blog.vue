<template>
    <div v-if="storys.length >= 0" class="flex flex-col justify-center items-center pt-40">
      <router-link :to="{ name: 'story', params: { slug: story.slug } }" v-for="(story, index) in storys" :key="index" class="mb-6 px-5 lg:px-0">
        <ImageCardLarge :resource="story" :type="'story'" />
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
