<template>
  <div>
    <h1>Hello you are at Login Redirect</h1>
    <br />
    <div v-if="route.query.access_token">
      <p>access_token: {{ route.query.access_token }}</p>
      <p>scope: {{ route.query.scope }}</p>
      <p>token_type: {{ route.query.token_type }}</p>
    </div>
    <div v-else>
      <p>error: {{ route.query.error }}</p>
      <p>error_description: {{ route.query.error_description }}</p>
      <p>error_uri: {{ route.query.error_uri }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import axios from "../plugins/axios";

const route = useRoute();

let url: string = String(import.meta.env.VITE_API_BASE_URL) + "/auth/token";

axios.post(url, { access_token: route.query.access_token }).then((res) => {
  localStorage.setItem("jwt.token", res.data.token);
});
</script>

<style></style>
