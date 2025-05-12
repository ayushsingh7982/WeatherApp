// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 10000,
  },
  preview: {
    host: '0.0.0.0',
    port: 10000,
    allowedHosts: ['weatherapp-wv8f.onrender.com'], // Add your Render URL here
  },
});
