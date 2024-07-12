/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "3.375rem",
        h2: "2.25rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "1.125rem",
        h6: "1rem"
      },
      screens: {
        smd: "1109px"
      },
      colors: {
        black: "#000000",
        "base-bark": "#1A202C",
        "base-bark-dark": "#101928",
        baseColor: "#071E0D",
        secondaryColor: "#3a35c4",
        "secondary-color-dark": "#0F3318",
        tertiaryColor: "#3a35c4",
        quaternaryColor: "#326841",
        primary: "#28560B",
        danger: "#CB1A14",
        "gray-1": "#98A2B3",
        "gray-2": "#596780",
        "gray-3": "#667185",
        borderGray: "#CBD5E1",
        lightGray: "#F8FAFC",
        "light-gray-1": "#ACACAC",
        "light-gray-2": "#8C929D",
        "light-gray-3": "#98A2B3",
        "light-gray-4": "#E4E7EC",
        "light-gray-5": "#F0F2F5",
        "light-gray-6": "#D0D5DD",
        "light-gray-7": "#344054",
        active: "#F3A218",
        "light-green": "#B9DEA1",
        "light-green-1": "#EDFFE1"
      }
    }
  }
};
