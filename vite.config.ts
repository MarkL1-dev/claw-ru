// ... existing imports ...

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    strictPort: true,
    // Add all possible CodeSandbox hosts to allowed hosts
    allowedHosts: ['39m5g9-5173.csb.app', 'drhngr-5173.csb.app', 'localhost', '.csb.app']
  }
})