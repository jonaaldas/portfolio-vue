<template>
  <div>
    <h1
      class="text-xl sm:text-3xl md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-head_text"
    >
      Blog Post
    </h1>
    <div v-show="isLoading === true">Loading</div>
    <div v-show="isLoading === false">
      <BlogCard
        v-for="post in blogPosts"
        :key="post.id"
        :description="post.description"
        :title="post.title"
        :image="post.thumbnail ? post.thumbnail[0].url : null"
        :slug="post.slug"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import { useBlogStore } from "../store/store";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      loading: false,
    };
  },
  components: { BlogCard },
  methods: {
    ...mapActions(useBlogStore, ["getBlogPosts"]),
  },
  computed: {
    ...mapState(useBlogStore, ["blogPosts", "isLoading"]),
  },
  created() {
    this.getBlogPosts();
  },
};
</script>

<style></style>
