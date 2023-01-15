<template>
  <div class="flex flex-col gap-8 lg:gap-16 mb-16">
    <TheHero />
    <YtVideosCard />
  </div>
</template>

<script>
import TheHero from "../components/TheHero.vue";
import YtVideosCard from "../components/YtVideosCard.vue";
export default {
  components: { TheHero, YtVideosCard },
};
</script>

<style></style>
