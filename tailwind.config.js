module.exports = {
  theme: {
    screens: {
      'br5': {'max': '1600px'},
      'br4': {'max': '800px'},
      'br3': {'max': '650px'},
      'br2': {'max': '500px'},
      'br1': {'max': '360px'},
    },
    content: [
      './public/**/*.{html,js}',
      './src/**/*.{html,js,jsx}',
      './src/components/**/*.{html,js,jsx}',
      './src/components/SocialButtons/**/*.{html,js,jsx}',
    ],
    colors: {
      transparent: "transparent",
      "gradient-primary": "#6a6969",
      "gradient-secondary": "#4a4a4b",
      "text-shadow-color": "rgba(0, 0, 0, 0.5)",
      "button-color": "#4a4a49",
      "button-hover-color": "#5c5c5c",
      "social-background": "#9a9999",
      "social-hover": "#aeadad",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
      },
    },
    
  },
};
