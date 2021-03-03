<script lang="ts">
import { IMap, ILatLng } from "./gmap.types";
import { PropType } from "vue";

export default {
  name: "GoogleMapMarker",
  props: {
    map: {
      type: Object as PropType<IMap>,
      required: true,
    },
    position: {
      type: Object as PropType<ILatLng>,
      required: true,
    },
    label: { type: String },
  },
  setup(props) {
    // eslint-disable-next-line no-undef
    const marker = new google.maps.Marker({
      map: props.map,
      position: props.position,
    });

    function addInfoWindow() {
      const infoWindowContent = `<div class="bg-white text-black"><span class="p-2">${props.label}</span></div>`;
      // eslint-disable-next-line no-undef
      const infowindow = new google.maps.InfoWindow({
        content: infoWindowContent,
      });
      marker.addListener("mouseover", function() {
        infowindow.open(props.map, marker);
      });
      marker.addListener("mouseout", function() {
        infowindow.close();
      });
    }
    if (props.label) {
      addInfoWindow();
    }
  },
  render: () => null,
};
</script>
