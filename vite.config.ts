import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base по умолчанию /portfolio/; PR-превью переопределяет через VITE_BASE
// (напр. /portfolio/pr-preview/pr-16/), см. .github/workflows/preview.yml
export default defineConfig({
  base: process.env.VITE_BASE ?? '/portfolio/',
  plugins: [react(), tailwindcss()],
})
