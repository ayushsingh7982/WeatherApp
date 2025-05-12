// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',       // Allow access from any host
    port: 10000,           // Use the port required by Render
  },
  preview: {
    host: '0.0.0.0',       // Allow preview from any host
    port: 10000,
    allowedHosts: ['.'],   // Allow all hosts
  },
});
