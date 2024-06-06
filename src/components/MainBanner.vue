<script>
import store from '../data/store.js';
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    getImage(nomefile) {
      return new URL(`../assets/${nomefile}`, import.meta.url);
    },
  },
};
</script>
<template>
  <section class="banner">
    <div class="img-container">
      <img :src="getImage(store.banners.pageBanner)" alt="" />
    </div>
  </section>
</template>
<style scoped>
.banner {
  background-color: #f3f3f3;
  width: 100%;
}

.img-container {
  width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 0;
}

img {
  width: 100%;
  border-radius: 7px;
}
</style>
