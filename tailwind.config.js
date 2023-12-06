/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      screens: {
        vsm: "400px",
        xmd: "850px",
      },
    },
  },
  plugins: [],
};
