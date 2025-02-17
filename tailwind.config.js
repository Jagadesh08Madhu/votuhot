module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alice: ["Alice", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { transform: "translateY(100px)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
