<template>
  <GoogleMap class="w-full h-112" :zoom="content.zoomlevel" v-slot="{ map }">
    <GoogleMapMarker v-for="(marker, index) in content.coordinates" :key="index" :position="marker.position" :label="marker.id" :map="map"></GoogleMapMarker>
    <GoogleMapBounds :coordinates="content.coordinates" :map="map"></GoogleMapBounds>
  </GoogleMap>
</template>

<script lang="ts">
import { computed, PropType } from "vue";

import { Post } from "@/common/models/post";

import GoogleMap from "@/components/google-map/GoogleMap.vue";
import GoogleMapMarker from "@/components/google-map/GoogleMapMarker.vue";
import GoogleMapBounds from "@/components/google-map/GoogleMapBounds.vue";

export default {
  name: "MapPost",
  components: { GoogleMap, GoogleMapMarker, GoogleMapBounds },
  props: {
    post: { type: Object as PropType<Post>, required: true },
  },
  setup(props) {
    const content = computed(() => {
      return JSON.parse(props.post.content);
    });

    return { content };
  },
};
</script>
