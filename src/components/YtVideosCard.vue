<template>
  <div class="flex flex-col gap-2 lg:gap-2">
    <h1 class="font-theme_bold text-base md:text-xl lg:text-2xl text-head_text">
      Youtube Videos
    </h1>
    <div
      class="grid grid-cols-1 slg:grid-cols-2 gap-7 sm:gap-6 pt-8 mx-auto sm:w-5/6 slg:w-full"
    >
      <YtVideos
        v-for="video in ytVideos"
        :key="video.id.videoId"
        :image="video.snippet.thumbnails.high.url"
        :link="video.id.videoId"
        :name="video.snippet.title"
      />
    </div>
  </div>
</template>

<script>
import YtVideos from "../components/YtVideos.vue";
export default {
  data() {
    return {
      ytVideos: [],
    };
  },
  methods: {
    getYTData() {
      fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCy_IrkLSYfaSQL3CNCx9jbA&maxResults=6&order=date&key=AIzaSyBJDm0n7WNmPS6E3132ZHiV5KdxuVpEnDo"
      )
        .then((res) => res.json())
        .then((data) => (this.ytVideos = data.items));
    },
  },
  mounted() {
    this.getYTData();
  },
  components: { YtVideos },
};
</script>

<style></style>
