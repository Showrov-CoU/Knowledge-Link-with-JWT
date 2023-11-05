/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ltBgSmall: "#05386B",
        ltBgPrimary: "#5CDB95",
        ltBgSecondaryOne: "#8EE4AF",
        ltBgSecondaryTwo: "#379683",
        ltTextColor: "#EDF5E1",
      },
    },
  },
  plugins: [],
};
