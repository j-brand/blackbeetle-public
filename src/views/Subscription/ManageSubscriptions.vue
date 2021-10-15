<template>
  <div class="w-full h-full min-h-3/4-screen flex justify-center items-center flex-col px-10">
    <div class=" max-w-md ">
      <h1>Benachrichtigungen</h1>
      <span class="my-5 block">Hier kannst du einstellen, ob und welche Benachrichtigungen du erhalten möchtest.</span>
      <div v-if="subs" class="grid grid-cols-2 gap-4">
        <template v-for="sub in subs" :key="sub">
          <div>
            <span class=" text-xl">{{ sub.title }}</span>
          </div>
          <div>
            <BaseCheckbox class="mt-1" :label="sub.title" v-model:checked="sub.is_sub" :fieldId="sub.id.toString()" />
          </div>
        </template>
      </div>
      <router-link to="/" exact class="block mt-10 uppercase font-medium underline">zurück zur Startseite</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, watch} from "vue";
import { useRoute } from "vue-router";
import ApiService from "@/common/api.service";
import { useToast } from "vue-toastification";

interface BBSub {
  title: string;
  id: number;
  is_sub: boolean;
}

export default {
  setup() {
    const route = useRoute();
    const toast = useToast();
    const subs = ref<BBSub[]>();

    function getToken() {
      const token = route.params.token.toString();
      return token;
    }
    async function updateSubscriptions(subs: BBSub[]) {
      const subscriptions: string = subs
        .map((sub) => {
          if (sub.is_sub == true) {
            return sub.id + "|";
          } else {
            return "";
          }
        })
        .join("");

      const payload = { subscriptions: subscriptions, token: getToken() };

      await ApiService.post("subscriptions", payload).then((response) => {
        switch (response.status) {
          case 200:
            toast.success(response.data.message);
            break;
          default:
            toast.error(response.data.message);
            break;
        }
      });
    }

    async function getSubscriptions() {
      await ApiService.get(`subscriptions/${getToken()}`).then((response) => {
        switch (response.status) {
          case 200:
            subs.value = response.data;
            watch(
              subs,
              (state) => {
                updateSubscriptions(state!);
              },
              { deep: true }
            );
            break;
          default:
            toast.error(response.data.message);
            break;
        }
      });
    }

    onMounted(() => getSubscriptions());

    return { subs };
  },
};
</script>
