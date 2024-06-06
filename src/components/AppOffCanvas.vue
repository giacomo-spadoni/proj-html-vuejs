<script>
import store from '../data/store.js';
import AppCardHeader from "./AppCardHeader.vue";


export default {

    components: {

        AppCardHeader,



    },

    data() {
        return {
            store,

        };
    }
};

</script>

<template>
    <div class="menu-icon">
        <button class="btn btn-primary off-btn" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i
                class="fa-solid fa-bars"></i></button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <img src="../assets/anime-logo-300x89.webp" alt="AnimeTech Logo" class="logo" />
            </div>
            <div class="close-btn"> <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button></div>
            <div class="offcanvas-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis perspiciatis
                    asperiores libero providentasperiores libero provident.</p>
                <div class="cnt-img">
                    <div class="off-img">
                        <img src="../assets/travel.webp" alt="">
                    </div>
                    <div class="off-img">
                        <img src="../assets/visit.webp" alt="">
                    </div>
                    <div class="off-img">
                        <img src="../assets/success.webp" alt="">
                    </div>
                </div>
                <div class="info">
                    <i class="fa-solid fa-clock"> Sun-Sat: 9:00 AM - 18:00 PM</i>
                    <i class="fa-solid fa-envelope">contact@domain.com</i>
                    <i class="fa-solid fa-phone">(+82) 8123 456 789</i>
                </div>
                <div class="social-icons">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

    </div>


</template>

<style scoped>
.off-btn {
    background-color: white;
    color: black;
    border: none;
    font-size: xx-large;
}

.offcanvas {
    width: 35rem;
}

.close-btn {
    background-color: white;
    position: absolute;
    top: 0;
    right: -36px;
}

.offcanvas-header {
    display: flex;
    justify-content: center;
    padding-top: 10rem;
}

.offcanvas-body p {
    font-size: 16px;
    text-align: center;
}

.info {
    gap: 0.6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 16px;
}



.social-icons {
    padding-top: 2rem;
    gap: 0.5rem;
    display: flex;
    justify-content: center;
    color: #BF1D2E;
}

.off-img {
    display: flex;
    height: 6rem;
    width: 98rem;
    border-radius: 15PX;

}

.off-img img {
    border-radius: 15PX;
}

.cnt-img {
    display: flex;
    margin-bottom: 2rem;
    flex-direction: row;
}
</style>