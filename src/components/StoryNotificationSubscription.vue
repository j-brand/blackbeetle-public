<template>
  <div class="z-50 md:px-4">
    <div class="bg-bb-charcole text-bb-lighter md:h-auto p-10 max-w-lg md:rounded-lg mx-auto relative">
      <h3 class="font-medium text-2xl mb-4 uppercase tracking-wide">werde benachrichtigt</h3>
      <div class="text-xl leading-6">
        <span>
          Wenn du hier deine E-Mail Adresse einträgst, schicken wir dir eine Nachricht, sobald ein neuer Beitrag erscheint. Bevor du Benachrichtigungen bekommen kannst, musst du erst deine
          E-Mail-Adresse bestätigen. Klicke einfach auf den Link in der E-Mail, die du bekommst, sobald du dieses Formular abgeschickt hast.
        </span>
        <div class="flex flex-col w-full mt-5">
          <div>
            <label class="block text-sm mb-2" for="name"
              >Name<span class="text-bb-red pl-5" v-if="errors['name']">{{ errors["name"][0] }}</span></label
            >
            <input class="w-full bb-input-light" type="text" v-model="name" name="name" id="name" required />
          </div>
          <div class="mt-3">
            <label class="block text-sm mb-2" for="email"
              >E-Mail-Adresse<span class="text-bb-red pl-5" v-if="errors['email']">{{ errors["email"][0] }}</span></label
            >
            <input class="w-full bb-input-light" type="email" v-model="email" name="email" id="email" required />
          </div>
          <div class="mt-3">
            <BaseCheckbox fieldId="priv-opt-in" v-model:checked="checked" :message="errors['privacy']">
              Ich habe die <router-link to="/privacy-policy" class="text-bb-red underline">Datenschutzerklärung</router-link> gelesen und akzeptiere sie.
            </BaseCheckbox>
          </div>
        </div>
        <div class="min-h-4 pl-8">
          <span v-if="message != ''" v-html="message" class="text-bb-red"></span>
        </div>
        <button class="bb-btn bb-btn-lighter mt-4" type="submit" value="Submit" @click.prevent="subscribe()">
          abschicken
        </button>
      </div>
      <button @click="$emit('close')" class="ico-close top-4 right-4 absolute"></button>
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
    const errors = ref([]);
    const checked = ref(false);
    async function subscribe() {
      /* eslint-disable camelcase */
      /* eslint-disable @typescript-eslint/camelcase */      
      if (checked.value) {
        const paylaod = { option: props.storyID, email: email?.value, name: name?.value };
        await ApiService.post("newsletter", paylaod).then((response) => {
          switch (response.status) {
            case 422:
              errors.value = response.data.errors;
              break;
            case 409:
              message.value = response.data.message;
              break;
            case 200:
              emit("close", true);
              break;

            default:
              break;
          }
        });
      } else {
        errors.value["privacy"] = "Dein Einverständnis ist erforderlich.";
      }
    }
    return { message, subscribe, email, name, checked, errors };
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
