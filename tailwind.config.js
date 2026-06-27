module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },

      colors: {
        primary: "#B7793E",
        secondary: "#6F4E37",
        accent: "#D4A373",

        background: "#F8F5F2",
        section: "#F1EAE3",
        dark: "#2C1810",

        heading: "#2C1810",
        body: "#5F5F5F",
        lightText: "#7A7A7A",
      },
    },
  },
  plugins: [],
};