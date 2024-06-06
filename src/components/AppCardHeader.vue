<script>
import store from '../data/store.js';

export default {
    data() {
        return {
            store,
            selectedPosts: [store.posts.visit, store.posts.trip, store.posts.music, store.posts.fashion]
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
    <div class="cards-container">
        <div v-for="(post, index) in selectedPosts" :key="index" class="card">
            <img :src="getImage(post.img)" />
            <div class="card-content">
                <h3>{{ post.title }}</h3>
            </div>
        </div>
    </div>


</template>

<style scoped>
.cards-container {
    display: flex;
    gap: 1rem;
    justify-content: space-around;


}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

}

.card img {
    width: 100%;
    height: auto;
}

.card-content {
    padding: 16px;
}

.card-content h3 {
    margin: 0 0 8px;
    font-size: 1.2em;
}
</style>