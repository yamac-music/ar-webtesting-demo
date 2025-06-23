# WebAR開発体験記 - model-viewerで実現するシンプルな平面認識AR

## プロジェクトの経緯

最初はAR.jsを使った複雑なマーカーレスARや、QRマーカーベースARの実装を検討していましたが、開発を進める中で「もっとシンプルで確実に動作するWebARはないか？」という疑問が生まれました。

そこで調査した結果、Googleが開発した**model-viewer**という素晴らしいWebコンポーネントを発見。これにより、複雑なJavaScriptコードを一切書くことなく、HTMLタグの記述だけで本格的な平面認識ARが実現できることが判明しました。

## 技術選択の転換

### 従来のアプローチ（AR.js / QRマーカー）
- ✅ 高度なカスタマイズが可能
- ❌ 複雑な設定とコードが必要
- ❌ デバイス互換性の課題
- ❌ デバッグが困難
- ❌ マーカー配置の手間

### 新アプローチ（model-viewer）
- ✅ HTMLタグだけで実装完了
- ✅ iPhone AR Quick Look との完璧な連携
- ✅ Googleによる継続的なメンテナンス
- ✅ 即座にテスト・デプロイ可能
- ✅ マーカー不要の平面認識

## 実装内容

### 最終的なコード
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AR Model Viewer - 平面認識AR</title>
    
    <!-- model-viewerライブラリをCDNから読み込み -->
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
</head>
<body>
    <model-viewer
        src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
        alt="宇宙飛行士の3Dモデル"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1">
    </model-viewer>
</body>
</html>
```

### 各属性の役割
- `src`: 表示する3DモデルのURL（GLB/GLTF形式）
- `ar`: AR機能を有効化する必須属性
- `ar-modes="webxr scene-viewer quick-look"`: 各プラットフォーム対応
  - `webxr`: WebXR対応デバイス用
  - `scene-viewer`: Android用ARCore Scene Viewer
  - `quick-look`: iOS用AR Quick Look
- `camera-controls`: 3Dビューでの操作を可能に
- `auto-rotate`: 魅力的な自動回転
- `shadow-intensity="1"`: リアルな影表現

## ユーザー体験

1. **Webページアクセス**: iPhoneのSafariで開くと3Dモデルが表示
2. **AR起動**: 右下のARボタンをタップ
3. **平面検出**: iPhone標準のAR Quick Lookが起動し、自動で床・机を認識
4. **モデル配置**: 好きな場所にドラッグ&ドロップで配置
5. **自由な鑑賞**: 実際に歩き回って360度観察可能

## 開発のメリット

### 開発効率
- **開発時間**: 複雑な実装が10分で完了
- **デバッグ**: ブラウザで即座に確認可能
- **メンテナンス**: HTMLの属性変更のみ

### 技術的優位性
- **平面検出**: iOSネイティブの高精度検出を活用
- **パフォーマンス**: 最適化されたレンダリング
- **互換性**: 各プラットフォームに自動対応

## 過去の試行錯誤との比較

### これまでの開発履歴
1. **iOS Safari特化AR**: Three.js + WebGL - 複雑すぎて実用性低
2. **Safari対応AR**: センサー統合 - ドリフト問題で精度不足
3. **シンプルAR**: 最小構成 - 基本動作は確認できたが機能不足
4. **WebXR AR**: 最新Web標準 - ブラウザ対応が不完全
5. **QRマーカーベースAR**: 実用的だがマーカー配置が手間

### model-viewerの革新性
上記すべてのアプローチを超越する**シンプルさと実用性**を実現。

## 学んだこと

最新のWeb技術では「複雑＝高機能」ではなく、「シンプル＝強力」なアプローチが有効であることを実感しました。特にARのような新しい技術領域では、プラットフォーム標準機能を活用することで、より安定した体験を提供できることがわかりました。

## 今後の拡張検討

### 3Dモデルのアニメーション
現在調査中：
- GLBファイル内のアニメーションクリップ再生
- `animation-name`属性での制御
- ユーザーインタラクションによるアニメーション起動

### インタラクティブ機能
- ホットスポット配置による情報表示
- モデルパーツのクリック検出
- 状態変化の実装

## まとめ

WebARの未来は、このようなシンプルで強力なツールによって、より多くの開発者に門戸が開かれていくと確信しています。

**model-viewer**は、AR開発における「最適解」の一つであり、実用的なWebARアプリケーション開発の新しいスタンダードになりうる技術です。

---

*2025年開発 - AR実装の試行錯誤を経て到達したシンプルかつ強力なソリューション*