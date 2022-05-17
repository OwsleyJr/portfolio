module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'os-image': "url('../assets/OSScreenshot.png')",
        'gs-image': "url('../assets/graceshopper.png')",
        'hu-image': "url('../assets/homeui.png')",
        'sd-image': "url('../assets/sweatdeck.png')",
        'pf-image': "url('../assets/portfolio.png')",
        'js-image': "url('../assets/jsonimg.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
