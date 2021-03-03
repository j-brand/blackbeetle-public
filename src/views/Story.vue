<template>
  <main class="pb-40">
    <div class="max-w-screen-md mx-auto flex flex-col justify-between" v-if="story.posts">
      <div v-if="story.posts.current_page == 1" class="flex flex-col justify-center min-h-screen mx-5 lg:mx-0">
        <h1 class="text-4xl text-center uppercase tracking-widest font-semibold">{{ story.title }}</h1>
        <span class="text-2xl text-center mt-10" v-html="story.description"></span>
      </div>
      <Pagination v-if="story.posts.current_page > 1" :offset="3" :pagination="story.posts" @paginate="fetchStory"></Pagination>

      <template v-for="(post, index) in story.posts.data" :key="index">
        <HtmlPost v-if="post.type == 'html'" :post="post"></HtmlPost>
        <ImagePost v-if="post.type == 'image'" :post="post"></ImagePost>
        <MapPost v-if="post.type == 'map'" :post="post"></MapPost>
        <VideoPost v-if="post.type == 'video'" :post="post"></VideoPost>
        <hr class="w-1/4 my-10 mx-auto border-bb-charcole h-px" v-if="index != story.posts.length - 1 && index != 0" />
      </template>
      <!--       <div class="flex flex-row justify-end mx-5 lg:mx-0">
        <button
          type="button"
          id="subscribe"
          class="hover:bg-bb-charcole rounded-lg border border-solid border-bb-charcole pt-2 pb-1 px-4 mr-3"
          href="#"
          v-on:click="showSub = !showSub"
        >
          <span class="ico-newsletter"></span>
        </button>

        <button
          type="button"
          v-on:click="toggleOrder()"
          class="hover:bg-bb-charcole hover:text-bb-lighter rounded-lg border border-solid border-bb-charcole px-4 py-3 text-lg"
          href="#"
          id="toggle-order"
        >
          <span class="ico-sort"></span>
          Sortierung umkehren
        </button>
      </div> -->
      <Pagination :offset="3" :pagination="story.posts" @paginate="fetchStory"></Pagination>

    </div>
  </main>
</template>

<script lang="ts">
import { computed, onMounted } from "vue";

import { ActionTypes } from "@/store/action.type";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import helpers from "@/common/helpers";

import HtmlPost from "@/components/posts/HtmlPost.vue";
import ImagePost from "@/components/posts/ImagePost.vue";
import MapPost from "@/components/posts/MapPost.vue";
import VideoPost from "@/components/posts/VideoPost.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    HtmlPost,
    ImagePost,
    MapPost,
    VideoPost,
    Pagination,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const { getImgObj } = helpers();

    function fetchStory(page?: number) {
      let query = route.params.slug;

      if (page) {
        query += `?page=${page}`;
      }
      store.dispatch(ActionTypes.GET_STORY_BY_SLUG, query);
    }
    function test(test) {
      fetchStory(test);
    }
    onMounted(fetchStory);

    return {
      story: computed(() => store.getters.story),
      getImgObj,
      fetchStory,
    };
  },
};
</script>
