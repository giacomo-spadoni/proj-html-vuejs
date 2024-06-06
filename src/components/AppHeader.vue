<script>
import AppNavBar from "../components/AppNavBar.vue";
import store from '../data/store.js';


export default {
    components: {
        AppNavBar,
    },

    data() {

        return {
            headerKeys: Object.keys(store.header),
            currentIndex: 0,
            AppNavBar,
        };
    },
    computed: {
        currentItem() {
            return store.header[this.headerKeys[this.currentIndex]];
        }
    },
    methods: {
        prevItem() {
            this.currentIndex =
                (this.currentIndex - 1 + this.headerKeys.length) % this.headerKeys.length;
        },
        nextItem() {
            this.currentIndex = (this.currentIndex + 1) % this.headerKeys.length;
        },
        getImageUrl(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },
        startAutoCycle() {
            this.autoCycleInterval = setInterval(() => {
                this.nextItem();
            }, 3000);
        },
    },
    mounted() {
        this.startAutoCycle();
    },
};
</script>

<template>
    <div class="cnt">
        <div class="navbar">
            <div class="nav-row">

                <div class="news-updates">
                    <div class="up">NEWS UPDATES</div>

                    <div class="time" v-if="currentItem">
                        <img class="news-img" :src="getImageUrl(currentItem.img)" :alt="currentItem.title" />
                        <div>{{ currentItem.time }}</div>
                        <span>{{ currentItem.title }}</span>

                    </div>

                    <button @click="prevItem" class="left">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button @click="nextItem" class="right">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

                <div class="social-icons">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="banner">
            <div class="row-bnr">
                <img src="../assets/anime-logo.webp" alt="AnimeTech Logo" class="logo" />
                <img src="../assets/header-banner.webp" alt="Banner 1" class="banner-img" />
            </div>
        </div>

        <AppNavBar />

    </div>
</template>

<style scoped>
.navbar {
    justify-content: center;
    display: flex;
    background-color: #BF1D2E;
    padding: 0;
}

.nav-row {
    display: flex;
    width: 1440px;
    justify-content: space-between;
}

.up {
    padding: 0.5rem;
    background-color: #545454;
}

.news-updates {
    justify-content: center;
    color: white;
    display: flex;
    font-weight: bold;
}

.time {
    display: flex;
    align-items: center;
    width: 55rem;
}

.time span {
    padding-left: 1rem;
    margin-right: 25rem;
}

button {
    color: white;
    padding-right: 1rem;
    border: 0px;
    background-color: #BF1D2E;
}



.social-icons,
i {
    color: white;
    display: flex;
    align-items: center;
    margin: 0 5px;
    font-size: 20px;

}

.social-icons i:hover {
    color: #999;
}

.banner {
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid rgb(228, 222, 222);
    display: flex;
    background-color: white;
    padding: 10px 0px;

}

.row-bnr {
    display: flex;
    justify-content: space-between;
    width: 1440px;
    padding: 10px 0px;
}


.banner .logo {
    max-height: 90px;
}

.banner .banner-img {
    max-height: 90px;
    margin-left: 20px;
}

.news-img {
    width: 45px;
    height: 45px;
}
</style>
