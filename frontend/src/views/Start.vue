<template>
  <div>
    <h1>Hello you are at Start!</h1>
    <h1>Please login first</h1>
    <v-btn @click="loginGithub">Login with Github</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useMainStore } from "../store/index";
import { useRouter } from "vue-router";

const mainStore = useMainStore();
const router = useRouter();

let baseUrl: string = String(import.meta.env.VITE_API_BASE_URL);

onMounted(() => {
  if (mainStore.isUserAuthenticated) {
    router.push({ name: "home" });
  }
});

function loginGithub() {
  window.location.href = baseUrl + "/auth/login";
}
</script>

}

<style></style>
