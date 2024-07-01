import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0f1224",
        "light-primary": "#ffffff",
        "pollcard-red": "#eb090d",
        "pollcard-blue": "#2009eb",
        "pollcard-green": "#16db16",
        "pollcard-yello": "#dbb716",
      },
      screens: {
        sm: "1200px",
        md: "1450px",
        lg: "1700px",
        xl: "2100px",
      },
      boxShadow: {
        "pollcard-shadow-red": "0px 10px 20px #eb090d",
        "pollcard-shadow-blue": "0px 10px 20px #2009eb",
        "pollcard-shadow-yellow": "0px 10px 20px #dbb716",
        "pollcard-shadow-green": "0px 10px 20px #16db1b",
      },
    },
  },
  plugins: [
    // ...
    daisyui,
  ],
};
