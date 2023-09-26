/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "edu-orange": "#F7931E",
        "light-orange": "#FEAB49",
        "dark-blue": "#081122",
      },
      backgroundImage: {
        "bg-pattern": "url('bgimg.png')",
      },
    },
  },
  plugins: [],
};
