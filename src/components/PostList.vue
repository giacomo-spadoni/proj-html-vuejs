<script>
import store from '../data/store.js';
import ListCard from './ListCard.vue';
export default {
  components: {
    ListCard,
  },
  data() {
    return {
      store,
      shuffledPosts: store.main.temporaryPost,
      sidePosts: 3,
    };
  },
  methods: {
    getImage(nomefile) {
      return new URL(`../assets/${nomefile}`, import.meta.url);
    },
    pushPost(category1, category2) {
      this.store.main.mainPost = Object.values(this.store.posts);
      this.shuffledPosts = [];

      for (let i = 0; i < this.store.main.mainPost.length; i++) {
        if (
          this.store.main.mainPost[i].badge.includes(category1) ||
          this.store.main.mainPost[i].badge.includes(category2)
        ) {
          this.shuffledPosts.push(this.store.main.mainPost[i]);
        }
      }
      this.shuffledPosts = this.shuffle(this.shuffledPosts);
      console.log(this.shuffledPosts);
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
  },
  mounted() {
    // this.pushPost();
  },
};
</script>

<template>
  <div class="post">
    <div class="title">LIFESTYLE & STORIES</div>
    <div class="tag-list">
      <div @click="pushPost('Stories', 'Lifestyle')" class="tag">ALL</div>
      <div @click="pushPost('Lifestyle')" class="tag">LIFESTYLE</div>
      <div @click="pushPost('Stories')" class="tag">STORIES</div>
    </div>
  </div>
  <div class="post-list">
    <div class="col_7 relative">
      <div class="main-card">
        <img :src="getImage(shuffledPosts[0].img)" alt="" />
        <div class="info">
          <div class="card-header">
            <div class="badge-nobootstrap">
              {{ shuffledPosts[0].badge[0] }}
            </div>
          </div>
          <div class="card-footer">
            <div>
              <i class="fa-solid fa-user"></i>
              demo
              <i class="fa-regular fa-calendar-days"></i>
              {{ shuffledPosts[0].date }}
            </div>
            <div class="title-main">{{ shuffledPosts[0].title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col_5">
      <ListCard class="side-card relative" :post="shuffledPosts[1]" />
      <hr />
      <ListCard class="side-card relative" :post="shuffledPosts[2]" />
      <hr />
      <ListCard class="side-card relative" :post="shuffledPosts[3]" />
    </div>
  </div>
</template>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  color: rgba(255, 255, 255, 0.87);
}

.post-list {
  display: flex;
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 5rem;
  color: rgba(255, 255, 255, 0.87);
}

.relative {
  position: relative;
}

.col_7 {
  width: calc(100% / 12 * 7);
}

.col_5 {
  width: calc(100% / 12 * 5);
}

.info {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 5%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
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

.title {
  font-size: 35px;
  font-weight: 600;
  color: #333333;
}

.title-main {
  font-size: 25px;
  font-weight: 600;
}

.tag-list {
  align-items: baseline;
  display: flex;
  gap: 20px;
  justify-content: end;
}
.tag {
  background-color: #333333;
  font-size: 20px;
  border-radius: 7px;
  padding: 3px 20px;
  cursor: pointer;
}

.tag:hover {
  background-color: #bf1d2e;
  transition: 0.5s;
}

img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 6px;
  object-fit: cover;
  filter: brightness(50%);
}

.main-card {
  cursor: pointer;
}

.main-card:hover img {
  filter: contrast(60%) brightness(70%);
}

hr {
  margin: 1rem 0;
}
</style>
