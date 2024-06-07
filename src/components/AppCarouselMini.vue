<script>
import store from '../data/store.js';

export default {
  data() {
    return {
      posts: Object.values(store.posts),
      viewed: [],
      index: 0,
      animationRight: false,
      animationLeft: false,
      actuallyMoving: false,
      timerSlider: null,
    };
  },
  methods: {
    getImage(filename) {
      return new URL(`../assets/${filename}`, import.meta.url).href;
    },
    scrollRight() {
      if (this.actuallyMoving == false) {
        this.actuallyMoving = true;
        clearInterval(this.timerSlider);
        this.animationRight = true;
        setTimeout(() => {
          this.index = (this.index + 1) % this.posts.length;
          this.updateViewed();
          this.animationRight = false;
          this.actuallyMoving = false;
          this.timerSlider = setInterval(this.scrollRight, 4000);
        }, 400);
      }
    },
    scrollLeft() {
      if (this.actuallyMoving == false) {
        this.actuallyMoving = true;
        clearInterval(this.timerSlider);
        this.animationLeft = true;
        setTimeout(() => {
          this.index = (this.index - 1 + this.posts.length) % this.posts.length;
          this.updateViewed();
          this.animationLeft = false;
          this.actuallyMoving = false;
          this.timerSlider = setInterval(this.scrollRight, 4000);
        }, 400);
      }
    },
    updateViewed() {
      this.viewed = [];
      for (let i = 0; i < 5; i++) {
        let idx = (this.index + i) % this.posts.length;
        this.viewed.push(this.posts[idx]);
      }
    },
  },
  mounted() {
    this.updateViewed();
    this.timerSlider = setInterval(this.scrollRight, 4000);
  },
};
</script>
<template>
  <div class="container-nobootstrap">
    <div class="title-container">
      <div class="title">FEATURED POSTS</div>
      <div :class="{ indice: falseButton }" class="btn-slider">
        <button @click="scrollLeft">
          <i class="fa-solid fa-angles-left"></i>
        </button>
        <button @click="scrollRight">
          <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
    <div class="slider">
      <div
        v-for="post in viewed"
        :class="{
          'animation-right': animationRight,
          'animation-left': animationLeft,
        }"
        class="slide"
      >
        <img :src="getImage(post.img)" alt="" class="slide-img" />
        <div class="title-card">{{ post.title }}</div>
        <div class="date">{{ post.date }}</div>
        <div class="badge-container">
          <div v-for="(badge, i) in post.badge" class="badge-nobootstrap">
            {{ badge }}
          </div>
        </div>
        <div class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          incidunt impedit, rerum obcaecati.
        </div>
        <div class="btn-container">
          <div class="btn-red">READ MORE</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-nobootstrap {
  background-color: #ffffff;
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
  width: 1400px;
  margin: 0 auto;
}

.title-container {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}

.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.slider {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  gap: 1vw;
}

.slide {
  background-color: #f3f3f3;
  text-align: center;
  border-radius: 10px;
  position: relative;
}

.title {
  margin-left: 3px;
  font-size: 35px;
  font-weight: 600;
  color: #333333;
}

.title-card {
  font-size: 17px;
  font-weight: 500;
}

.badge-container {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: 5%;
}

.badge-nobootstrap {
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 2px 15px;
  font-weight: 500;
  cursor: pointer;
}
.title-card:hover,
.date:hover,
.badge-nobootstrap:hover {
  color: #bf1d2e;
  cursor: pointer;
}

.text {
  margin: 1rem;
}

.animation-right {
  transform: translateX(-24vw);
  transition: 0.4s;
}

.animation-left {
  transform: translateX(24vw);
  transition: 0.4s;
}

.btn-slider {
  top: 40%;
  margin: 0 4rem;
  display: flex;
  gap: 1rem;
}

button {
  font-size: 20px;
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #333333;
  color: #333333;
}

button:hover {
  transition: 0.5s;
  background-color: #333333;
  color: white;
}

.btn-red {
  font-weight: 500;
  color: white;
  background-color: #bf1d2e;
  padding: 0.3rem 2rem;
  border-radius: 20px;
  cursor: pointer;
}

.indice {
  z-index: 10;
}

.false {
  background-color: red;
  color: white;
}

i {
  margin-top: 3px;
}

img {
  width: 23vw;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  /* object-position: center; */
}
</style>
