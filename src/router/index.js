import { createRouter, createWebHistory } from "vue-router";
import About from "../views/AboutView.vue";
import Blog from "../views/BlogView.vue";
import Home from "../views/HomeView.vue";
import Projects from "../views/ProjectsView.vue";
import SingleBlogPost from "../views/SingleBlogPostView.vue";
import PrivacyPolicy from "../views/PrivacyPolicyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/portfolio",
      name: "projects",
      component: Projects,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blog,
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: SingleBlogPost,
    },
    {
      path: "/extension_privacy_policy",
      name: "privacy_policy",
      component: PrivacyPolicy,
    },
  ],
});

export default router;
