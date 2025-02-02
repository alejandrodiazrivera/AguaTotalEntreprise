import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    configureServer: (server) => {
      server.middlewares.use((req, res, next) => {
        if (res.statusCode === 404) {
          res.statusCode = 200;
          res.end('Custom 404 Page');
        } else {
          next();
        }
      });
    }
  }
})