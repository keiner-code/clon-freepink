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
      backgroundImage: {
                       //url("https://fps.cdnpk.net/photos/home/cover.webp")
        'header-image': "url('https://fps.cdnpk.net/photos/home/cover.webp')"
      }
    },
  },
  plugins: [],
}

