/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        presabi: {
          blue: '#0f3d8c',
          sky: '#2aa9d6',
          turquoise: '#15b8b0',
          light: '#eff8ff',
          accent: '#d64545'
        }
      },
      boxShadow: {
        card: '0 8px 30px rgba(15, 61, 140, 0.12)'
      }
    }
  },
  plugins: []
};
