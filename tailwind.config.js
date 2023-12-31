/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#fdcb6e",
        },
        secondary: {
          500: "#ffeaa7",
        },
        dark: {
          500: "#2d3436",
        },
      },
      padding: {
        main_x: "144px",
        main_y: "40px",
      },
    },
  },
  plugins: [],
};
