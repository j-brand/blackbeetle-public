<template>
  <div class="w-full h-full min-h-3/4-screen flex justify-center flex-col items-center px-10">
    <div class="max-w-lg text-xl">
      <span
        >Trag hier deine E-Mail-Adresse ein und drücke auf "abschicken". Wir senden dir eine neue Verifikation-Mail an deine angegebene Adresse, sofern wir dich in unserer Datenbank finden
        können.</span
      >
      <div class="mt-3">
        <label class="block text-sm mb-2" for="email"
          >E-Mail-Adresse
          <span class="text-bb-red pl-5" v-if="message['email']"><br />{{ message["email"][0] }}</span>
          <span class="text-green-500" v-if="message['success']"><br />{{ message["success"] }}</span>
        </label>
        <input class="w-full bb-input-dark" type="email" v-model="email" name="email" id="email" required />
      </div>
      <BaseLoadingButton class="bb-btn bb-btn-dark mt-4" :loading="isLoading" @click.prevent="send()">abschicken</BaseLoadingButton>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import ApiService from "@/common/api.service";
import BaseLoadingButton from "@/components/BaseLoadingButton.vue";
import { useToast } from "vue-toastification";

export default {
  components: {
    BaseLoadingButton,
  },
  setup() {
    const message = ref({});
    const email = ref([]);
    const isLoading = ref(false);
    const toast = useToast();

    async function send() {
      isLoading.value = true;
      /* eslint-disable camelcase */
      /* eslint-disable @typescript-eslint/camelcase */
      const paylaod = { email: email.value };
      await ApiService.post("resend-verification", paylaod).then((response) => {
        if (response.status == 200) {
          toast.success("Wir haben dir eine E-Mail geschickt. Bitte schau in deinem Posteingang nach.");

          email.value = [];
        } else {          
          toast.error(response.data.errors.email[0]);
        }
        isLoading.value = false;
      });
    }

    return { message, email, send, isLoading };
  },
};
</script>
