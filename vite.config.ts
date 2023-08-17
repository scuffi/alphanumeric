import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/alphanumeric/",
  plugins: [svelte()],
  assetsInclude: ['favicon.ico'],
})
