# GitHub Pages デプロイガイド

## 🚀 自動デプロイの手順

### 1. GitHubリポジトリの作成
1. GitHub.comにログイン
2. 新しいリポジトリを作成
   - **リポジトリ名**: `ar-webtesting-demo`
   - **説明**: `🚀 完全HTTPS対応WebARデモ - Model-Viewer vs Hiroマーカー比較プロジェクト`
   - **公開設定**: Public
   - **README**: 作成しない（既存ファイルを使用）

### 2. ローカルリポジトリをプッシュ
```bash
# リモートリポジトリを追加
git remote add origin https://github.com/YOUR_USERNAME/ar-webtesting-demo.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

### 3. GitHub Pagesの有効化
1. GitHubリポジトリのページで「Settings」タブをクリック
2. 左メニューから「Pages」を選択
3. **Source**を「GitHub Actions」に設定
4. 自動的にデプロイが開始される

### 4. デプロイの確認
- **Actions**タブでビルド状況を確認
- 完了後、`https://YOUR_USERNAME.github.io/ar-webtesting-demo/` でアクセス可能

## 📝 vite.config.js の設定確認

リポジトリ名が `ar-webtesting-demo` と異なる場合は、以下を更新：

```javascript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
  // ...
});
```

## 🔧 GitHub Actions設定

`.github/workflows/deploy.yml` が以下の機能を提供：

- ✅ Node.js 18での自動ビルド
- ✅ npm依存関係の自動インストール
- ✅ Viteによる本番ビルド
- ✅ GitHub Pagesへの自動デプロイ
- ✅ mainブランチへのpush時自動実行

## 🌐 公開後のURL

```
https://YOUR_USERNAME.github.io/ar-webtesting-demo/
```

### 主要ページ
- **メインページ**: `/`
- **Model Viewer AR**: `/ar-model-viewer.html`
- **Hiro Marker AR**: `/ar-hiro-marker.html`

## 🛠️ カスタムドメインの設定（オプション）

1. DNSプロバイダーでCNAMEレコードを設定
2. GitHub Pages設定でカスタムドメインを追加
3. HTTPS強制を有効化

## 📱 モバイル対応確認

GitHub Pagesは自動的にHTTPS対応のため、以下の機能が利用可能：
- ✅ Webカメラアクセス
- ✅ AR Quick Look (iOS)
- ✅ ARCore (Android)
- ✅ PWA機能

## 🔍 トラブルシューティング

### ビルドエラーの場合
1. Actionsタブでエラーログを確認
2. 依存関係の問題: `package.json`の確認
3. パス問題: `vite.config.js`の`base`設定を確認

### デプロイが反映されない場合
1. GitHub Pages設定を再確認
2. キャッシュクリア（ブラウザの強制リロード）
3. DNS伝搬の待機（最大24時間）

---

**🎯 WebARデモの世界共有、完了まであと少し！**