/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'sm': '575px',
      'md': '767px',
      'lg': '991px',
      'xl': '1199px',
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      
      colors: {
        'primary': "#092C4C",  
        'secondery': "#F2994A",  
        'heading': "#282828",                             
        'pragraph': "#828282",
        },
      },                                                      
      fontFamily:{
        pragraph: ["'IBM Plex Sans', sans-serif"],
        heading: ["'Poppins', sans-serif"],
      },

      backgroundImage: {
        'banner': "url('assets/img/banner-photo.png')",
      }
     
    },
  }