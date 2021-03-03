<template>
  <div class="rounded overflow-hidden shadow-lg">
    <router-link :to="{ name: 'album', params: { slug: album.slug } }">
      <div class="flex flex-col justify-center items-center">
        <div class="w-full overflow-hidden">
          <img height="366" width="650" v-lazy="getImgObj(album.title_image, '_sthn')" loading="lazy" />
        </div>
      </div>

      <div class="px-6 py-4 bg-bb-charcole h-full">
        <div class="font-bold text-xl mb-2 text-bb-lighter">
          {{ album.title }}
        </div>
        <p class="text-bb-lighter text-base">
          {{ getExcerpt() }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { PropType, computed } from "vue";

import { Album } from "@/common/models/album";

import helpers from "@/common/helpers";

export default {
  name: "AlbumItem",

  props: {
    album: { type: Object as PropType<Album>, required: true },
  },

  setup(props) {
    const { getImgObj } = helpers();

    function getExcerpt(): string {
      let description = props.album.description;
      if (description.length >= 100) {
        description = description.substring(0, 97) + "...";
      }
      return description;
    }

    return { getExcerpt, getImgObj };
  },
};
</script>
