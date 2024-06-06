<script>
import store from '../data/store.js';
export default {
  props: ['post'],
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
  <div class="card-nobootstrap">
    <img :src="getImage(post.img)" alt="" />
    <div class="info">
      <div class="card-header">
        <div v-for="(badge, i) in post.badge" class="badge-nobootstrap">
          {{ badge }}
        </div>
      </div>
      <div class="card-footer">
        <div>
          <i class="fa-solid fa-user"></i>
          demo
          <i class="fa-regular fa-calendar-days"></i>
          {{ post.date }}
        </div>
        <div class="title">{{ post.title }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-nobootstrap {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.info {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.card-header {
  margin-top: 15px;
  display: flex;
  gap: 15px;
}

.badge-nobootstrap {
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 2px 15px;
  cursor: pointer;
}

.badge-nobootstrap:hover {
  color: #bf1d2e;
}

.card-footer {
  margin-bottom: 1rem;
  text-align: center;
}

img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  filter: brightness(50%);
}

.card-nobootstrap:hover img {
  filter: contrast(60%) brightness(70%);
}

.title {
  font-weight: 500;
}
</style>
