module.exports = {
  mode: "jit",
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'os-image': "url('../assets/images/OSScreenshot.png')",
        'gs-image': "url('../assets/images/graceshopper.png')",
        'hu-image': "url('../assets/images/homeui.png')",
        'sd-image': "url('../assets/images/sweatdeck.png')",
        'pf-image': "url('../assets/images/portfolio.png')",
        'js-image': "url('../assets/images/jsonimg.png')",
        'fs-image': "url('../assets/images/background.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
