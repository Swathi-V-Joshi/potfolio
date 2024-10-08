/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hanuman: ["Hanuman"],
        Milonga: ["Milonga"],
      },
      keyframes: {
        bg: {
          "0%": { height: "0%", background: "rgb(2, 17, 25)" },
          "50%": { height: "25%", background: "rgb(2, 17, 40)" },
          "100%": {
            height: "25%",
            background: "linear-gradient(120deg, black, rgb(2, 17, 41), black)",
          },
        },
        slideShow: {
          "0%": { transform: "translateX(0)" },
          "8%": { transform: "translateX(0)" },
          "16%": { transform: "translateX(-100%)" },
          "24%": { transform: "translateX(-100%)" },
          "32%": { transform: "translateX(-200%)" },
          "40%": { transform: "translateX(-200%)" },
          "48%": { transform: "translateX(-300%)" },
          "56%": { transform: "translateX(-300%)" },
          "64%": { transform: "translateX(0)" },
          "72%": { transform: "translateX(-100%)" },
          "80%": { transform: "translateX(-100%)" },
          "88%": { transform: "translateX(-200%)" },
          "96%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(-300%)" },
        },
        fall: {
          "0%": {
            transform: "translateY(-100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-630%)" },
        },
      },
      animation: {
        bg: "bg 2s ease-in-out forwards",
        slideShow: "slideShow 5s ease-in-out infinite", // Adjust timing as needed
        fall: "fall 0.5s ease-out forwards",
        slideUp: "slideUp 32s  infinite",
      },
    },
  },
  plugins: [],
};
