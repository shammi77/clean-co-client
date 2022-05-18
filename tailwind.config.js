module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0e7490",        
"secondary": "#e879f9",        
"accent": "#facc15",        
"neutral": "#f5f5f4",        
"base-100": "#FAF7F5",       
"info": "#047857",        
"success": "#36D399",        
"warning": "#FBBD23",       
"error": "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
