/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      backgroundImage: {
        squgily: "url('~/assets/divider.svg')",
        topbar:
          "linear-gradient(to right, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))",
      },
      colors: {
        p_text: "#b1b1b1",
        head_text: "#eaeaea",
        navbar_back: "rgba(17, 17, 17, 0.8)",
        item_back: "#013a63",
        item_hover_back: "#01497c",
        action_back: "#242424",
        action_border: "#363636",
        border_sm: "rgba(54, 54, 54, 0.6)",
        action_text: "#d9d9d9",
        btn_back: "#2e2e2e",
        btn_text: "#f6f6f6",
        link_text_hover: "#6366F1",
        link_border_hover: "rgb(99,102,241, 0.4)",
        link_border: "#6c6c6c",
        link: "#d9d9d9",
        background: "#111111",
        selectionBack: "rgba(40,41,96)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        slg: "978px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        logo: "Southam Demo",
        theme: [
          "MonoLisa",
          "Monaco",
          "Source Code Pro",
          "Consolas",
          "monospace",
        ],
        theme_bold: [
          "MonoLisaBold",
          "Monaco",
          "Source Code Pro",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
