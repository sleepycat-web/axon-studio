import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://axonstudio.tech',
  output: 'server', // Use 'server' to enable server-side rendering
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()]
});
