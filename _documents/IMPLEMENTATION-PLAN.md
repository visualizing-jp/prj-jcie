# 実装計画: ARCHITECTURE.mdベースのWebコンテンツ再構築

## Context

現行プロジェクトはコードが複雑になりすぎたため、ARCHITECTURE.mdの機能要件をもとにゼロから再構築する。WebGL（Three.js）とD3.jsを組み合わせ、日経新聞オリンピック特集のようなスクロール体験を実現する。ARCHITECTURE-CHARTS.md、ARCHITECTURE-CITY-EPISODES.mdの詳細は後続フェーズで対応。

## 技術スタック

| 技術 | 用途 |
|------|------|
| **Vite** | ビルドツール・開発サーバー |
| **Three.js** | WebGL背景エフェクト（パーティクル、グラデーション、画像効果） |
| **GSAP ScrollTrigger** | スクロール連動アニメーション制御 |
| **Lenis** | スムーズスクロール |
| **D3.js v7** | チャート・地図のSVG描画 |
| **Tailwind CSS v4** | スタイリング |
| **Vanilla JS (ES Modules)** | フレームワーク不使用 |

## アーキテクチャ

### レイヤー構造（z-index順）
```
z-50: ヘッダーナビゲーション
z-40: テキストカード（スクロールコンテンツ）
z-30: SVGレイヤー（D3.js チャート・地図）
z-20: WebGL背景（Three.js キャンバス）
z-10: 画像レイヤー
```

### モジュール構成
```
App (main.js)
├── ConfigManager        # 設定読み込み・管理
├── ThemeManager         # 感染症別テーマ管理
├── ScrollController     # GSAP ScrollTrigger + Lenis
├── LayerOrchestrator    # レイヤー排他制御
│   ├── ChartLayer       # D3.js SVGチャート
│   ├── MapLayer         # D3.js SVG地図
│   ├── ImageLayer       # 画像表示
│   └── WebGLLayer       # Three.js 背景エフェクト
└── ContentRenderer      # テキストカード管理
```

### スクロール制御方針
- **GSAP ScrollTrigger scrub**: 連続アニメーション（WebGL背景のパラメータ変化等）
- **セクション進入トリガー**: レイヤー切替・チャート描画開始
- **Lenis**: 慣性スクロールによる滑らかな体験
- **逆スクロール完全対応**: 各レイヤーの状態復元

### WebGLの適用範囲（KISS原則）
WebGLは**プログレッシブエンハンスメント**として使用。コア機能（チャート・地図）はSVGで実装。

- 背景パーティクルエフェクト
- グラデーション背景の動的変化
- 画像へのエフェクト（ぼかし、色調変化）
- Step間トランジション演出

### content.json互換性
既存のcontent.json構造を維持。オプションでscroll/webgl設定を追加可能。

---

## 実装フェーズ

### Phase 0: プロジェクト基盤
- Viteプロジェクト初期化
- ディレクトリ構造作成
- 依存パッケージインストール（three, gsap, lenis, d3, tailwindcss）
- Vite設定（マルチページ対応、パス解決）
- 開発サーバー動作確認

### Phase 1: スクロール基盤 + レイヤー構造
- HTML基本構造（4層レイヤー）
- Lenis初期化とスムーズスクロール
- GSAP ScrollTrigger設定
- ConfigManager（content.json読み込み）
- Step要素の動的生成
- レイヤー排他制御（LayerOrchestrator）

### Phase 2: テキスト表示 + 基本トランジション
- ContentRenderer実装
- テキストカードのポジショニング（horizontal/vertical/width）
- Step進入時のフェードイン/アウト
- テキストとレイヤーの連動

### Phase 3: WebGL背景エフェクト
- Three.js初期化（WebGLLayer）
- 背景パーティクルシステム
- 感染症別カラーテーマ連動
- Step連動のパラメータ変化（scrub）
- Step0オープニング演出

### Phase 4: 画像レイヤー
- ImageLayer実装
- Step0背景画像特別処理
- opacity制御とトランジション

### Phase 5: チャートレイヤー
- ChartLayer基盤
- 折れ線グラフレンダラー
- 棒グラフレンダラー
- 円グラフレンダラー
- レイアウト対応（single/dual/triple/grid）
- transitionモード（Object Constancy）
- フィルタリング・アノテーション

### Phase 6: 地図レイヤー
- MapLayer基盤
- TopoJSON世界地図描画
- 地域カラーリング
- ズーム・パントランジション
- 都市マーカー表示

### Phase 7: マルチ感染症 + 統合テスト
- 3感染症対応（disease-config連携）
- ヘッダーナビゲーション
- レスポンシブ対応確認
- 逆スクロール動作確認
- パフォーマンス最適化

---

## ディレクトリ構造（新規）
```
src/
├── index.html
├── main.js                    # エントリポイント
├── style.css                  # Tailwind CSS
├── core/
│   ├── config-manager.js      # 設定管理
│   ├── scroll-controller.js   # スクロール制御
│   ├── layer-orchestrator.js  # レイヤー排他制御
│   └── content-renderer.js    # テキストカード
├── layers/
│   ├── chart-layer.js         # D3.jsチャート
│   ├── map-layer.js           # D3.js地図
│   ├── image-layer.js         # 画像
│   └── webgl-layer.js         # Three.js背景
├── charts/
│   ├── line-renderer.js
│   ├── bar-renderer.js
│   ├── pie-renderer.js
│   └── grid-renderer.js
└── utils/
    ├── theme.js               # テーマ管理
    └── constants.js           # 定数
```

## 検証方法
1. `npm run dev` で開発サーバー起動、ブラウザで表示確認
2. 各Phase完了時にスクロール動作・レイヤー切替を目視確認
3. 逆スクロール時の状態復元を確認
4. レスポンシブ（PC/タブレット/スマホ）での表示確認
5. WebGL非対応環境でのフォールバック動作確認

## 注意事項
- ARCHITECTURE-CHARTS.md、ARCHITECTURE-CITY-EPISODES.mdの詳細はPhase 5, 6で参照
- コンテンツ（テキスト・データファイル）は既存のものをそのまま使用
- WebGLが使えない環境でもチャート・地図・テキストは表示される設計
