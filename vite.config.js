import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://mariam-huussein.github.io/my-waether-app/',
  plugins: [react()],
})
