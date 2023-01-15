<template>
  <div class="flex flex-col gap-8 lg:gap-12 w-full">
    <h1
      class="text-xl sm:text-3xl md:text-4xl md:leading-normal slg:text-5xl slg:leading-relaxed font-theme_bold text-head_text"
    >
      Portfolio
    </h1>
    <ul class="flex justify-center gap-2">
      <li
        @click="activeTab = 'email'"
        class="p-3 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm cursor-pointer"
      >
        Email Portfolio
      </li>
      <li
        @click="activeTab = 'fullstack'"
        class="p-3 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm cursor-pointer"
      >
        Fullstack Work
      </li>
    </ul>
    <!-- <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" /> -->
    <div class="flex flex-col items-center justify-center gap-28">
      <div v-if="activeTab === 'email'">
        <h2 class="p-2 md:text-base leading-relaxed slg:text-lg slg:leading-8">
          Here are my Email development projects. They are built with MJML and
          pure HTML, CSS and tested with Litmus.
        </h2>
        <MainProjectItem
          v-for="project in email"
          :key="project.id"
          :description="project.description"
          :image="project.image"
          :link="project.link"
          :name="project.name"
          :tech="project.tech"
          :github="project.github"
        />
      </div>
      <div v-if="activeTab === 'fullstack'">
        <h2
          class="text-sm md:text-base leading-relaxed slg:text-lg slg:leading-8"
        >
          I have been working as a software engineer for the past year and here
          are some pesonal projects I have been working on and testing.
        </h2>
        <MainProjectItem
          v-for="project in fullStack"
          :key="project.id"
          :description="project.description"
          :image="project.image"
          :link="project.link"
          :name="project.name"
          :tech="project.tech"
          :github="project.github"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MainProjectItem from "../components/MainProjectItem.vue";
import bezel from "@/assets/email/bezel.png";
import pete from "@/assets/email/pete&pedro.png";
import transaction from "@/assets/email/transaction.png";
import transactionApp from "@/assets/fullstack/Transaction Managment App.png";
import referralApp from "@/assets/fullstack/Referral.io.png";
import codeSnippetApp from "@/assets/fullstack/CodeSnippet.io.png";
import vidaExoticaApp from "@/assets/fullstack/Vida Exotica.png";
import sweetTreatsApp from "@/assets/fullstack/Sweet Treats.png";
let emailImg = [bezel, pete, transaction];
let fullstackImg = [
  transactionApp,
  referralApp,
  codeSnippetApp,
  vidaExoticaApp,
  sweetTreatsApp,
];
export default {
  data() {
    return {
      activeTab: "email",
      email: [
        {
          id: 1,
          name: "Pete and Pedro Email",
          image: emailImg[1],
          description:
            "Pete and Pedro pormotional email. Made with MJML Framework and tested with Litmus.",
          tech: ["MJML,", "Litmus,", "HTML,", "CSS."],
          link: "https://charming-longma-a44cba.netlify.app/",
          github: "https://github.com/jonaaldas/peteandpedro-email",
        },
        {
          id: 2,
          name: "Bezel Promotianl Email",
          image: emailImg[0],
          description:
            "Bezel is a watch company that sells watches. This is a promotional email made with pure HTML tables and CSS. Email has been tested with Litmus.",
          tech: ["HTML,", "CSS,", "Litmus."],
          link: "https://jade-cupcake-b4c13f.netlify.app",
          github: "https://github.com/jonaaldas/bezel-email",
          featured: true,
        },
        {
          id: 3,
          name: "Transactional Email",
          image: emailImg[2],
          description:
            "This email is a transactional Email made MJML Framework and tested with Litmus.",
          tech: ["MJML,", "Litmus,", "HTML,", "CSS."],
          link: "https://helpful-boba-224824.netlify.app",
          github: "https://github.com/jonaaldas/transaction-email",
          featured: true,
        },
      ],
      fullStack: [
        {
          id: 1,
          name: "Transaction App",
          image: fullstackImg[0],
          description:
            "Transaction Managment App - Is a Fullstack app built to help real estate agents view their houses under contract from a birds-ey view. Being a realtor myself, I notice that once we pass a certain number of homes under contract, we lose focus and track. This app helps realtors see where they are in every transaction and what steps follow next.",
          tech: [
            "HTML,",
            "Bootstrap,",
            "Node,",
            "MongoseDB,",
            "ExpressJS,",
            "ReacJS.",
          ],
          link: "https://delightful-kelpie-18ed40.netlify.app/",
          github: "https://github.com/jonaaldas/TM-MERN-APP",
          featured: true,
        },
        {
          id: 2,
          name: "Referra.io App",
          image: fullstackImg[1],
          description:
            "This app came to life when I was talking to a friend in the real estate industry. The problem I was trying to solve is the ability of a real estate agent to be able to receive and send referrals. Realtors do not have a platform for which agents can exchange referrals.",
          tech: [
            "MongoDB,",
            "ExpressJS,",
            "React,",
            "Node,",
            "JWT Tokens for authentication and authorization,",
            "TailwindCss.",
          ],
          link: "https://transcendent-sunshine-b16a5f.netlify.app/auth",
          github: "https://github.com/jonaaldas/referralio-clientside",
          featured: true,
        },
        {
          id: 3,
          name: "CodeSnipet.io",
          image: fullstackImg[2],
          description:
            "This app helps software developers who are learning how to code save their code snippets for future reference. I originally had the code in vanillaJS but I decided to migrate the code to TypeScript.",
          tech: ["HTML", "CSS", "TypeScript"],
          link: "https://bit.ly/3Ua24Wi",
          github: "https://github.com/jonaaldas/codeSnippet.io-TypeScript",
          featured: true,
        },
        {
          id: 4,
          name: "Vida Exotica Freelance Website",
          image: fullstackImg[3],
          description:
            "This app came to life when I was talking to a friend in the real estate industry. The problem I was trying to solve is the ability of a real estate agent to be able to receive and send referrals. Realtors do not have a platform for which agents can exchange referrals.",
          tech: ["HTML,", "CSS,", "JS."],
          link: "https://github.com/jonaaldas/vida-exotica-website",
          github: "https://precious-banoffee-99d39f.netlify.app/",
          featured: true,
        },
        {
          id: 5,
          name: "Sweet Treats App",
          image: fullstackImg[4],
          description:
            "I participated in a hackathon and my team and I won first place. Sweet Treats is an application that helps local business owners put their ice cream for sale online. The App was built with HTML, CSS, JS, Pyhton, Django I was in charge of builing a fullstack an e-commerce integratoin of the App, it was built with HTML, CSS and JS",
          tech: ["HTML,", "CSS,", "JS."],
          link: "https://statuesque-raindrop-35276d.netlify.app/",
          github: "https://github.com/jonaaldas/Hackathon-sweet-treats-heroku",
          featured: true,
        },
      ],
    };
  },
  components: { MainProjectItem },
};
</script>

<style></style>
