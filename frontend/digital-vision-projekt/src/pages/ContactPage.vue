<template>
  <q-page class="page">
    <div class="q-pa-md">
      <h1 class="H1">Kontakt</h1>
      <p class="problem">Prijava problema ili povratne informacije</p>
    </div>
    <div class="q-pa-md">
      <q-input v-model="userEmail" label="Korisnik" class="input" />
      <div>
        <q-input
          v-model="message"
          label="Poruka"
          type="textarea"
          class="input2"
        />
      </div>
    </div>
    <div class="button">
      <q-btn label="Pošalji" @click="sendEmail" class="b2" />
    </div>
    <div>
      <p class="upute">
        Za sve dodatne informacije, preuzmite korisničke upute:
      </p>
      <a
        class="upute2"
        href="/docs/DigitalVision_Korisnicke_upute.pdf"
        target="_blank"
        >Preuzmite korisničke upute</a
      >
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const userEmail = ref("");
const message = ref("");

const sendEmail = async () => {
  try {
    await axios.post("http://localhost:3000/send-email", {
      email: userEmail.value,
      message: message.value,
    });
    alert("Poruka je poslana!");
  } catch (error) {
    console.error("Greška pri slanju poruke", error);
    alert("Nismo uspijeli poslati poruku.");
  }
};
</script>

<style>
.page {
  background-color: black;
}
.H1 {
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  font-size: 35px;
  margin-top: 0px;
  margin-bottom: 5px;
  margin-left: 10px;
  color: white;
}
.problem {
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin-left: 10px;
  color: white;
}
.q-pa-md {
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 400;
  margin-left: 20px;
  margin-right: 20px;
  padding-inline: 10px;
}
.input {
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 10px;
}
.input2 {
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  margin-top: 20px;
  padding-left: 10px;
}

.button {
  margin-top: 30px;
  margin-left: 40px;
}
.b2 {
  border-radius: 30px;
  text-transform: none;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 600;
  color: rgb(255, 255, 255);
  background-color: #4200ff;
}
.upute {
  font-family: "Century Gothic", Arial, sans-serif;
  color: #ffffff;
  margin-top: 30px;
  margin-left: 40px;
}
.upute2 {
  font-family: "Century Gothic", Arial, sans-serif;
  color: #4200ff;
  margin-top: 30px;
  margin-left: 40px;
}
</style>
