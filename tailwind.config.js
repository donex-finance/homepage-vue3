/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#fed136",
      },
    },
  },
  plugins: [],
  corePlugins: {
    // to resolve style conflicts
    preflight: false,
  },
};
