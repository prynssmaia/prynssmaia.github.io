module.exports = {
  content: ["./src/**/*.{html}"],
  theme: {
    extend: {
      colors: {
        'primary':'#350207'
      },
      fontFamily: {
        'text': ["'Libre Franklin'", 'sans-serif']
      },
      backgroundImage: {
       'portait': "url('/assets/bg-hero.jpg')",
       'hero': "linear-gradient(121.36deg, #D7057F 9%, #C8098A 14%, #1442DB 38%)"
      },
      boxShadow: {
        'pink': '0px 0px 32px #D7057F85',
        'red': '0px 0px 32px #BE09C880',
        'blue': '0px 0px 24px #1442DB70'
      }
    },
  },
  plugins: [],
}
