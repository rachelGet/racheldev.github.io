import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/react-swc' 
// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),],
  base: '/',
})
