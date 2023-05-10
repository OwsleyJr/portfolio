module.exports = {
  mode: "jit",
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'os-image': "url('../assets/OSScreenshot.png')",
        'gs-image': "url('../assets/graceshopper.png')",
        'hu-image': "url('../assets/homeui.png')",
        'sd-image': "url('../assets/sweatdeck.png')",
        'pf-image': "url('../assets/portfolio.png')",
        'js-image': "url('../assets/jsonimg.png')",
        'fs-image': "url('../assets/background.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
