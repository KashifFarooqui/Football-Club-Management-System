import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},  // This is often needed to mimic Node.js environment variables
    Buffer: ['buffer', 'Buffer'],  // Include the buffer polyfill
  },
  optimizeDeps: {
    include: ['buffer'],  // Ensure 'buffer' is included in the dependencies
    util: ['util'],  // Polyfill for util
  },
  plugins: [react()],
})
