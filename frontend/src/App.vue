<template>
  <v-app>
    <v-navigation-drawer color="grey-darken-2" permanent>
      <router-link
        v-for="item in apps"
        :to="{ name: item.name }"
        :key="item.name"
        class=""
      >
        <v-list-item :title="item.title"></v-list-item>
      </router-link>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout" color="primary"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="grey-darken-1" elevation="0" priority="-1">
      <div class="d-flex justify-center align-center w-100"></div
    ></v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "./store/index";

const router = useRouter();
const mainStore = useMainStore();

interface AppItem {
  title: string;
  name: string;
  icon: string;
}

const apps: AppItem[] = [
  {
    title: "Start",
    name: "start",
    icon: "mdi-home",
  },
  {
    title: "Home",
    name: "home",
    icon: "mdi-home",
  },
  {
    title: "About",
    name: "about",
    icon: "mdi-information",
  },
];

function logout() {
  mainStore.logout();
  router.push({ name: "start" });
}
</script>
