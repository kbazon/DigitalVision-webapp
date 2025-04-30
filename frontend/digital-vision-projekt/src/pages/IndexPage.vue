<template>
  <q-page>
    <div class="hero-container">
      <div class="text-content">
        <h1 class="title">
          Showcase Your <span class="highlight">Creativity</span>
        </h1>
        <h2 class="title2">Vaša online umjetnička galerija</h2>
        <p class="description">
          Otkrijte svijet digitalne umjetnosti. Istražite živahnu kolekciju
          digitalnih remek-djela, <br />od zadivljujućih ilustracija do
          impresivnih digitalnih crteža. Zaronite u carstvo<br />
          kreativnosti, gdje svaki klik otkriva nove dimenzije umjetničkog
          izražavanja.
        </p>
        <p class="line2">
          Dobrodošli u svoje utočište
          <span class="highlight1">digitalne umjetnosti</span>.
        </p>
        <q-btn label="Objavi crtež" class="explore-btn" to="/prijava" />
        <q-btn label="Registracija" class="gallery-btn" to="/reg" />
        <div class="line3">
          <p>
            <span class="highlight1">Svaki korisnik</span> ima svoj profil gdje
            može vidjeti svoje objavljene radove<br />
            i listu omiljenih crteža. Aplikacija nudi jednostavno pretraživanje
            crteža prema <br />naslovu i opisu te mogućnost dodavanja radova u
            favorite.
          </p>

          <p>
            Klikom na sliku unutar sekcije favorita otvara se prozor s upitom za
            brisanje iz <br />omiljenih crteža. Korisnici mogu dodavati
            <span class="highlight1">nove crteže</span>, odjaviti se sa svog
            profila i upravljati svojim sadržajem na jednom mjestu.
          </p>
        </div>
      </div>
      <div class="image-container">
        <img src="~assets/pic8.jpg" alt="Digital Art" class="img-fluid" />
      </div>
    </div>

    <div class="tut"><h3>Tutorials</h3></div>
    <div class="content-container">
      <q-card-section class="pic1">
        <div>
          <a
            href="https://procreate.com/beginners-series"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~assets\pro1.jpg" alt="slika3" class="slika3" elevated />
          </a>
          <h5 class="pic1title">Procreate Beginners Series</h5>
        </div>
      </q-card-section>
      <q-card-section class="pic2">
        <div>
          <a
            href="https://tips.clip-studio.com/en-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~assets\csp.png" alt="slika2" class="slika3" />
          </a>
          <h5 class="pic1title">CSP Official Tutorials</h5>
        </div>
      </q-card-section>
      <q-card-section class="pic3">
        <div>
          <a
            href="https://line-of-action.com/practice-tools/figure-drawing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~assets\loa.png" alt="slika1" class="slika3" />
          </a>
          <h5 class="pic1title">Line Of Action References</h5>
        </div>
      </q-card-section>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Razmak između teksta i slike */
  padding: 0;
}

.text-content {
  flex: 1;
  max-width: 50%; /* Tekst zauzima 50% prostora */
}

.image-container {
  flex: 1;
  text-align: right; /* Poravnanje slike na desno */
}

.img-fluid {
  max-width: 95%; /* Smanji sliku da ne bude prevelika */
  height: auto;
  border-radius: 10px; /* Zaobljeni rubovi slike */
}

.title {
  margin-top: 30px;
  margin-left: 60px;
  font-size: 40px;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
  line-height: 1.1;
}
.highlight {
  display: block;
  color: #4200ff;
  user-select: none;
}
.highlight1 {
  font-weight: bolder;
  color: #000;
}
.title2 {
  line-height: 0.2;
  margin-left: 60px;
  margin-bottom: 30px;
  font-size: 17px;
  color: #000000;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
}
.description {
  margin-left: 60px;
  font-size: 13px;
  font-family: "Century Gothic", Arial, sans-serif;
  color: #000000;
  user-select: none;
}
.line2 {
  margin-left: 60px;
  margin-bottom: 30px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-size: small;
  user-select: none;
}
.line3 {
  margin-left: 60px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-size: small;
  margin-bottom: 70px;
}
.gallery-btn {
  border-radius: 30px;
  margin-bottom: 50px;
  margin-left: 30px;
  font-size: 13px;
  padding: 7px 20px;
  background-color: #000000;
  color: aliceblue;
  font-family: "Century Gothic", Arial, sans-serif;
  text-transform: none;
  user-select: none;
}
.explore-btn {
  margin-bottom: 50px;
  font-size: 13px;
  margin-left: 60px;
  border-radius: 30px;
  padding: 7px 20px;
  background-color: #000000;
  color: aliceblue;
  font-family: "Century Gothic", Arial, sans-serif;
  text-transform: none;
  user-select: none;
}

.pic1 {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 70px;
}
.pic1title {
  text-align: left;
  color: rgb(0, 0, 0);
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 400;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 40px;
}

.slika3 {
  width: 80%;
  max-width: 500px;
  border-radius: 15px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.5);
}
.pic2 {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic3 {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  width: 100%;
}
h3 {
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
}
.tut {
  background-color: #000000;
  margin-top: -25px;
}
</style>
