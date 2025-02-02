// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AguaTotalEntreprise/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets' // Ensures proper asset organization
  }
})