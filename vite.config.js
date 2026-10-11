import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Evita falhas de realpath em pastas Windows cujo nome contem acentos.
    preserveSymlinks: true,
  },
  server: {
    // Durante o desenvolvimento, encaminha chamadas da interface ao servidor Node.
    proxy: {
      '/api': 'http://localhost:3000',
      '/health': 'http://localhost:3000',
    },
  },
})
