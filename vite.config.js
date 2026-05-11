import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: "0.0.0.0", // Allow Vite to listen on all network interfaces
    port: 3000, // Or any available port
    hmr: {
      host: "192.168.254.107", // Replace with your local machine's IP address
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
})
