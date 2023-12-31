/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      colors: {
        mainBlue: "#097cb2",
        darkerBlue: "#155c8a",
        mainGreen: "#8dc936",
        lighterGreen: "#a2d74a",
        textColorGrey: "#333333",
        clientsServedColor: "#3498db",
        branchesColor: "#8dc936",
        pharmacistsColor: "#2c3e50",
        heartsMadeHappyColor: "#ff6f61",
        lightGray: "#f0f0f0",
      },
      spacing: {
        '128': '38rem',
        '120': '35rem',
        '110': '32rem',
        '100': '28.75rem',
        '88': '21.5rem',
      },
      fontSize: {
        '7.5xl': ['4.5rem', {
          lineHeight: 1.1,
        }],
        '7.1xl': ['4.3rem', {
          lineHeight: 1.05,
        }],
        '5.5xl': ['3.25rem', {
          lineHeight: 1.1,
        }],
        '4.5xl': ['2.9rem', {
          lineHeight: 1.1,
        }],
        '7.2xl': ['5rem', {
          lineHeight: 1.1,
        }],
        '8.2xl': ['6.6rem', {
          lineHeight: 1.0,
        }],
      },
      backgroundImage: {
        'hero-pattern':  "url('./img/Background SVG/Contour Line.svg')",
        'ourServicesSection': "url('./img/Background SVG/Curve Line.svg')",
        'ourServicesSection2': "url('./img/Background SVG/Curve Line 2.svg')",
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        contactUs: ['Inter', 'sans-serif']
      },
      scale: {
        '118': '1.18',
        '114': '1.14',
        '112': '1.12'
      }
    }
  },
  plugins: [],
}