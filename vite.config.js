import Inspect from 'vite-plugin-inspect'
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      jpg: {
   
        quality: 60,
       },
       
       png: {
         
         quality: 100,
       },
    }),

    handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login/index.html'),
        page: resolve(__dirname, 'page/index.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
  
})

