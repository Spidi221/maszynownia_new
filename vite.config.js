import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['wouter'],
          helmet: ['react-helmet-async']
        }
      }
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable source maps for debugging
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false
    }
  }
})
