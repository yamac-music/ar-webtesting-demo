import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ar-webtesting-demo/' : '/',
  server: {
    port: 3001, // HTTPSサーバーと区別するため
    host: 'localhost',
    open: true,
    cors: true,
    https: fs.existsSync('./ssl/localhost+2-key.pem') ? {
      key: fs.readFileSync('./ssl/localhost+2-key.pem'),
      cert: fs.readFileSync('./ssl/localhost+2.pem')
    } : false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        'ar-model-viewer': 'ar-model-viewer.html',
        'ar-hiro-marker': 'ar-hiro-marker.html'
      }
    }
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    open: true
  }
});