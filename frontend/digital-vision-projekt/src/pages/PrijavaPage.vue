<template>
  <q-page>
    <div class="prijava">
      <h1 class="login">Prijava</h1>
      <q-form @submit.prevent="handleLogin" class="q-gutter-md" custom-form>
        <q-input v-model="login.email" label="Email" outlined dense required />
        <q-input
          v-model="login.password"
          label="Lozinka"
          type="password"
          outlined
          dense
          required
        />
      </q-form>
      <div class="center-btn">
        <q-btn
          label="Prijava"
          class="pri"
          type="submit"
          unelevated
          @click="handleLogin"
        />
      </div>
      <q-banner class="q-mt-md" v-if="errorMessage" type="negative">
        {{ errorMessage }}
      </q-banner>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post("http://localhost:3000/api/login", {
          email: this.login.email,
          password: this.login.password,
        });

        if (response.data.success) {
          localStorage.setItem("userEmail", this.login.email);
          this.$router.push("/profil");
        } else {
          this.errorMessage = "Pogrešan E-mail ili lozinka.";
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  },
};
</script>

<style>
.login {
  font-size: 35px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
}
.prijava {
  margin-left: 300px;
  margin-right: 300px;
}
.pri {
  border-radius: 30px;
  background-color: #000000;
  color: aliceblue;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 600;
  text-transform: none;
}
.center-btn {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
