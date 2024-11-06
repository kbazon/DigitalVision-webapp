<template>
  <q-page padding>
    <h1 class="title">Popularno</h1>

    <div class="image-container">
      <div v-for="(image, index) in imageList" :key="index" class="image-card">
        <img :src="image.image" :alt="image.title" class="image-element" />
        <h2 class="image-title">{{ image.title }}</h2>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});

const imageList = [
  {
    title: "Nature Digital Art",
    image:
      "https://i.pinimg.com/736x/9f/b9/1a/9fb91aac9e7c78ecc38488d13f5af71f.jpg",
  },
  {
    title: "Digital Portrait - Surrealism",
    image:
      "https://paintable.cc/wp-content/uploads/2018/04/Digital-Painting-Portrait-11-Aaron-Griffin.jpg",
  },
  {
    title: "Digital Art - Abstract Landscape",
    image:
      "https://i.pinimg.com/736x/9c/9f/ce/9c9fcef2868b6dfa10aa7873f4e9ee64.jpg",
  },
  {
    title: "Cyberpunk Cityscape",
    image:
      "https://i.pinimg.com/736x/a8/34/16/a83416a239be0cfe2b67da184f4ae908.jpg",
  },
  {
    title: "Geometric Art",
    image:
      "https://i.pinimg.com/736x/12/51/f5/1251f517835cd1cca1ecfcfa711b6413.jpg",
  },

  {
    title: "Fantasy Digital Art",
    image:
      "https://i.pinimg.com/736x/33/6c/d0/336cd0ea3092865e16fb24c19e388166.jpg",
  },
];
</script>

<style scoped>
.title {
  margin-top: 40px; /* prostor iznad naslova popularno */
  margin-left: 30px; /* prostor s ljeva */
  font-size: 30px;
  font-weight: bold;
  font-family: "Century Gothic", Arial, sans-serif;
  user-select: none;
}

.image-container {
  display: flex; /* slike u redu */
  margin-top: -8px; /* ispod 'Popular' */
  overflow-x: auto; /* horizontalni skroling */
  padding: 10px;
  padding-left: 30px;
  user-select: none;
}

.image-element {
  width: 200px;
  margin-right: 30px; /* izmedu slika */
  height: auto; /* za originalnu sliku */
  padding: 5px;
}

.image-title {
  margin-top: 10px; /* iznad naslova*/
  font-size: 15px;
  text-align: center;
  font-family: "Century Gothic", Arial, sans-serif;
  font-weight: bold;
  margin-left: -27px;
  user-select: none;
}
</style>
