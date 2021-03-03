<script lang="ts">
import { IMap } from "./gmap.types";
import { PropType } from "vue";
export default {
  name: "GoogleMapBounds",
  props: {
    map: {
      type: Object as PropType<IMap>,
      required: true,
    },
    coordinates: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    // eslint-disable-next-line no-undef
    const bounds = new google.maps.LatLngBounds();

    props.coordinates.forEach((marker: any) => {
      // eslint-disable-next-line no-undef
      bounds.extend(new google.maps.LatLng(marker.position));
    });

    props.map.setCenter(bounds.getCenter());
  },
  render: () => null,
};
</script>
