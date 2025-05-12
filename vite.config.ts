import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $lib: '/src/lib',
      $components: '/src/lib/components',
    },
  },
  server: {
    host: true, // Asegúrate de que Vite escuche en todas las interfaces
    port: 5173, // El puerto que Vite está utilizando (puede variar)
    allowedHosts: [
      'localhost',
      '9befbf13-f2c3-41a3-aff2-ce7fc1f72c18-00-2i8hvjrsyoudn.kirk.replit.dev'
    ]
  }
});
