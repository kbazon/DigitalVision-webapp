<template>
  <q-page padding>
    <div class="content-container">
      <div class="image-container">
        <img src="~assets/Untitled-5.png" alt="Digital Art" class="img-fluid" />
      </div>

      <div class="text-content">
        <h1 class="title">O nama</h1>
        <p class="description">
          Dobrodošli u DigitalVision, vaš ulaz u živahni svijet digitalne
          umjetnosti. U DigitalVisionu vjerujemo u moć kreativnosti da nadahne,
          poveže i transformira svijet oko nas. Naša platforma služi kao
          dinamično središte za digitalne umjetnike, entuzijaste umjetnosti i
          kreativne umove za istraživanje, otkrivanje i slavljenje neograničenih
          mogućnosti digitalne umjetnosti.
        </p>
        <h2 class="title2">Naša misija</h2>
        <p class="description2">
          U DigitalVision, naša misija je osnažiti digitalne umjetnike i
          entuzijaste da oslobode svoju kreativnost, izraze se autentično i
          povežu se s globalnom zajednicom.
        </p>
        <p class="line2">
          Nastojimo pružiti platformu koja potiče kreativnost, suradnju i
          inovacije, dok se zalažemo za raznolikost, inkluzivnost i umjetničku
          izvrsnost.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style scoped>
.content-container {
  display: flex;
  align-items: flex-start;
}

.image-container {
  width: 40%;
  margin-right: 90px; /* prostor izmedu text i img */
  margin-top: -25px;
  margin-left: 20px;
}

.img-fluid {
  width: 100%;
  height: auto;
}

.text-content {
  width: 50%;
}

.title {
  margin-top: 10px;
  font-size: 50px;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
  line-height: 1.3;
  color: #4200ff;
}

.title2 {
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
}

.description,
.description2,
.line2 {
  font-size: 15px;
  font-family: "Century Gothic", Arial, sans-serif;
  color: #000000;
  line-height: 1.6;
  margin-top: -10px;
}
</style>
