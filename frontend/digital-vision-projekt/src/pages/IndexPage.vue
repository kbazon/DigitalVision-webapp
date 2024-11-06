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
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
.title {
  margin-top: 50px; /* prostor iznad naslova popularno */
  margin-left: 60px; /* prostor s ljeva */
  font-size: 50px;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
  line-height: 1.3;
}
.highlight {
  display: block; /* "Creativity" next line */
  color: #4200ff;
}
.title2 {
  margin-top: -30px; /* prostor iznad naslova */
  margin-left: 60px;
  font-size: 19px;
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
}
.line2 {
  font-family: "Century Gothic", Arial, sans-serif;
  line-height: 1.6;
  margin-top: 10px;
  display: block;
}
</style>
