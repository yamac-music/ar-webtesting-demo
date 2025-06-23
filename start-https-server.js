import express from 'express';
import https from 'https';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// 静的ファイルを提供
app.use(express.static(__dirname));

// HTMLファイルのルーティング
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/ar-model-viewer.html', (req, res) => {
  res.sendFile(join(__dirname, 'ar-model-viewer.html'));
});

app.get('/ar-model-viewer-animated.html', (req, res) => {
  res.sendFile(join(__dirname, 'ar-model-viewer-animated.html'));
});

app.get('/ar-model-viewer-custom.html', (req, res) => {
  res.sendFile(join(__dirname, 'ar-model-viewer-custom.html'));
});

app.get('/ar-hiro-marker.html', (req, res) => {
  res.sendFile(join(__dirname, 'ar-hiro-marker.html'));
});

// HTTPS設定
const httpsOptions = {
  key: readFileSync('./ssl/localhost+2-key.pem'),
  cert: readFileSync('./ssl/localhost+2.pem')
};

const port = 3000;

https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`🚀 HTTPS server running at https://localhost:${port}`);
  console.log('📱 AR demos are ready!');
  
  // ブラウザを自動で開く
  import('open').then(open => {
    open.default(`https://localhost:${port}`);
  });
});