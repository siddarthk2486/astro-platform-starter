import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['.netlify.app'], // Allow Netlify deploy preview domains
  },
});
