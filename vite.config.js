import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  // Remove or comment out the base path
  // base: '/My-Portfolio/'
})