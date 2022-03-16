<template>
  <v-app app>
    <v-app-bar app color="background" elevation="0" priority="-1">
      <v-row>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-col cols="12" md="10">
          <v-container class="fill-height" fluid>
            <v-avatar class="mr-10" color="primary"></v-avatar>

            <v-btn
              v-for="(app, i) in apps"
              :key="i"
              :to="{ name: app.name }"
              color="background"
              text-color="secondary"
            >
              {{ app.title }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
          </v-container>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main class="mainBackground">
      <div class="mainView">
        <v-row class="mainRow">
          <v-col cols="12" md="2" sm="12">
            <div class="sideContainer">
              <v-list color="background">
                <!-- <v-list-subheader>Navigation</v-list-subheader> -->
                <v-list-item
                  v-for="(item, i) in apps"
                  :key="i"
                  :to="{ name: item.name }"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item
                  link
                  @click="logout"
                  v-if="mainStore.isUserAuthenticated"
                >
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
          <v-col cols="12" md="10" sm="12">
            <v-container class="container">
              <router-view></router-view>
            </v-container>
          </v-col>
        </v-row>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMainStore } from "./store/index";
import axios from "./plugins/axios";

const router = useRouter();
const route = useRoute();
const mainStore = useMainStore();

const apps = ref();

// watch if authenticated status changes, and if yes, reload apps
watch(
  () => mainStore.isUserAuthenticated,
  (auth) => {
    if (auth) apps.value = mainStore.getApps;
    else fetchPublicApps();
  }
);

onMounted(() => {
  fetchPublicApps();
});

function routeTo(name: string) {
  router.push({ name });
}

function logout() {
  mainStore.logout();
  router.push({ name: "start" });
}

// fetch public apps
function fetchPublicApps() {
  axios.get(mainStore.getBaseUrl + "/public/apps").then((res) => {
    apps.value = res.data.apps;
    mainStore.setApps(res.data.apps);
  });
}
</script>

<style lang="scss" scoped>
.mainBackground {
  display: flex;
  min-height: 100vh;
  background-color: #222831;
}
.mainView {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mainRow {
  margin-top: 20px;
  width: 70%;
  min-width: max(70%, 360px);
}
.container {
  min-height: 85vh;
  border-radius: 10px;
  background-color: #393e46;
}
.sideContainer {
  padding-top: 10px;
  min-height: 25vh;
  border-radius: 10px;
  background-color: #393e46;
}
</style>
