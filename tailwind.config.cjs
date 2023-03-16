/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'b-accent-1': "var(--bg-red)",
        'b-accent-2': "var(--bg-yellow)",
        'b-accent-3': "var(--bg-teal)",
        'b-accent-4': "var(--bg-blue)"
      },
      colors:{
        'accent-1': "var(--accent-1)",
        'accent-2': "var(--accent-2)",
        'accent-3': "var(--accent-3)",
        'accent-4': "var(--accent-4)",
        'clr-white': "var(--clr-white)",
        'clr-dark-gray': "var(--clr-dark-gray)",
        'clr-light-blue': "var(--clr-blue)",
        'clr-lavender': "var(--clr-lavender)"
      },
      boxShadow:{
        "card-shd":'.5rem 1rem 3rem hsl(224, 30%, 27%, .2)'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
