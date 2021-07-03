<template>
  <div class="z-50 px-4">
    <div class="bg-bb-charcole text-bb-lighter p-10 max-w-sm rounded-lg mx-auto relative">
      <h3 class="font-bold text-2xl mb-4">Werde benachrichtigt</h3>
      <div class="text-xl leading-6">
        <span>
          Wenn du hier deine E-Mail Adresse einträgst, schicken wir dir eine Nachricht, sobald ein neuer Beitrag erscheint.
          <router-link to="/privacy-policy" class="text-bb-red underline">HIER</router-link>
          noch etwas genauer informieren.
        </span>
        <div class="flex flex-col w-full mt-5">
          <div>
            <label class="block text-sm mb-2" for="name">Name</label>
            <input class="bg-bb-charcole border border-bb-lighter border-solid rounded-lg w-full text-xl py-1 px-2 outline-none" type="text" v-model="name" name="name" id="name" required />
          </div>
          <div class="mt-3">
            <label class="block text-sm mb-2" for="email">E-Mail-Adresse</label>
            <input class="w-full bg-bb-charcole border border-bb-lighter border-solid rounded-lg  text-xl p-1 px-2  outline-none" type="email" v-model="email" name="email" id="email" required />
          </div>
        </div>
        <div v-if="message != ''" class="text-bb-red text-sm my-4">{{ message }}</div>
        <button class="bb-btn bb-btn-lighter mt-8" type="submit" value="Submit" @click.prevent="subscribe()">
          GO!
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
    const name = ref([]);
    async function subscribe() {
      /* eslint-disable camelcase */
      /* eslint-disable @typescript-eslint/camelcase */

      const paylaod = { option: props.storyID, email: email?.value, name: name?.value };
      await ApiService.post("newsletter", paylaod).then((response) => {
        console.log(response);

        if (response.status === 409) {
          message.value = response.data.message;
        } else if (response.data.success == true) {
          emit("close", true);
        }
      });
    }
    return { message, subscribe, email, name };
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
