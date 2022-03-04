<template>
  <v-app>
    <v-navigation-drawer color="grey-darken-2" permanent>
      <router-link
        v-for="item in apps"
        :to="item.name"
        :key="item.name"
        class=""
      >
        <v-list-item :title="item.title"></v-list-item>
      </router-link>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="grey-darken-1" elevation="0" priority="-1">
      <div class="d-flex justify-center align-center w-100"></div
    ></v-app-bar>

    <v-main>
      <v-container>
        <v-card height="200px" class="d-flex justify-center align-center">
          <router-view></router-view>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
interface AppItem {
  title: string;
  name: string;
  icon: string;
}

const apps: AppItem[] = [
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
</script>
