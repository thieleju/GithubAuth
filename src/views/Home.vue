<template>
  <div>
    <h1>Hello you are at Home</h1>
    <v-btn @click="fetchData">Fetch Data</v-btn>

    <v-card>
      <v-card-text>
        {{ data }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

import { ref } from "vue";

let data = ref(null);

function fetchData() {
  axios.get("http://localhost:3333").then((res) => {
    data.value = res.data;
  });
}
</script>

}

<style></style>
