<template>
  <q-page padding>
    <!-- section 1 -->
    <div class="section1-container">
      <div class="text-container">
        <h1>Što je DigitalVision?</h1>
        <p class="desc1">
          DigitalVision je platforma za sve ljubitelje digitalne umjetnosti.
          Omogućuje ti da istražiš, podijeliš i organiziraš nevjerojatne
          digitalne radove te se povežeš s umjetnicima i kreativcima iz cijelog
          svijeta. Bilo da si umjetnik ili obožavatelj, DigitalVision pruža
          prostor gdje kreativnost cvjeta, a umjetnost postaje dostupna svima.
        </p>
      </div>
      <div class="image-container">
        <img src="~assets/pic15.png" alt="" class="pic15" />
      </div>
    </div>

    <!-- section 2 -->
    <div class="section2-container">
      <div class="image-container">
        <img src="~assets/pic1.png" alt="" class="pic1" />
      </div>
      <div class="text-container">
        <h2>Pregledavanje feed-a</h2>
        <p class="desc2">
          Personalizirani feed donosi sadržaj koji voliš, od novih crteža do
          popularnih radova umjetnika koje pratiš. Ovdje možeš svakodnevno
          otkrivati nove inspiracije i uživati u umjetnosti prilagođenoj tvojim
          interesima.
        </p>
      </div>
    </div>
    <div class="section3-container">
      <div class="text-container">
        <h3>Otkrivaj ideje</h3>
        <p class="desc3">
          Započni svoje kreativno putovanje istražujući nove ideje i stilove.
          DigitalVision ti omogućuje da pregledaš radove umjetnika diljem
          svijeta, pronađeš inspiraciju za vlastite projekte i naučiš nešto novo
          iz svijeta digitalne umjetnosti.
        </p>
      </div>
      <div class="image-container">
        <img src="~assets/p8.png" alt="" class="pic16" />
      </div>
    </div>
    <div class="tut"><h6>Partneri</h6></div>
    <div class="content-container">
      <q-card-section class="pic12">
        <div>
          <a
            href="https://procreate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~assets\pro5.jpg" alt="slika3" class="slika3" elevated />
          </a>
          <h5 class="pic1title">Procreate</h5>
        </div>
      </q-card-section>
      <q-card-section class="pic2">
        <div>
          <a
            href="https://www.clipstudio.net/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~assets\csp1.jpg" alt="slika2" class="slika3" />
          </a>
          <h5 class="pic1title">Clip Studio Paint</h5>
        </div>
      </q-card-section>
      <q-card-section class="pic3">
        <div>
          <a
            href="https://www.adobe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~assets\adobe.jpeg" alt="slika1" class="slika3" />
          </a>
          <h5 class="pic1title">Adobe</h5>
        </div>
      </q-card-section>
    </div>
  </q-page>
</template>

<script setup></script>

<style scoped>
.section1-container {
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
}
.section2-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.section3-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 70px;
}

.text-container {
  width: 50%;
  margin-left: 40px;
}

.image-container {
  width: 40%;
  margin-right: 40px;
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}

.pic15 {
  width: 90%;
  max-width: 500px;
  justify-content: flex-end;
  margin-top: 10px;
}
h1 {
  font-size: 30px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
}
.desc1 {
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 400;
  margin-right: 50px;
  line-height: 1.6;
}

.pic1 {
  width: 90%;
  max-width: 500px;
  margin-top: -40px;
  margin-right: 30px;
}

h2 {
  font-size: 30px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 50px;
}

.desc2 {
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  margin-right: 40px;
}
h3 {
  font-size: 30px;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 10px;
}
.desc3 {
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: 400;
  margin-right: 50px;
  line-height: 1.6;
}
.pic16 {
  width: 120%;
  max-width: 500px;
  justify-content: flex-end;
  margin-right: 10px;
}

.pic12 {
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

h6 {
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
  padding: 0.5%;
}
.tut {
  background-color: #000000;
  border-radius: 30px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
