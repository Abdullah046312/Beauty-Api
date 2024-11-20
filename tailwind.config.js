/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        DMs:['DM Sans', 'sans-serif'] 
      },

      backgroundImage: {
        'bannerpic': "url('./assets/banner.png')",
        'Secondpart': "url('./assets/images.png')",
        'Secondpart01': "url('./assets/images1.png')",
        'secondpart02': "url('./assets/images2.png')",
        'thirdpart': "url('./assets/images3.png')",
        'thirdpart1': "url('./assets/images4.png')",
        'thirdpart2': "url('./assets/images5.png')",
        'thirdpart3': "url('./assets/images6.png')",
        'thirdpart4': "url('./assets/images7.png')",
        'thirdpart5': "url('./assets/images8.png')",
        'thirdpart6': "url('./assets/images9.png')",
        'thirdpart7': "url('./assets/images10.png')",
        'fourthpart': "url('./assets/images11.png')",
        'fourthpart1': "url('./assets/images12.png')",
        'fourthpart2': "url('./assets/images13.png')",
        'fourthpart3': "url('./assets/images14.png')",
        'fourthpart4': "url('./assets/images15.png')",


        
      },

    },
  },
  plugins: [],
}