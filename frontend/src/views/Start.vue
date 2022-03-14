<template>
  <div>
    <h1>Hello you are at Start!</h1>
    <h1>Please login first</h1>
    <v-btn @click="loginGithub">Login with Github</v-btn>
  </div>
</template>

<script lang="ts" setup>
let baseUrl: string = String(import.meta.env.VITE_API_BASE_URL);

function loginGithub() {
  window.location.href = baseUrl + "/auth/login";
}
</script>

}

<style></style>
