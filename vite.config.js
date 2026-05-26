import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
// Premium Tech Stack: Optimized for < 1s First Contentful Paint
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression for production builds
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
    // Brotli compression (better compression ratio)
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Enable minification with terser for smaller bundles
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Smart Chunking Strategy for optimal caching
        manualChunks: {
          // Core React runtime - rarely changes
          'vendor-react': ['react', 'react-dom'],
          // Routing - stable dependency
          'vendor-router': ['react-router-dom'],
          // Animation engine - GPU-accelerated
          'vendor-motion': ['framer-motion'],
          // Smooth scroll engine
          'vendor-lenis': ['lenis'],
          // Styled components runtime
          'vendor-styled': ['styled-components'],
          // UI utilities
          'vendor-ui': ['lucide-react', 'clsx', 'tailwind-merge', 'class-variance-authority'],
          // Data fetching
          'vendor-query': ['@tanstack/react-query'],
        },
      },
    },
    // Larger chunk size limit for optimized bundles
    chunkSizeWarningLimit: 500,
    // Enable source maps for debugging
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lenis', 'styled-components'],
  },
})
