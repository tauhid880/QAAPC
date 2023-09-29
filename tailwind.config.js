module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FFDDCC",
        secondary: "#C70039",
        carousel: "#FFC95F",
        card: "#E7F2FB",
        card2: "#EAFDE7",
        CountColor1: "#FF6D60",
        CountColor2: "#FFB000",
        CountColor3: "#3A1078",
        CountColor4: "#C87941",
      },
    },
  },
  plugins: [],
};
