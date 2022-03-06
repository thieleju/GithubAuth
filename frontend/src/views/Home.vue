<template>
  <div>
    <h1>Hello you are at Home!</h1>
    <v-btn @click="fetchData">Fetch Data</v-btn>
    <v-btn @click="loginGithub">Login with Github</v-btn>

    <v-card>
      <v-card-text>
        {{ data }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
// import { useRouter } from "vue-router";
import { ref } from "vue";

// const router = useRouter();

let url: string = String(import.meta.env.VITE_API_BASE_URL);

let data = ref(null);

function fetchData() {
  axios.get(url).then((res) => {
    data.value = res.data;
  });
}

function loginGithub() {
  window.location.href = url + "/auth/login";
}
</script>

}

<style></style>
