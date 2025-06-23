# HTTPS サーバー起動ガイド

## 🚨 重要: Hiroマーカー ARにはHTTPS環境が必須です

WebカメラにアクセスするためにHTTPS接続が必要です。以下の方法でローカルHTTPSサーバーを起動してください。

## 方法1: Vite開発サーバー（推奨）

### セットアップ
```bash
# プロジェクトディレクトリに移動
cd /Users/s.y/Desktop/AR_test_0622

# 依存関係をインストール
npm install

# 開発サーバー起動（HTTPS自動対応）
npm run dev
```

### 特徴
- ✅ HTTPS自動設定
- ✅ ブラウザ自動起動
- ✅ ホットリロード対応
- ✅ モバイルアクセス可能

## 方法2: Python簡易サーバー

### 手順
```bash
# 別のポートで起動（8000が使用中の場合）
python3 -m http.server 8080
```

### アクセス方法
1. ブラウザで `http://localhost:8080` にアクセス
2. セキュリティ警告が表示された場合:
   - 「詳細設定」をクリック
   - 「localhost に進む（安全ではありません）」をクリック
3. `ar-hiro-marker.html` をクリックして開く

## 方法2: VSCode Live Server拡張

### 手順
1. VSCodeでLive Server拡張をインストール
2. `ar-hiro-marker.html`を右クリック
3. "Open with Live Server"を選択

### メリット
- 自動でHTTPS化
- ファイル変更時の自動リロード
- モバイルデバイスからのアクセス可能

## 方法3: Node.js http-server

### インストール
```bash
npm install -g http-server
```

### 起動
```bash
# プロジェクトディレクトリで実行
http-server -p 8000 -o
```

## 方法4: 自己証明書付きHTTPSサーバー

### Python3 + SSL
```bash
# 自己証明書作成
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

# HTTPSサーバー起動
python3 -c "import http.server, ssl; server = http.server.HTTPServer(('localhost', 8000), http.server.SimpleHTTPRequestHandler); server.socket = ssl.wrap_socket(server.socket, certfile='cert.pem', keyfile='key.pem', server_side=True); server.serve_forever()"
```

## カメラ権限の確認

### Chrome/Safari
1. アドレスバーの左側のカメラアイコンをクリック
2. 「許可」を選択
3. ページをリロード

### トラブルシューティング
- **カメラが起動しない**: HTTPSサーバーで実行されているか確認
- **マーカーが認識されない**: 十分な明るさと距離を確保
- **パフォーマンスが悪い**: ブラウザのタブを他に開きすぎていないか確認

## 各方法の比較

| 方法 | 難易度 | 設定時間 | 推奨度 |
|------|--------|----------|--------|
| Python HTTP | ⭐️ | 30秒 | ⭐️⭐️⭐️⭐️⭐️ |
| Live Server | ⭐️⭐️ | 2分 | ⭐️⭐️⭐️⭐️ |
| http-server | ⭐️⭐️ | 1分 | ⭐️⭐️⭐️ |
| Python HTTPS | ⭐️⭐️⭐️ | 5分 | ⭐️⭐️ |

## 起動確認

サーバー起動後、以下で動作確認してください：

1. ブラウザコンソールで「カメラ初期化中...」が表示される
2. カメラ権限の許可を求められる
3. 「カメラ準備完了」のステータスが表示される
4. Hiroマーカーを向けると「マーカー検出中」になる

---

*HTTPS環境が整えばHiroマーカー ARが正常に動作します！*