
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // For Vercel (use '/' instead of '/my-portfolio/')
   build: {
    cssCodeSplit: true, // Ensures CSS is generated
    assetsDir: 'assets', // Organizes CSS/JS in dist folder
  }
  
})
