/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#15803d",
          "secondary": "#dcfce7",
          "accent": "#eab308",
          "neutral": "#f3f4f6",
          "base-100": "#ffffff",
          "info": "#22c55e",
          "success": "#22c55e",
          "warning": "#fef08a",
          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
  ],
}