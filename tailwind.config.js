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

        'loop-studio-deep-earth': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-deep-earth.jpg')",
        'loop-studio-deep-earth-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-deep-earth.jpg')",

        'loop-studio-night-arcade': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-night-arcade.jpg')",
        'loop-studio-night-arcade-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-night-arcade.jpg')",

        'loop-studio-soccer-team': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-soccer-team.jpg')",
        'loop-studio-soccer-team-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-soccer-team.jpg')",

        'loop-studio-the-grid': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-grid.jpg')",
        'loop-studio-the-grid-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-grid.jpg')",

        'loop-studio-from-up': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-from-above.jpg')",
        'loop-studio-from-up-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-from-above.jpg')",

        'loop-studio-pocket-borealis': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-pocket-borealis.jpg')",
        'loop-studio-pocket-borealis-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-pocket-borealis.jpg')",

        'loop-studio-the-curiosity': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-curiosity.jpg')",
        'loop-studio-the-curiosity-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-curiosity.jpg')",

        'loop-studio-make-it': "url('/src/pages/loop-studios-landing/assets/images/mobile/image-fisheye.jpg')",
        'loop-studio-make-it-desktop': "url('/src/pages/loop-studios-landing/assets/images/desktop/image-fisheye.jpg')",
      },
    },
  },
  plugins: [],
};
