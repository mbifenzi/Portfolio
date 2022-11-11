/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-cover": "url('./assets/header-cover.jpeg')",
        "fa-github": "url('./assets/fa-github.png')",
        "fa-twitter": "url('./assets/fa-twitter.png')",
        "fa-linkedin": "url('./assets/fa-linkedin.png')",
        "fa-instagram": "url('./assets/fa-instagram.png')",
        "fa-facebook": "url('./assets/fa-facebook.png')",
        "about-cover": "url('./assets/about-cover.jpeg')",
      },
      animation : {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
        'spin-slower': 'spin 5s linear infinite',
        'spin-faster': 'spin 0.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'refloat': 'refloat 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translatey(0)', },
          '50%': { transform: 'translatey(-20px)', },
          '100%': { transform: 'translatey(0)', },
        },
        refloat: {
          '0%': { transform: 'translatey(0)',  },
          '50%': { transform: 'translatey(20px)', },
          '100%': { transform: 'translatey(0)', },
        }, 
        wiggle : {
          '0%, 100%': { transform: 'rotate(-3deg)', },
          '50%': { transform: 'rotate(3deg)', },
        },
      },
    },
  },
  plugins: [],
}