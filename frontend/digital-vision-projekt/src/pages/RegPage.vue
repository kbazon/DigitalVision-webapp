<template>
  <q-page class="reg0">
    <div>
      <h1>Registracija</h1>
      <q-form @submit="handleSignUp" class="q-gutter-md">
        <q-input v-model="firstName" label="Ime" outlined dense required />
        <q-input v-model="lastName" label="Prezime" outlined dense required />
        <q-input
          v-model="email"
          label="E-mail"
          type="email"
          outlined
          dense
          required
        />
        <q-input
          v-model="password"
          label="Lozinka"
          type="password"
          outlined
          dense
          required
        />
        <q-input
          v-model="artType"
          label="Vrsta umjetnosti (opcionalno)"
          outlined
          dense
        />
        <q-btn class="reg" label="Registriraj se" type="submit" unelevated />
      </q-form>
      <q-banner class="q-mt-md" v-if="errorMessage" type="negative">
        {{ errorMessage }}
      </q-banner>
      <q-banner class="q-mt-md" v-if="successMessage" type="positive">
        {{ successMessage }}
      </q-banner>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      artType: "", // opcionalno polje
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    async handleSignUp() {
      try {
        const response = await axios.post("http://localhost:3000/api/reg", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          artType: this.artType, // šaljem opcionalni unos vrste umjetnosti
        });
        if (response.data.success) {
          this.successMessage = "Registracija uspješna!";
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.password = "";
          this.artType = ""; // resetiram opcionalni unos
        } else {
          this.errorMessage = response.data.message || "Došlo je do greške.";
        }
      } catch (error) {
        this.errorMessage = "Došlo je do greške prilikom registracije.";
        console.error("Registration error:", error);
      }
    },
  },
};
</script>

<style>
.reg0 {
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 300px;
}
h1 {
  font-size: 35px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-top: 0px;
}

.reg {
  border-radius: 30px;
  background-color: #4200ff;
  color: aliceblue;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 600;
  text-transform: none;
  margin-top: 30px;
}
.q-gutter-md {
  font-family: "Century Gothic", Arial, sans-serif;
}
.q-mt-md {
  margin-left: -10px;
}
</style>
