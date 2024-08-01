/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Sevillana", "cursive"]
      },
      colors: {
        primary: "#C8D99E",
        secondary: "#2F4156",
        brandDark: "#567C8D"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        }
      }

    },
  },
  plugins: [],
}

