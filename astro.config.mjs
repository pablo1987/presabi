import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://presabi.com.ar',
  integrations: [tailwind()],
});
