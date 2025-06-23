# WebAR 比較デモプロジェクト

🚀 **完全HTTPS対応のWebARデモサイト** - Model-Viewer vs Hiroマーカー

🌟 **[ライブデモを見る](https://your-username.github.io/ar-webtesting-demo/)**

## ✨ 特徴

- 📱 **完全HTTPS対応** - mkcertによる信頼できる証明書
- 🚀 **デュアルサーバー環境** - ViteとExpressの両方をサポート
- 🎯 **複数のWebAR技術** - AR.js、Model Viewerの比較
- 🔧 **GitHub Pages対応** - 自動デプロイと公開
- 📖 **包括的ドキュメント** - 詳細なセットアップガイド

## 🎮 技術スタック比較

### 1. Model-Viewer AR（推奨）
- **ファイル**: `ar-model-viewer.html`
- **実装時間**: 10分
- **特徴**: HTMLタグだけで平面認識AR
- **対応**: iPhone AR Quick Look / Android ARCore

### 2. AR.js + A-Frame（上級者向け）
- **ファイル**: `ar-hiro-marker.html`
- **実装時間**: 2-3時間
- **特徴**: Hiroマーカーベースの軽量AR
- **対応**: WebRTC対応ブラウザ

## 🚀 クイックスタート

### 開発環境のセットアップ
```bash
# 依存関係のインストール
npm install

# HTTPS開発サーバー（Vite）
npm run dev-https

# HTTPS開発サーバー（Express）
npm run dev-express
```

### アクセス方法
- **Viteサーバー**: https://localhost:3001
- **Expressサーバー**: https://localhost:3000

⚠️ **mkcert証明書により、ブラウザ警告なしでアクセス可能！**

## 📦 GitHub Pagesでの公開

このプロジェクトはGitHub Actionsによる自動デプロイに対応しています。

### 公開手順
1. GitHubリポジトリを作成
2. コードをpush
3. GitHub Pagesを有効化
4. 自動デプロイが実行される

## 🎯 使用方法

### Model-Viewer AR
1. デモページにアクセス
2. 右下のARボタンをタップ
3. iPhoneの場合: AR Quick Look自動起動
4. 平面にモデルを配置

### Hiroマーカー AR
1. `hiro-marker.svg`をダウンロード・印刷
2. デモページにアクセス
3. カメラ権限を許可
4. マーカーをカメラに向ける

## 🔧 技術詳細

### HTTPS環境
- **ローカル開発**: mkcert証明書（信頼できるCA署名）
- **本番環境**: GitHub Pages (自動HTTPS)
- **ブラウザ警告**: 完全に解決

### ビルドシステム
- **開発**: Vite (HMR対応)
- **ビルド**: Vite (最適化済み)
- **デプロイ**: GitHub Actions

## 📚 ドキュメント

- [HTTPS設定完全ガイド](./blog/HTTPS_SETUP_COMPLETE_BLOG.md)
- [AR開発ブログ](./blog/AR_DEVELOPMENT_BLOG.md)
- [技術比較レポート](./COMPARISON_REPORT.md)

## 🌐 ブラウザサポート

- ✅ Chrome / Chromium系
- ✅ Firefox
- ✅ Safari (iOS/macOS)
- ✅ Edge
- ✅ Brave

## 🛠️ 開発者向け情報

### プロジェクト構成
```
ar-webtesting-demo/
├── index.html              # メインページ
├── ar-hiro-marker.html     # AR.js デモ
├── ar-model-viewer.html    # Model Viewer デモ
├── vite.config.js          # Vite設定
├── package.json            # npm設定
├── .github/workflows/      # GitHub Actions
└── blog/                   # ドキュメント
```

### カスタマイズ
```javascript
// vite.config.js
export default defineConfig({
  base: '/your-repo-name/',  // GitHub Pages用
  server: {
    https: true,             // HTTPS有効化
    port: 3001              # ポート設定
  }
});
```

## 🤝 コントリビューション

1. Fork this repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 ライセンス

MIT License

## 🙋‍♂️ サポート

問題や質問がある場合は、Issues でお知らせください。

---

**🎯 WebAR開発の未来を、今すぐ体験しよう！**