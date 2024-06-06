<template>
  <div>
    <div class="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div class="row" style="width: 1400px;">
        <div class="col-md-8 p-0">
          <!-- Area del video -->
          <div class="vid-container">
            <!-- Frame del video -->
            <iframe
              id="video-frame"
              :src="currentVideoUrl"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-md-4 p-0">
          <!-- Playlist dei video -->
          <div class="bg-dark text-white p-3 h-100">
            <!-- Intestazione con il conteggio dei video -->
            <h5 class="playlist-header">
              Video Playlist ({{ getCurrentVideoIndex() + 1 }}/{{ trailers.length }})
            </h5>
            <!-- Lista dei video -->
            <ul class="list-group vid-list">
              <!-- Iterazione sui video -->
              <li
                v-for="(video, index) in trailers"
                :key="video.id"
                @click="selectVideo(video)"
                :class="['list-group-item', 'd-flex', 'align-items-center', { active: video.id === selectedVideo.id }]"
              >
                <!-- Quadratino con numero o icona -->
                <div :class="['video-number', { 'active': video.id === selectedVideo.id }]">
                  <template v-if="video.id === selectedVideo.id">
                    <i class="fas fa-play"></i>
                  </template>
                  <span v-else>{{ index + 1 }}</span>
                </div>
                <!-- Thumbnail del video -->
                <img :src="getThumbnailUrl(video.videoId)" alt="video thumbnail">
                <!-- Titolo del video -->
                <span>{{ video.title }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../data/store';

export default {
  data() {
    return {
      // Dati dei video
      trailers: store.trailers,
      // Video selezionato (inizialmente il primo)
      selectedVideo: store.trailers[0],
    };
  },
  computed: {
    // URL corrente del video
    currentVideoUrl() {
      return `${this.selectedVideo.embedUrl}?autoplay=1`;
    },
  },
  methods: {
    // Seleziona un video dalla lista
    selectVideo(video) {
      this.selectedVideo = video;
    },
    // Ottiene l'URL del thumbnail del video
    getThumbnailUrl(videoId) {
      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/0.jpg`;
      }
      return ''; // Restituisce un'immagine vuota se l'ID del video non è valido
    },
    // Ottiene l'indice del video corrente
    getCurrentVideoIndex() {
      return this.trailers.findIndex(video => video.id === this.selectedVideo.id);
    },
  },
};
</script>

<style scoped>
.vid-container {
  position: relative;
  height: 100%;
  overflow: hidden;
  max-width: 100%;
}

.vid-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.playlist {
  height: 100%;
  overflow-y: auto;
  background-color: #343a40;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}

.playlist-header {
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
}

.list-group {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.list-group-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #343a40;
  border: none;
  padding: 10px;
  margin-bottom: 5px;
  color: #fff;
  transition: background-color 0.3s;
}

.list-group-item.active {
  background-color: #dc3545;
  color: white;
}

.list-group-item img {
  height: 84px;
  margin-right: 15px;
}

.list-group-item:hover {
  background-color: #495057;
}

.video-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: #fff;
  color: #000;
  border-radius: 3px;
  margin-right: 10px;
}

.video-number.active {
  background-color: #dc3545;
  color: #fff;
}
</style>
