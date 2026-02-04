// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://grove-co.github.io',
  base: '/grove-landing-page',
  vite: {
    plugins: [tailwindcss()]
  }
});