<template>
  <q-layout view="lHh Lpr lFf" class="custom-page-background">
    <q-header elevated="">
      <q-toolbar class="custom-toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="white"
        />
        <q-toolbar-title class="custom-toolbar-title">
          <img
            alt="DigitalVision logo"
            src="~assets/Untitled-9.png"
            style="
              width: 200px;
              height: 109px;
              margin-left: -10px;
              margin-top: 10px;
            "
          />
        </q-toolbar-title>
        <q-icon name="palette" size="40px" class="toolbar-icon" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="custom-drawer">
      <q-list>
        <q-item to="/" clickable class="menu-item">
          <q-item-section avatar>
            <q-icon name="home" class="menu-icon" />
          </q-item-section>
          <q-item-section class="menu-title">Naslovnica</q-item-section>
        </q-item>

        <q-item to="/pretrazivanje" clickable class="menu-item">
          <q-item-section avatar>
            <q-icon name="search" class="menu-icon" />
          </q-item-section>
          <q-item-section class="menu-title">Pretraživanje</q-item-section>
        </q-item>

        <q-item to="/onama" clickable class="menu-item">
          <q-item-section avatar>
            <q-icon name="group" class="menu-icon" />
          </q-item-section>
          <q-item-section class="menu-title">O nama</q-item-section>
        </q-item>
        <q-item to="/profil" clickable class="menu-item">
          <q-item-section avatar>
            <q-icon name="person" class="menu-icon" />
          </q-item-section>
          <q-item-section class="menu-title">Profil</q-item-section>
        </q-item>

        <q-item to="/prijava" clickable class="menu-item">
          <q-item-section avatar>
            <q-icon name="login" class="menu-icon" />
          </q-item-section>
          <q-item-section class="menu-title">Prijava</q-item-section>
        </q-item>
        <q-item to="/reg" clickable class="menu-item">
          <q-item-section avatar>
            <q-icon name="input" class="menu-icon" />
          </q-item-section>
          <q-item-section class="menu-title">Registracija</q-item-section>
        </q-item>

        <q-item to="/kontakt" clickable class="menu-item">
          <q-item-section avatar>
            <q-icon name="mail" class="menu-icon" />
          </q-item-section>
          <q-item-section class="menu-title">Kontakt</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "MainLayout",
});

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
  user-select: none;
}

.toolbar-icon {
  margin-right: 20px;
  color: #4200ff;
}

.custom-toolbar {
  height: 100px;
  background-color: #000000;
  user-select: none;
}

.menu-item {
  font-family: "Century Gothic", Arial, sans-serif;
  margin-top: 30px;
  margin-bottom: -20px;
  padding: 10px 50px;
  user-select: none;
}

.menu-title {
  font-size: 17px;
  color: #cdcdcd;
}

.menu-icon {
  color: #d6d6d6 !important;
  font-size: 26px;
}
</style>
