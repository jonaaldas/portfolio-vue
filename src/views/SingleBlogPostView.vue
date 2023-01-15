<template>
  <div v-show="loading === true">Loading</div>
  <div v-show="loading === false">
    <NotionRenderer :blockMap="singleBlogPostId" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { NotionRenderer } from "vue3-notion";
import { mapState, mapActions } from "pinia";
import { useBlogStore } from "../store/store";
// const { params } = useRoute();
export default {
  data() {
    return {
      params: useRoute(),
      post: null,
      blockMap: "",
      loading: false,
    };
  },
  components: { NotionRenderer },
  methods: {
    ...mapActions(useBlogStore, ["getASinglePost"]),
  },
  computed: {
    ...mapState(useBlogStore, ["singleBlogPostId"]),
  },
  async created() {
    this.getASinglePost(this.params.params.id);
  },
};
</script>

<style>
@import "vue3-notion/dist/style.css";
@import "prismjs/themes/prism.css";
@import "katex/dist/katex.min.css";
.notion-text,
.notion-title,
.notion-h1,
.notion-h2,
.notion-h3,
.notion-list {
  color: white !important;
}
</style>
