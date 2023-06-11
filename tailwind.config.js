/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(247, 196, 40);",
        secondary: "#00DFA2",
        blue: "#0079FF",
      },
    },
  },
  plugins: [],
};
