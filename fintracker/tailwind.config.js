/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your brand color palette here
        blue: {
          DEFAULT: '#1e40af', // Replace with your shade of blue
        },
        black: {
          DEFAULT: '#262626'
        },
        pink: {
          DEFAULT: '#DD00FF'
        },
        blue: {
          DEFAULT: '#2A00FF'
        },
        accent: {
          DEFAULT: '#FF7578'
        },
      },
    },
  },
  plugins: [],
};
