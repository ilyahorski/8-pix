/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        primary: "#ff69b4",
        secondary: "#9370db",
        accent: "#00ff7f",
        border: "#ffd700",
        scrollbarBg: "#1a1a1a",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        typing: "typing 3.5s steps(40, end)",
        loading: "loading 1s infinite",
        modalFadeIn: "modalFadeIn 0.3s ease-out",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        loading: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        modalFadeIn: {
          from: { opacity: 0, transform: "translateY(-20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "pixel-grid": "linear-gradient(to right, rgba(255, 105, 180, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 105, 180, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "pixel-5": "5px 5px",
        "pixel-3": "3px 3px",
      },
    },
  },
  plugins: [],
};
