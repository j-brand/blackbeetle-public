<template>

</template>

<script lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/action.type";

export default {

  setup() {
    const store = useStore();


    function fetchStories() {
      store.dispatch(ActionTypes.GET_STORIES);
    }

    onMounted(fetchStories);

    return {
    };
  },
};
</script>
