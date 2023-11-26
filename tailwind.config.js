/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      keyframes:{
        ngegantung: {
          '0%, 100%': { 
            transform: 'rotate(3deg)', 
            transform: 'translateX(-14px)',
          },
          '50%': { 
            transform: 'rotate(-3deg)',
            // transform: 'translateY(14px)', 
          }
        },
        naikturun: {
          '0%, 100%': {  
            transform: 'translateY(-6px)',
          },
          '50%': { 
            transform: 'translateY(6px)', 
          }
        },      
      },
      animation: {
        ngegantung: 'ngegantung 2s ease-in-out infinite',
        naikturun: 'naikturun 3s ease-in-out infinite'
      },
      colors: {
        'blue-card': '#1b2b68',
      }
    },
    plugins: [],
  }
}

