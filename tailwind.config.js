/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: "#ff5a5f",
        titleColor: "#484848",
        bgGrey: "#f7f7f7",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
    },

    container: {
      center: true,

      // or have default horizontal padding
      // padding: "1rem",

      //  breakpoints like bootstrap
      screens: {
        xs: "480px",
        sm: "768px",
        md: "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}
