<template>
  <v-overlay :model-value="true" class="align-center justify-center">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "../plugins/axios";
import { useMainStore } from "../store/index";

const route = useRoute();
const router = useRouter();
const mainStore = useMainStore();

onMounted(async () => {
  try {
    // get jwt with query token from github
    const tokenRes = await axios.post(mainStore.getBaseUrl + "/auth/token", {
      access_token: route.query.access_token,
    });

    // do login
    await mainStore.login(tokenRes.data.tokenJwt, tokenRes.data.tokenGitHub);

    // redirect to home component
    router.push({ name: "home" });
  } catch (error) {
    console.log(error);
    router.push({ name: "start" });
  }
});
</script>

<style></style>
