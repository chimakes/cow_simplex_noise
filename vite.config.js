import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  root: 'src',
  publicDir: '../public/',

  server:
  {
    host: true, // Open to local network and display URL
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
  },
  build:
  {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  },
})
