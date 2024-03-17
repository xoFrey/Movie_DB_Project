/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      description: "Bungee_Hairline",
      headline: "Codystar",
    },
    extend: {
      backgroundImage: {
        bgImage: "url(/public/img/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg)",
      },
    },
  },
  plugins: [],
};
