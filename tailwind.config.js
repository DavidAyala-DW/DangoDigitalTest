module.exports = {
  purge: ["./index.html","./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {

        primary : "#D9E4EB",
        peacock : "#32413D",
        hoverButton : "#ECFF86",
        random1: "#A5A3FF",
        random2: "#FFEDC4",
        random3: "#FFCFC4",
        random4: "#B3C4E8",
        random5: "#C4FFFC",
        random6: "#EB6244",
        random7: "#B3E8E5",
        random8: "#F9A8FF"

      },

      fontFamily : {  
        'neue' : ["Neue Haas Grotesk Display Pro","sans-serif"] 
      },

      backgroundImage : {

        layoutImage1 : "url('/src/images/iPhone X Mockup 1.png')",
        layoutImage2 : "url('/src/images/iPhone X Mockup 2.png')",
        layoutImage3 : "url('/src/images/kisspng-iphone-6-plus-smartphone-telephone-hand-holding-smartphone-5a7358263f78c2.05986168151750864626.png')",
        layoutImage4 : "url('/src/images/kisspng-wattpad-mobile-app-hand-hand-holding-smartphone-5a7800c653e151.8144384415178139583436.png')", 
        layoutImage5 : "url('/src/images/transparent-2022-happy-new-year-2022-new-year-2022-60c5c16e8528b6.9614722716235728465454.png')",
        layoutImage6 : "url('/src/images/transparent-2022-happy-new-year-2022-new-year-2022-60c7fc035971e2.5059306116237189153664.png')",
        layoutImage7 : "url('/src/images/kisspng-iphone-4-iphone-8-telephone-apple-a11-screen-prote-iphone-x-5abb7248d34b36.4175144115222339288655.png')",

      },

      spacing : {
        "img1W" : "885px",
        "img2W" : "375px",
        "img1H" : "792px",
        "img2H" : "603px"
      },

      maxWidth: {
        "img2W" : "375px",
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
