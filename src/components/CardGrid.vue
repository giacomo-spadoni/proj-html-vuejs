<script>
import store from '../data/store.js';
import Card from './MainCard.vue';
export default {
  components: {
    Card,
  },
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
  mounted() {},
};
</script>
<template>
  <div class="flex-container">
    <div class="col_3">
      <div class="box">
        <Card :post="store.posts.fashion" />
      </div>
      <div class="box">
        <Card :post="store.posts.travel" />
      </div>
    </div>
    <div class="col_6">
      <div class="box">
        <Card :post="store.posts.trip" />
      </div>
    </div>
    <div class="col_3">
      <div class="box">
        <Card :post="store.posts.music" />
      </div>
      <div class="box">
        <Card :post="store.posts.visit" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.col_6 {
  width: calc(100% / 12 * 6);
}

.col_3 {
  width: calc(100% / 12 * 3);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.flex-container {
  margin-top: 3rem;
  display: flex;
  gap: 10px;
  width: 100%;
}

.box {
  width: 100%;
  overflow: hidden;
  border-radius: 7px;
  height: 100%;
  color: rgba(255, 255, 255, 0.87);
}

img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>
