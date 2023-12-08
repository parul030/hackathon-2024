/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        v1: '0px 0px 35px 0px rgba(0, 0, 0, 0.14)',
        v2:'0px 0px 35px 0px rgba(0, 0, 0, 0.14)',
        

       
      },
    },
  },
  plugins: [],
}

