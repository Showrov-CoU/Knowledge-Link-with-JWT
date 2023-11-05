/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ltBlueDeep: "#05386B",
        ltBlueLight: "#379683",
        ltBgPrimary: "#5CDB95",
        ltBgSecondary: "#8EE4AF",
        ltWhite: "#EDF5E1",

        dkBeige: "#CAC0B3",
        dkBgPrimary: "#001233",
        dkBgSecondary: "#001944",
        dkCoral: "#FF595A",
      },
    },
  },
  plugins: [],
};
