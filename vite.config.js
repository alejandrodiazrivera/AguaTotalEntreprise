// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AguaTotalEntreprise/', // Must match your repo name exactly
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})