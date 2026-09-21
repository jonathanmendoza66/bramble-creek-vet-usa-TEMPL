import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      closeBundle: {
        sequential: true,
        async handler() {
          const { copyFileSync } = await import('fs');
          copyFileSync('dist/index.html', 'dist/404.html');
        },
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
