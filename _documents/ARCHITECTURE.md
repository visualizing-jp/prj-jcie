# 概要設計書

本書は、`prj_jcie` の現行実装を高いレベルで説明する。

---

## 1. プロジェクト概要

本プロジェクトは、エイズ、結核、マラリアの3感染症について、データと物語を組み合わせたスクロール型の啓発コンテンツを提供する静的 Web アプリケーションである。

特徴:

- 疾患別ページは共通アプリを使い回す
- 差分は主に `public/config/<disease>/content.json` と `content-map.json` で吸収する
- チャート、地図、画像は背景レイヤーとして排他的に切り替わる

---

## 2. 実ディレクトリ構成

```text
prj_jcie/
├── src/                  # Vite の root。HTML と共通アプリ本体
│   ├── aids/
│   ├── tuberculosis/
│   ├── malariae/
│   ├── core/
│   ├── layers/
│   └── utils/
├── public/               # ランタイム参照する設定・データ・画像
│   ├── config/
│   ├── data/
│   └── images/
├── docs/                 # Vite build 出力先
├── _documents/           # 仕様書・補助ドキュメント
└── vite.config.js
```

### ビルド設定

- `root: src`
- `publicDir: ../public`
- `outDir: ../docs`
- `base: /prj-jcie/`

---

## 3. 技術構成

| 技術 | 用途 |
|------|------|
| Vite | 開発サーバーとビルド |
| Tailwind CSS v4 | スタイリング基盤 |
| D3.js | チャート描画 |
| `@upsetjs/venn.js` | ベン図レイアウト |
| TopoJSON | 地図データ読み込み |
| MapLibre GL JS + PMTiles | 地図タイル表示 |
| Three.js | WebGL 背景 |
| GSAP + ScrollTrigger | スクロール連動 |
| Lenis | スムーズスクロール |

---

## 4. ページ構成

### 4.1 エントリポイント

- トップページ: `src/index.html` + `src/main.js`
- 疾患ページ: `src/<disease>/index.html` + `src/disease-main.js`

疾患ページは `body[data-disease]` に疾患IDを持ち、共通アプリがその値から設定ファイルを読み分ける。

### 4.2 初期化フロー

1. `HeaderNav` を描画
2. `ConfigManager` が `content.json` と `content-map.json` を読む
3. `ContentRenderer` が step DOM を生成
4. `LayerOrchestrator` が背景レイヤーを初期化
5. `ScrollController` がスクロールトリガーを張る

---

## 5. レイヤー構成

疾患ページの主要要素は次のとおり。

| 要素 | 役割 |
|------|------|
| `#image-layer` | 背景画像 |
| `#webgl-layer` | WebGL 背景 |
| `#svg-layer` | 地図とチャートの共通コンテナ |
| `#scroll-content` | step コンテンツ |
| `#header-nav` | ヘッダーナビゲーション |

### `#svg-layer` の内部

`LayerOrchestrator` が `#svg-layer` 内に 2 つのサブレイヤーを動的生成する。

- map host
- chart host

地図とチャートは同時に出さず、step ごとにどちらか一方を表示する。

---

## 6. Step モデル

`content.json` の各 step は、次のような表示状態を持つ。

```json
{
  "id": "step-id",
  "text": { ... },
  "chart": { ... },
  "map": { ... },
  "image": { ... },
  "source": { ... },
  "scrollHeight": "120vh"
}
```

### step の主な種類

- テキスト + 画像
- テキスト + 地図
- テキスト + チャート
- 都市エピソード
- 固定クロージング

### スクロール制御

- `ScrollController` は `GSAP ScrollTrigger` を使う
- 各 `.step` に対して `onEnter` / `onEnterBack` / `onLeave` / `onLeaveBack` を発火する
- 同時に全体進捗バーも更新する

---

## 7. `ConfigManager` の正規化

`ConfigManager` は、設定読み込み後に次の処理を行う。

1. `content-map.json` があれば都市エピソード anchor を展開
2. `episode-intro` と `city-episodes-*` を生成
3. 末尾に `fixed-closing` step を追加

### 都市エピソード

- `timeline.title` / `timeline.description` を導入 step に使う
- `cities[]` を `order` で並べ替える
- 各都市の `data.title` / `data.description` / `data.url` / `data.thumbnail` をカード化する
- `transitions.routeType` に応じてズームの既定値を変える

### 固定クロージング

- `content.json` 内の `closing` はそのままは使わない
- 最終 step はコード側で `fixed-closing` として追加する

---

## 8. チャート構成

チャートの詳細は [ARCHITECTURE-CHARTS.md](ARCHITECTURE-CHARTS.md) を参照。

### 対応レイアウト

- `single`
- `dual`
- `dual-vertical`
- `grid`

### 対応種別

- `line`
- `sankey`
- `pie`
- `venn`
- `bump`
- `streamgraph`

### 表示上の重要点

- チャート描画幅は `text.position` に応じて縮む
- `dual` / `grid` はモバイルで縦積み
- `line` は `span.continueFromPrevious` による継続アニメーションに対応

---

## 9. 地図構成

地図は `MapLayer` が担当する。

主なモード:

- `world-overview`
- `single-city`

主な機能:

- `center` / `zoom` による表示位置制御
- `highlightCountries` / `highlightRegions`
- `lightenAllCountries`
- `lightenNonVisited`
- 都市マーカー表示

都市エピソードでは、訪問済み都市マーカーを蓄積しながら `single-city` モードで遷移する。

---

## 10. 画像構成

画像は `ImageLayer` が担当する。

主な設定:

- `src`
- `alt`
- `opacity`
- `fit`
- `objectPosition`
- `colorOverlay`

`fit` は `cover` / `width` / `height` / `contain` を受ける。

---

## 11. トップページ

トップページは `TopPage` が描画し、3感染症への導線とグローブアニメーションを持つ。

- 疾患カードは `DISEASE_THEMES` を元に生成
- 各カードは `<base>/<disease>/` に遷移

---

## 12. テーマ

疾患別テーマカラーは `src/utils/theme.js` で定義される。

| 疾患 | Primary |
|------|---------|
| `aids` | `#da3244` |
| `tuberculosis` | `#354cf0` |
| `malariae` | `#f2df4a` |

このテーマ色はチャートの枠や画像オーバーレイ、各種 UI に流用される。
