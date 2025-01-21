<template>
  <q-page>
    <h1 class="title">
      Showcase Your <span class="highlight">Creativity</span>
    </h1>
    <h2 class="title2">Vaša online umjetnička galerija</h2>
    <p class="description">
      Otkrijte svijet digitalne umjetnosti. Istražite živahnu kolekciju
      digitalnih remek-djela, od zadivljujućih ilustracija do impresivnih
      digitalnih crteža. Zaronite u carstvo kreativnosti, gdje svaki klik
      otkriva nove dimenzije umjetničkog izražavanja.
      <p2 class="line2">Dobrodošli u svoje utočište digitalne umjetnosti.</p2>
    </p>
    <q-btn label="Objavi crtež" class="explore-btn" to="/prijava" />
    <q-btn label="Registracija" class="gallery-btn" to="/reg" />
    <div class="image-container">
      <img src="~assets/Pic11.png" alt="Digital Art" class="img-fluid" />
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
.title {
  margin-top: 40px; /* prostor iznad naslova popularno */
  margin-left: 60px; /* prostor s ljeva */
  font-size: 50px;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
  line-height: 1.3;
}
.highlight {
  display: block;
  color: #4200ff;
  user-select: none;
}
.title2 {
  margin-top: -30px; /* prostor iznad naslova */
  margin-left: 60px;
  font-size: 19px;
  color: #000000;
  font-weight: 500;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
}
.description {
  font-size: 15px;
  font-family: "Century Gothic", Arial, sans-serif;
  color: #000000;
  line-height: 1.6;
  margin-top: 10px;
  margin-left: 60px;
  margin-right: 600px;
  user-select: none;
}
.line2 {
  font-family: "Century Gothic", Arial, sans-serif;
  line-height: 1.6;
  margin-top: 10px;
  display: block;
  user-select: none;
}
.gallery-btn {
  border-radius: 30px;
  padding: 7px 20px;
  margin-left: 30px;
  margin-top: 20px;
  background-color: #000000;
  color: aliceblue;
  font-family: "Century Gothic", Arial, sans-serif;
  text-transform: none;
  user-select: none;
}
.explore-btn {
  border-radius: 30px;
  padding: 7px 20px;
  margin-left: 60px;
  margin-top: 20px;
  background-color: #000000;
  color: aliceblue;
  font-family: "Century Gothic", Arial, sans-serif;
  text-transform: none;
  user-select: none;
}
.image-container {
  position: relative;
  align-items: flex-end;
  width: 37%;
  margin-left: auto;
  margin-top: -380px;
  margin-right: 80px;
  user-select: none;
}

.img-fluid {
  width: 100%;
  height: auto;
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
  border-radius: 30px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0px;
}
</style>
