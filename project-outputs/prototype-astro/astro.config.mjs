import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  base: '/suprabazar/ux/',
  build: { format: 'file' },
});
