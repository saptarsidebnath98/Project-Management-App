import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Project-Management-App/",
  plugins: [react()],
  // server: {
  //   port: 3000, // or any other available port
  // },
})
