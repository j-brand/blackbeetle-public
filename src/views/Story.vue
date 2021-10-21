<template>
  <transition name="fadedelay">
    <Loader v-if="loading" />
  </transition>
  <div class="max-w-screen-md mx-auto flex flex-col justify-between pb-40" v-if="story.posts">
    <div v-if="story.posts.current_page == 1" class="mb-5">
      <div class="flex flex-col justify-center min-h-screen mx-5 lg:mx-0">
        <h1 class="text-4xl text-center uppercase tracking-widest font-semibold">{{ story.title }}</h1>
        <span class="text-2xl text-center mt-10" v-html="story.description"></span>
        <StoryImage :storySlug="story.slug" />
      </div>
      <div class="flex flex-row justify-end mx-5 lg:mx-0">
        <button type="button" id="subscribe" class="bb-btn bb-btn-dark bb-btn-lg mr-3" href="#" v-on:click="showSub = !showSub">
          <span class="ico-newsletter"></span>
        </button>
        <button type="button" v-on:click="toggleOrder()" class="bb-btn bb-btn-dark bb-btn-lg" href="#" id="toggle-order">
          <span class="ico-sort"></span>
          Sortierung umkehren
        </button>
      </div>
    </div>
    <Pagination v-if="story.posts.current_page > 1" :offset="3" :pagination="story.posts" @paginate="fetchStory" class="mt-44 mb-10" />
    <template v-for="(post, index) in story.posts.data" :key="index">
      <hr class="w-1/4 my-10 mx-auto border-bb-charcole h-px" v-if="index != story.posts.length - 1 && index != 0" />
      <HtmlPost v-if="post.type == 'html'" :post="post" />
      <ImagePost v-else-if="post.type == 'image'" :post="post" class="md:rounded-md" />
      <MapPost v-else-if="post.type == 'map'" :post="post" class="rounded-md" />
      <VideoPost v-else-if="post.type == 'video'" :post="post" class="rounded-md mx-5 md:mx-0" />
    </template>
    <Pagination :offset="3" :pagination="story.posts" @paginate="fetchStory" class="mt-10" />
  </div>
  <transition class="z-10" name="fade">
    <BlurBG v-if="showSub">
      <StoryNotoficationSubscription v-click-outside="closeSub" :storyID="story.id" @close="showSub = !showSub" />
    </BlurBG>
  </transition>
</template>

<script lang="ts">
import { computed, onMounted, ref } from "vue";

import { ActionTypes } from "@/store/action.type";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import helpers from "@/common/helpers";

import HtmlPost from "@/components/posts/HtmlPost.vue";
import ImagePost from "@/components/posts/ImagePost.vue";
import MapPost from "@/components/posts/MapPost.vue";
import VideoPost from "@/components/posts/VideoPost.vue";
import Pagination from "@/components/Pagination.vue";
import Loader from "@/components/Loader.vue";

import StoryNotoficationSubscription from "@/components/StoryNotificationSubscription.vue";
import BlurBG from "@/components/BlurBG.vue";
import StoryImage from "@/components/StoryHeaderImage.vue";
export default {
  components: {
    HtmlPost,
    ImagePost,
    MapPost,
    VideoPost,
    Pagination,
    StoryNotoficationSubscription,
    BlurBG,
    StoryImage,
    Loader,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    //show newsletter subscription modal
    const showSub = ref(false);
    const { getImgObj, getCookie, setCookie } = helpers();
    const loading = ref(true);

    function getOrder(): string {
      const cookie = getCookie(route.params.slug.toString());
      return cookie ? cookie : "asc";
    }

    function fetchStory(page?: number) {
      loading.value = true;
      let query = route.params.slug;

      const order = getOrder();

      if (order) {
        query += `/${order}`;
      }

      if (page) {
        query += `?page=${page}`;
      } else if (route.query.page != null) {
        query += `?page=${route.query.page}`;
      }

      store.dispatch(ActionTypes.GET_STORY_BY_SLUG, query);
      setTimeout(() => {
        loading.value = false;
        window.scrollTo(0, 0);
      }, 200);
    }

    function toggleOrder() {
      setCookie(route.params.slug.toString(), getOrder() == "asc" ? "desc" : "asc", 365);
      fetchStory();
    }

    function closeSub() {
      showSub.value = false;
    }

    onMounted(fetchStory);

    return {
      story: computed(() => store.getters.story),
      showSub,
      getImgObj,
      fetchStory,
      toggleOrder,
      loading,
      closeSub,
    };
  },
};
</script>
<style lang="scss" scoped>
.ico-sort {
  background: url("~@/assets/img/icon_history_dark.svg") no-repeat top left;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  height: 22px;
  width: 22px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 200ms;
  vertical-align: sub;
}
#toggle-order:hover .ico-sort {
  background: url("~@/assets/img/icon_history_light.svg") no-repeat top left;
  background-size: contain;
}

.ico-newsletter {
  transition: 0.2;
  background: url("~@/assets/img/icon_mail_dark.svg") no-repeat top left;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  height: 22px;
  width: 22px;
  vertical-align: sub;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 200ms;
}
#subscribe:hover .ico-newsletter {
  background: url("~@/assets/img/icon_mail_light.svg") no-repeat top left;
  background-size: contain;
}
</style>
