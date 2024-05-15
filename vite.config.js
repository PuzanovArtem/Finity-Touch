import Inspect from 'vite-plugin-inspect'
import path from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: './',
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      jpg: {
   
        quality: 60,
       },
       
       png: {
         
         quality: 80,
       },
       webp: {
        quality: 80,
       },
    }),

    handlebars({
    partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
  
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        token: resolve(__dirname, 'token/index.html'),
        fund: resolve(__dirname, 'fund/index.html'),
        marketplace: resolve(__dirname, 'marketplace/index.html')
        
      }
    }

  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
  
})

