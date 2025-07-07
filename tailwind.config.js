/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",  // Scan all HTML files in public/
    "./src/**/*.js",       // Scan JS files if needed
  ],
  theme: {
    extend: {
      colors: {
        "amenableBlue": "#d7ebf7",
        "swimmingPool": "#73c3ff",
        "tearDrop": "#0068ef",
        "blueHour": "#004187",
        "blueBerry": "#002854",
        "deepSea": "#001b32",
        "darkBackground": "#111827",
        "secondDarkBackground": "#000b1d",
        "darkText": "#dbeafe"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        "xxxs": "0.5rem",
        "xxs": "0.625rem"
      },  
    },
  },
  plugins: [],
}

