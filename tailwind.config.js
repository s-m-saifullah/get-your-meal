/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#108987",
          secondary: "#e89878",
          accent: "#0ef7a5",
          neutral: "#271D2A",
          "base-100": "#FAF9FB",
          info: "#4591ED",
          success: "#0E773D",
          warning: "#9B6603",
          error: "#F0463D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
