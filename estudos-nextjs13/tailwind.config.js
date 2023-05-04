/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        // base: {
        //   primary: '#3f89e2',
        //   secondary: '#d1066f',
        //   accent: '#e5534b',
        //   neutral: '#19161D',
        //   info: '#4280C2',
        //   success: '#2DE6B2',
        //   warning: '#E9980C',
        //   error: '#F35877',
        //   'base-100': '#fff'
        // }
      }
    ]
  }
}


