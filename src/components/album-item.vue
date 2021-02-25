<template>
  <div class="rounded overflow-hidden shadow-lg">
    <router-link :to="{ name: 'album', params: { slug } }">
      <div class="flex flex-col justify-center items-center">
        <!--        <div
          class="absolute border-solid border-5 border-bb-lighter z-10 square-opacity"
        >
          <p class="p-2 text-bb-lighter font-bold text-3xl lg:text-4xl">
            {{ album.title }}
          </p>
        </div> -->
        <div class="w-full overflow-hidden">
          <img height="366" width="650" v-lazy="imgObj" />
        </div>
      </div>

      <div class="px-6 py-4 bg-bb-charcole h-full">
        <div class="font-bold text-xl mb-2 text-bb-lighter">
          {{ album.title }}
        </div>
        <p class="text-bb-lighter text-base">
          {{ album.description | getExcerpt }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    album: { type: Object }
  },
  data() {
    return {};
  },
  filters: {
    getExcerpt(description) {
      if (description.length >= 100) {
        var excerpt = description.substring(0, 97);
        return excerpt + "...";
      } else {
        return description;
      }
    }
  },
  computed: {
    slug() {
      return this.album.slug;
    },
    height() {
      return this.album.title_image.height;
    },
    width() {
      return this.album.title_image.width;
    },
    imgObj() {
      var obj = {
        src:
          "/storage/" +
          this.album.title_image.path +
          this.album.title_image.title +
          "_sthn." +
          this.album.title_image.extension,
        loading:
          "/storage/" +
          this.album.title_image.path +
          this.album.title_image.title +
          "_sthn_lazy." +
          this.album.title_image.extension
      };

      return obj;
    }
  }
};
</script>
