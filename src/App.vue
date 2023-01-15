<template>
  <div class="w-full">
    <NavBar />
    <div
      class="max-w-screen-lg w-full mt-16 mb-20 px-8 mx-auto pb-24 sm:mt-28 sm:px-16 slg:px-24 lg:mt-48 lg:mt-58"
    >
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import "./assets/tailwind.css";
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style></style>
