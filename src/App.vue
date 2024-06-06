<script>
import store from './data/store.js';
import AppMain from './components/AppMain.vue';
import AppCarousel from './components/AppCarousel.vue';
import AppCarouselMini from './components/AppCarouselMini.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import Player from './components/Player.vue';

export default {
  components: {
    AppMain,
    AppCarousel,
    AppCarouselMini,
    AppHeader,
    AppFooter,
    Player,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getImage(nomefile) {
      return new URL(`./assets/${nomefile}`, import.meta.url);
    },
  },
};
</script>

<template>
  <AppHeader />
  <AppCarousel />
  <AppMain />
  <AppCarouselMini />
  <Player />
  <AppFooter />
</template>

<style scoped></style>
