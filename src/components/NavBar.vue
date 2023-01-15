<template>
  <nav
    class="bottom-0 px-3 py-3 flex justify-between items-center border-b-[1px] fixed border-border_sm w-full bg-navbar_back backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4 z-10"
  >
    <div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
    <span
      class="font-logo text-3xl font-normal select-none slg:font-semibold lg:text-4xl"
      to="/"
    >
      Aldas
    </span>
    <div class="flex text-xs items-center gap-1">
      <router-link
        to="/"
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-2 sm:py-1 lg:text-xs"
      >
        Home
      </router-link>
      <router-link
        to="/portfolio"
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-2 sm:py-1 lg:text-sm"
      >
        Portfolio
      </router-link>
      <router-link
        to="blogs"
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-2 sm:py-1 lg:text-sm"
      >
        Blog
      </router-link>
      <router-link
        to="/about"
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-2 sm:py-1 lg:text-sm"
      >
        About
      </router-link>
    </div>
  </nav>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
export default {
  components: { NavBarItem },
};
</script>

<style></style>
