import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
          icons: ['lucide-react'],
          web3: ['@rainbow-me/rainbowkit', '@dynamic-labs/sdk-react-core', 'wagmi', 'viem']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'recharts',
      'lucide-react',
      'date-fns'
    ]
  },
  // Development server configuration
  server: {
    // Enable hot module replacement
    hmr: true,
    // Open browser on start
    open: true
  },
  // CSS configuration
  css: {
    // Enable CSS modules
    modules: {
      localsConvention: 'camelCase'
    },
    // PostCSS configuration for autoprefixer
    postcss: {
      plugins: []
    }
  }
})
