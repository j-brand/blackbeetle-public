<template>
  <div class="z-50 px-4">
    <div class="bg-bb-charcole text-bb-lighter p-10 max-w-screen-md rounded-lg mx-auto relative">
      <h3 class="font-bold text-2xl mb-4">Werde benachrichtigt</h3>
      <div class="text-xl leading-5">
        Wenn du hier deine E-Mail Adresse einträgst, schicken wir dir eine Nachricht, sobald ein neuer Beitrag erscheint.
        <router-link to="/privacy-policy" class="text-bb-red underline">HIER</router-link>
        noch etwas genauer informieren.
        <br />
        <input
          class="bg-bb-charcole border border-bb-lighter border-solid rounded-lg text-xl text-bb-lighter py-1 px-3 mt-6 w-full"
          type="email"
          v-model="email"
          name="email"
          placeholder="E-Mail-Adresse"
          required
        />
        <br />
        <small v-if="message != ''" class="text-bb-red">{{ message }}</small>
        <br />
        <button
          class="px-4 py-2 mt-5 border border-bb-lighter border-solid rounded-lg hover:border-bb-charcole hover:text-bb-charcole hover:bg-bb-lighter"
          type="submit"
          value="Submit"
          @click.prevent="subscribe()"
        >
          senden
        </button>
      </div>
      <span @click="$emit('close', true)" class="ico-close top-4 right-4 absolute"></span>
    </div>
  </div>
</template>

<script lang="ts">
import ApiService from "@/common/api.service";
import { ref } from "vue";

export default {
  name: "SubModal",
  props: {
    storyID: { type: Number },
  },
  setup(props, { emit }) {
    const message = ref("");
    const email = ref([]);
    async function subscribe() {
      /* eslint-disable camelcase */
      /* eslint-disable @typescript-eslint/camelcase */

      const paylaod = { story_id: props.storyID, email: email?.value };
      await ApiService.post("newsletter/subscribe", paylaod).then((response) => {
        if (response.data.errors) {
          message.value = response.data.errors.email[0];
        } else if (response.data.success == true) {
          emit("close", true);
        }
      });
    }
    return { message, subscribe, email };
  },
};
</script>

<style scoped>
.ico-close {
  background: url("~@/assets/img/icon_close_light.svg") no-repeat top left;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  height: 22px;
  width: 22px;
  vertical-align: sub;
}
</style>
