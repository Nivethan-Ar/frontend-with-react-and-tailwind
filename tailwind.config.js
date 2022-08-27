/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'loop-studio-hero': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-hero.jpg')",
        'loop-studio-hero-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
