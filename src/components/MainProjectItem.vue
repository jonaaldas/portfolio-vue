<template>
  <div class="flex flex-col items-center gap-8 p-4">
    <img :alt="name" :src="image" class="rounded-lg w-full" />
    <div class="flex flex-col md:w-5/6 items-left gap-6">
      <span class="font-theme_bold text-2xl text-head_text">{{ name }}</span>
      <p class="text-sm lg:text-lg">{{ description }}</p>
      <div class="flex p-2">
        <i class="pr-2">Tech:</i>
        <i v-for="(t, index) in tech" :key="index">{{ t }}</i>
      </div>
      <div>
        <a
          class="bg-btn_back border-[1px] border-link_border px-2 py-2&quot; + &quot; rounded-md font-theme_bold text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 &quot; + &quot;slg:text-base slg:px-6 slg:py-3 w-fit mr-2"
          :href="link"
          target="_blank"
          >See Live</a
        >
        <a
          class="bg-btn_back border-[1px] border-link_border px-2 py-2&quot; + &quot; rounded-md font-theme_bold text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 &quot; + &quot;slg:text-base slg:px-6 slg:py-3 w-fit"
          :href="github"
          target="_blank"
          >See on Github</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "image", "description", "tech", "link", "github"],
};
</script>

<style></style>
