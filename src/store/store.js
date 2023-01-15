// @ts-nocheck
import { defineStore } from "pinia";
import { getPageBlocks, getPageTable } from "vue3-notion";

export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    blogPosts: [],
    singleBlogPostId: "",
    isLoading: false,
    random: "I am coming from the the use store",
  }),
  actions: {
    async getBlogPosts() {
      this.isLoading = true;
      const pageTable = await getPageTable("0cef7ec8e56442d087ee621dadef614f");
      let data = pageTable
        .filter((page) => page.public)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      // localStorage.setItem("posts", data);
      this.blogPosts = data;
      this.isLoading = false;
    },
    async getASinglePost(slug) {
      this.isLoading = true;
      const pageTable = await getPageTable("0cef7ec8e56442d087ee621dadef614f");
      let data = pageTable
        .filter((page) => page.public)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      let post = data.filter((p) => p.slug === slug);
      this.singleBlogPostId = await getPageBlocks(post[0].id);
      this.isLoading = false;
    },
  },
});
