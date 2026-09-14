import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        hello: './demos/hello/index.html'
      }
    }
  },
  publicDir: 'public'
})
