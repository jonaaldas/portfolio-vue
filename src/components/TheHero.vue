<template>
  <div class="flex flex-col gap-8">
    <h1
      class="text-xl sm:text-3xl md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-head_text"
    >
      Full-stack Software Engineer
    </h1>
    <div class="text-sm md:text-base leading-relaxed slg:text-lg slg:leading-8">
      I'm Jonathan Aldas, I am specialising in Frontend Development Email
      Development with Vue 3, TypeScript, Express, MJMLS and Salesforce
    </div>

    <Socials />
    <hr class="bg-squgily bg-black border-0 h-[6px] opacity-25" />
  </div>
</template>

<script>
import Socials from "./Socials.vue";
export default {
  components: { Socials },
};
</script>

<style></style>
