/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0f1224",
        "light-primary": "#ffffff",
      },
      screens: {
        sm: "1200px",
        md: "1450px",
        lg: "1700px",
        xl: "2100px",
      },
    },
  },
  plugins: [],
};
