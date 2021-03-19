<template>
  <div v-bind="$attrs" ref="mapRef"></div>
  <template v-if="Boolean(map)">
    <slot :map="map" />
  </template>
</template>

<script lang="ts">
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";

import { environment } from "@/common/environment";

import { Loader } from "@googlemaps/js-api-loader";
import { IGoogleMapsAPI, IMap } from "./gmap.types";
import { mapStyles } from "./map-conf/gMapStyle";

export default {
  name: "GoogleMap",
  props: {
    zoom: Number,
    apiKey: String,
  },
  setup(props) {
    const mapRef = ref<HTMLElement | null>(null);
    const map = ref<IMap | null>(null);
    const api = ref<IGoogleMapsAPI | null>(null);
    const loader = new Loader({
      apiKey: environment.googleApiKey,
      version: "weekly",
    });

    function initMap() {
      // eslint-disable-next-line no-undef
      const { Map } = (api.value = google.maps);
      map.value = new Map(mapRef.value as HTMLElement, {
        zoom: props.zoom,
        clickableIcons: false,
        streetViewControl: false,
        gestureHandling: "cooperative",
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
      });

      // eslint-disable-next-line no-undef
      const style = new google.maps.StyledMapType(mapStyles, { name: "Styled Map" });

      map.value.mapTypes.set("styled_map", style);
      map.value.setMapTypeId("styled_map");
    }

    function initLoader() {
      if (!window.google) {
        loader.load().then(() => initMap());
      } else {
        initMap();
      }
    }

    onMounted(initLoader);

    return { mapRef, map, api };
  },
};
</script>
