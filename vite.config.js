import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.giphy.com/v1', // URL base de la API
        changeOrigin: true, // Cambia el origen para evitar bloqueos de CORS
        rewrite: (path) => path.replace(/^\/api/, ''), // Opcional: elimina el prefijo /api
      },
    },
  },
});
