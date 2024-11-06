<template>
  <q-layout view="lHh Lpr lFf" class="custom-page-background">
    <q-header elevated>
      <q-toolbar class="custom-toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="black"
        />
        <q-toolbar-title class="custom-toolbar-title">
          <img
            alt="DigitalVision logo"
            src="~assets/Untitled-1.png"
            style="width: 200px; height: 109px; margin-left: -10px"
          />
        </q-toolbar-title>
        <q-icon name="palette" size="40px" class="toolbar-icon" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="custom-drawer"
    >
      <q-list class="q-mt-md">
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue"; // Ensure this is correctly imported

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Naslovnica",
    caption: "Naslovna stranica",
    icon: "home",
    link: "#/",
  },
  {
    title: "Pretraživanje",
    caption: "Pretraga digitalnih crteža",
    icon: "search",
    link: "#/pretrazivanje",
  },
  {
    title: "O Nama",
    caption: "Naša vizija i misija",
    icon: "groups",
    link: "#/onama",
  },
  {
    title: "Profil",
    caption: "Profil korisnika",
    icon: "person",
    link: "#/profilkorisnika",
  },
  {
    title: "Kontak",
    caption: "Kontakt",
    icon: "mail",
    link: "#/kontakt",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.custom-toolbar-title {
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
}
.custom-page-background {
  background-color: #ffffff;
}
.toolbar-icon {
  margin-right: 20px;
  color: #4200ff;
}
.custom-toolbar {
  height: 80px;
}
</style>
