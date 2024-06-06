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
      falseButton: !false,
      timerSlider: null,
    };
  },
  methods: {
    getImage(filename) {
      return new URL(`../assets/${filename}`, import.meta.url).href;
    },
    scrollRight() {
      clearInterval(this.timerSlider);
      this.falseButton = !true;
      this.animationRight = true;
      setTimeout(() => {
        this.index = (this.index + 1) % this.posts.length;
        this.updateViewed();
        this.animationRight = false;
        this.falseButton = !false;
        this.timerSlider = setInterval(this.scrollRight, 4000);
      }, 1000);
    },
    scrollLeft() {
      clearInterval(this.timerSlider);
      this.falseButton = !true;
      this.animationLeft = true;
      setTimeout(() => {
        this.index = (this.index - 1 + this.posts.length) % this.posts.length;
        this.updateViewed();
        this.animationLeft = false;
        this.falseButton = !false;
        this.timerSlider = setInterval(this.scrollRight, 4000);
      }, 1000);
    },
    updateViewed() {
      this.viewed = [];
      for (let i = 0; i < 6; i++) {
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
        <div class="title">{{ post.title }}</div>
        <div class="date">{{ post.date }}</div>
        <div class="badge-container">
          <div v-for="(badge, i) in post.badge" class="badge-nobootstrap">
            {{ badge }}
          </div>
        </div>
      </div>
    </div>
    <div class="frame-left"></div>
    <div class="frame-right"></div>
    <div :class="{ indice: falseButton }" class="btn-slider">
      <button @click="scrollLeft">
        <i class="fa-solid fa-angles-left"></i>
      </button>
      <button @click="scrollRight">
        <i class="fa-solid fa-angles-right"></i>
      </button>
    </div>
    <div class="btn-slider">
      <button class="false">
        <i class="fa-solid fa-angles-left"></i>
      </button>
      <button class="false">
        <i class="fa-solid fa-angles-right"></i>
      </button>
    </div>
  </div>
</template>
<style scoped>
.container-nobootstrap {
  background-color: #f3f3f3;
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
  /* display: flex;
  align-items: center; */
}

.frame-left {
  position: absolute;
  width: 1.1vw;
  height: 100%;
  background-color: #f3f3f3;
  left: 0;
  top: 0;
}

.frame-right {
  position: absolute;
  width: 1.1vw;
  height: 100%;
  background-color: #f3f3f3;
  right: 0;
  top: 0;
}

.slider {
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  gap: 1vw;
}

.slide {
  background-color: #ffffff;
  text-align: center;
  border-radius: 6px;
  position: relative;
}

.title {
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
.title:hover,
.date:hover,
.badge-nobootstrap:hover {
  color: #bf1d2e;
  cursor: pointer;
}

.animation-right {
  transform: translateX(-24vw);
  transition: 1s;
}

.animation-left {
  transform: translateX(24vw);
  transition: 1s;
}

.btn-slider {
  position: absolute;
  top: 40%;
  margin: 0 4rem;
  width: 93%;
  display: flex;
  justify-content: space-between;
}

button {
  font-size: 20px;
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid red;
  color: red;
}

button:hover {
  transition: 0.5s;
  background-color: red;
  color: white;
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
  border-radius: 6px 6px 0 0;
  /* object-position: center; */
}
</style>
