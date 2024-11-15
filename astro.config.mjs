import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import vercel from '@astrojs/vercel/serverless';

 export default defineConfig({
  adapter: vercel(),
   output: 'server',
  integrations: [tailwind(), compress()],
});
