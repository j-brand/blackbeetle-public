<template>
  <div class="w-full h-full min-h-3/4-screen flex justify-center flex-col items-center px-10">
    <span class="max-w-lg text-xl">{{ message }}</span>
    <router-link to="/" exact class="mt-10 uppercase font-medium underline">zurück zur Startseite</router-link>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ApiService from "@/common/api.service";

export default {
  setup() {
    const route = useRoute();
    const message = ref("");

    function getToken() {
      const token = route.params.token.toString();
      return token;
    }

    async function verify() {
      const paylaod = { token: getToken() };

      await ApiService.post("verify-email", paylaod).then((response) => {
        switch (response.status) {
          case 422:
            message.value = response.data.message;
            break;
          case 200:
            message.value = `Super ${response.data.message}! Deine E-Mail-Adresse wurde verifiziert. Ab jetzt wirst du benachrichtigt, sobald es etwas Neues gibt.`;
            break;

          default:
            break;
        }
      });
    }

    onMounted(() => verify());

    return { message };
  },
};
</script>
