import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aiconf/', 
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Add this line to include JPG files with uppercase extension
})
