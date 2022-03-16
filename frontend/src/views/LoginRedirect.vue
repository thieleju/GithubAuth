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

    // set jwt data in store
    mainStore.setJWT(tokenRes.data.tokenJwt);
    mainStore.setGitHubToken(tokenRes.data.tokenGitHub);

    // get user info with jwt token(auth to middleware) and github token(auth to github)
    const userRes = await axios.post(mainStore.getBaseUrl + "/users/user", {
      access_token: mainStore.getGitHubToken,
    });

    // set user data in store
    mainStore.setUser(userRes.data.user);

    // redirect to home component
    router.push({ name: "home" });
  } catch (error) {
    console.log(error);
    router.push({ name: "start" });
  }
});
</script>

<style></style>
