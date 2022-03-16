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

onMounted(() => {
  if (mainStore.isUserAuthenticated) {
    router.push({ name: "home" });
  }
});

function loginGithub() {
  window.location.href = mainStore.getBaseUrl + "/auth/login";
}
</script>

}

<style></style>
