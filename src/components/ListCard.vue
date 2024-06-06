<script>
export default {
  props: ['post'],
  inheritAttrs: false,
  methods: {
    getImage(nomefile) {
      return new URL(`../assets/${nomefile}`, import.meta.url);
    },
  },
};
</script>
<template>
  <div class="container-flex">
    <img :src="getImage(post.img)" alt="" />
    <div class="info-side">
      <div class="badge-nobootstrap">
        {{ post.badge[0] }}
      </div>
    </div>
    <div>
      <div>
        <i class="fa-solid fa-user"></i>
        demo
        <i class="fa-regular fa-calendar-days"></i>
        {{ post.date }}
      </div>
      <div class="title-side">{{ post.title }}</div>
    </div>
  </div>
</template>
<style scoped>
.container-flex {
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
  color: #333333;
  font-weight: 500;
}
.info-side {
  position: absolute;
  top: 5%;
  left: 5%;
}

.badge-nobootstrap {
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 2px 15px;
  cursor: pointer;
  font-weight: 500;
}

.badge-nobootstrap:hover {
  color: #bf1d2e;
}

.title-side:hover {
  color: #bf1d2e;
  cursor: pointer;
}

img {
  display: block;
  border-radius: 6px;
  object-fit: cover;
  filter: brightness(50%);
}

.side-card {
  display: flex;
  align-items: center;
  gap: 10px;
}

.side-card {
  cursor: pointer;
}

img {
  width: 40%;
  cursor: pointer;
}

.container-flex img:hover {
  filter: contrast(60%) brightness(70%);
}
</style>
