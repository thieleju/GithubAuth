<template>
  <div>
    <h1>Hello {{ userData?.name }} ({{ userData?.login }})</h1>
    <h2>{{ userData?.bio }}</h2>
    <h2>From {{ userData?.location }}</h2>
    <v-btn @click="fetchData">Fetch Data</v-btn>
    <v-btn @click="fetchUserData">Fetch User Data</v-btn>

    <v-card>
      <v-card-text>
        {{ data }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import axios from "../plugins/axios";
import { ref } from "vue";
import { useMainStore } from "../store/index";

const mainStore = useMainStore();

let baseUrl: string = String(import.meta.env.VITE_API_BASE_URL);
let data = ref();
let userData = ref(mainStore.getUser);

function fetchData() {
  axios.get(baseUrl).then((res) => {
    data.value = res.data;
  });
}
function fetchUserData() {
  data.value = mainStore.getUser;
}
</script>

<style></style>
