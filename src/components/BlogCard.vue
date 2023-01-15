<template>
  <router-link
    :to="{ name: 'blog', params: { id: slug } }"
    class="flex flex-col w-full p-6 py-6 my-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
  >
    <div class="flex flex-col items-center gap-8">
      <img v-if="image" :src="image" class="rounded-lg w-full" />
      <div class="flex flex-col md:w-5/6 items-left gap-6">
        <span class="font-theme_bold text-2xl text-white">{{ title }}</span>
        <p class="text-sm lg:text-lg">{{ description }}</p>
        <p class="text-sm lg:text-lg">{{ created }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["title", "image", "description", "created", "slug"],
};
</script>

<style></style>
