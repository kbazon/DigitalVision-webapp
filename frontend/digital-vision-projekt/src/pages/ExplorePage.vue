<template>
  <q-page padding>
    <!-- search -->
    <div class="search-container">
      <q-input v-model="searchQuery" label="Unesite pojam" filled clearable />
    </div>

    <div class="checkbox">
      <q-checkbox v-model="searchByTitle" label="Naslov" color="black" />

      <q-checkbox v-model="searchByDescription" label="Opis" color="black" />

      <q-btn icon="search" @click="searchDrawings" class="search-button" />
    </div>

    <!-- rezultati -->
    <div v-if="filteredDrawings.length > 0" class="results-container">
      <div
        v-for="(drawing, index) in filteredDrawings"
        :key="index"
        class="image-container"
      >
        <img :src="drawing.slika" class="image" />
      </div>
    </div>

    <div v-else-if="!loading && searchQuery.length > 0" class="no-results">
      <p>Nema rezultata za uneseni pojam pretrage.</p>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      searchQuery: "",
      searchByTitle: true,
      searchByDescription: false,
      filteredDrawings: [],
      loading: false,
      columns: [
        {
          name: "slika",
          required: true,
          label: "Crtež",
          align: "left",
          field: "slika",
        },
        {
          name: "Naslov_crteza",
          required: true,
          label: "Naslov crteža",
          align: "left",
          field: "Naslov_crteza",
        },
        {
          name: "Opis_crteza",
          required: true,
          label: "Opis crteža",
          align: "left",
          field: "Opis_crteza",
        },
      ],
    };
  },
  methods: {
    async searchDrawings() {
      if (!this.searchQuery.trim()) return;

      this.loading = true;

      try {
        const criteria = {
          query: this.searchQuery,
          byTitle: this.searchByTitle,
          byDescription: this.searchByDescription,
        };

        const response = await axios.get("http://localhost:3000/api/search", {
          params: criteria,
        });

        this.filteredDrawings = response.data;
      } catch (error) {
        console.error("Greška prilikom dohvaćanja crteža:", error);
        this.filteredDrawings = [];
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.search-container {
  font-family: "Century Gothic", Arial, sans-serif;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 160px;
  border-radius: 30px;
  user-select: none;
}
.checkbox {
  font-weight: 500;
  font-family: "Century Gothic", Arial, sans-serif;
  font-size: 13px;
  color: #000000;
  margin-top: 20px;
  margin-left: 20px;
  user-select: none;
}
.search-button {
  position: absolute;
  right: 130px;
  margin-top: -65px;
  font-weight: 700;
  font-family: "Century Gothic", Arial, sans-serif;
  color: #ffffff;
  padding: 6px;
  background-color: #4200ff;
  border-radius: 30px;
  user-select: none;
}
.no-results {
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 300;
  margin-top: 60px;
  margin-left: 30px;
  user-select: none;
}
.results-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  user-select: none;
}

.image-container {
  text-align: center;
  margin: 40px;
  margin-top: 60px;
  width: 200px;
  user-select: none;
}

.image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  user-select: none;
  border-radius: 20px;
}
.image-title {
  font-family: "Century Gothic", Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin-top: 20px;
  user-select: none;
}
</style>
