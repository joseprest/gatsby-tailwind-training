module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/3": "33.333333%",
        "1/2": "50%",
        "3/4": "75%",
      },
      colors: {
        black: "#000",
        primary: "#6A3E84",
        heading: "#152535",
        default: "#555555",
        yellow: "#FDB827",
        orange: "#DE4F41",
        red: {
          600: "#DE4F41",
        },
        grey: {
          lite: "#667085",
          500: "#F8FAFE",
          600: "#E2E7F1",
          700: "#D8DDE7",
          800: "#EBE7EE",
        },
        border: {
          default: "#E2E7F1",
        },
      },
      spacing: {
        500: "500px",
      },
      boxShadow: {
        "4xl": "0px 30px 60px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
