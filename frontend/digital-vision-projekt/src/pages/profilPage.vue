<template>
  <q-page>
    <div>
      <div class="login-container">
        <div class="left">
          <h1 class="welcome">Dobrodošli,</h1>
          <p class="mail">{{ email }}</p>
        </div>
        <div class="right">
          <q-btn
            icon="add"
            class="add-art-btn"
            @click="openAddArtDialog"
            label="Objavi crtež"
          />
        </div>
      </div>

      <!--  art -->

      <div>
        <h2>Vaši crteži:</h2>
      </div>

      <div class="results-container">
        <div class="nema" v-if="userArt.length === 0">
          Nema objavljenih crteža.
        </div>
        <div v-for="art in userArt" :key="art.ID_Crteza" class="art-section">
          <q-img :src="art.slika" :alt="art.Naslov_crteza" class="crtez" />
        </div>
      </div>
    </div>

    <q-btn label="Odjava" class="odj" unelevated @click="logout" />

    <!-- dodaj crtež -->
    <q-dialog v-model="addArtDialog" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Objavi crtež</div>
        </q-card-section>
        <q-card-section>
          <q-input
            v-model="newArt.title"
            label="Naslov crteža"
            outlined
            dense
          />
          <q-input
            v-model="newArt.description"
            label="Opis crteža"
            outlined
            dense
          />
          <q-input
            v-model="newArt.imageLink"
            label="Link slike"
            outlined
            dense
          />
        </q-card-section>
        <q-card-actions>
          <q-btn class="btn1-pop" label="Odustani" @click="closeAddArtDialog" />
          <q-btn class="btn2-pop" label="Spremi" @click="submitArt" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: localStorage.getItem("userEmail") || "",
      userArt: [],
      addArtDialog: false,
      newArt: {
        title: "",
        description: "",
        imageLink: "",
      },
    };
  },
  methods: {
    async fetchUserArt() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/slike-umj?email=${this.email}`
        );
        this.userArt = response.data;
      } catch (error) {
        console.error("Greška prilikom dohvaćanja crteža:", error);
      }
    },
    openAddArtDialog() {
      this.addArtDialog = true;
    },
    closeAddArtDialog() {
      this.addArtDialog = false;
      this.newArt = { title: "", description: "", imageLink: "" };
    },
    async submitArt() {
      try {
        const response = await axios.post("http://localhost:3000/api/add-art", {
          title: this.newArt.title,
          description: this.newArt.description,
          imageLink: this.newArt.imageLink,
          email: this.email,
        });

        if (response.data.success) {
          this.userArt.push(response.data.newArt);
          this.closeAddArtDialog();
        } else {
          console.error("Greška pri dodavanju crteža.");
        }
      } catch (error) {
        console.error("Greška pri slanju crteža:", error);
      }
    },
    logout() {
      localStorage.removeItem("userEmail");
      this.$router.push("/prijava");
    },
  },
  mounted() {
    this.fetchUserArt();
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: space-between;
  background-color: #000000;
}

.left {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}

.right {
  margin-right: 60px;
  margin-top: 70px;
}

.welcome {
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
}

.mail {
  color: rgb(106, 0, 255);
  font-size: 20px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-top: -40px;
  margin-bottom: 30px;
}

.add-art-btn {
  font-weight: bold;
  border-radius: 30px;
  font-family: "Century Gothic", Arial, sans-serif;
  background-color: white;
  text-transform: none;
}

h2 {
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  margin-left: 40px;
  font-size: 20px;
}

.results-container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  justify-content: flex-start;
  margin-left: 45px;
  margin-right: 40px;
}
.art-section {
  text-align: center;
  width: 190px;
}
.crtez {
  border-radius: 10px;
  width: 100%;
  height: auto;
}
.odj {
  border-radius: 30px;
  background-color: #000000;
  color: aliceblue;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 400;
  text-transform: none;
  margin-left: 40px;
  margin-bottom: 50px;
  margin-top: 70px;
}

.text-h6 {
  margin-top: 10px;
  margin-left: 5px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
}

.q-dialog .q-card {
  width: 400px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
}

.q-input {
  margin-bottom: 10px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
}
.btn1-pop {
  border-radius: 30px;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  text-transform: none;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 15px;
  padding: 2px;
}
.btn2-pop {
  border-radius: 30px;
  background-color: rgb(106, 0, 255);
  color: rgb(255, 255, 255);
  text-transform: none;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 15px;
  padding: 2px;
}

.q-card-actions {
  justify-content: flex-end;
}
.nema {
  margin-left: 10px;
  margin-bottom: 20px;
}
</style>
