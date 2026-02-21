# prj_jcie コンテンツ更新ガイド

本リポジトリは、3感染症（`aids` / `tuberculosis` / `malariae`）のスクロール型コンテンツを、`content.json` と `content-map.json` を中心に更新する構成です。

## 1. 開発環境

```bash
npm install
npm run dev
```

- 開発URL例
  - `http://localhost:5173/aids/`
  - `http://localhost:5173/tuberculosis/`
  - `http://localhost:5173/malariae/`

本番ビルド確認:

```bash
npm run build
```

---

## 2. どのファイルを編集するか

### 疾患別設定

- `public/config/aids/content.json`
- `public/config/tuberculosis/content.json`
- `public/config/malariae/content.json`

### 都市エピソード

- `public/config/<disease>/content-map.json`
- `public/config/<disease>/thumb/*`（サムネイル画像）

### チャートデータ

- `public/data/charts/*.csv`
- `public/data/charts/*.json`

### 地図データ（固定）

- `public/data/countries-110m.json`

---

## 3. 更新手順（基本）

## 3.1 テキスト + 画像

`content.json` の step で以下を設定します。

```json
{
  "id": "your-step-id",
  "text": {
    "content": "<h2>見出し</h2><p>本文</p>",
    "visible": true,
    "position": { "horizontal": "left", "vertical": "center", "width": "35%" }
  },
  "chart": { "visible": false },
  "map": { "visible": false },
  "image": {
    "visible": true,
    "src": "/images/photo-1.jpg",
    "alt": "説明",
    "opacity": 0.8
  }
}
```

---

## 3.2 テキスト + 地図

`content.json` の step で `map.visible: true` にします。

```json
{
  "id": "map-step",
  "text": {
    "content": "<h2>地図セクション</h2><p>説明</p>",
    "visible": true,
    "position": { "horizontal": "right", "vertical": "center", "width": "34%" }
  },
  "chart": { "visible": false },
  "image": { "visible": false },
  "map": {
    "visible": true,
    "center": [138, 36],
    "zoom": 2.2,
    "highlightCountries": ["Japan"],
    "lightenNonVisited": true
  }
}
```

- 地図は同一の `svg` レイヤーを共有します。
- Stepごとに `center` / `zoom` / `highlightCountries` を変える運用です。

---

## 3.3 テキスト + チャート

チャートは `layout`（配置）と `type`（種別）の組み合わせで指定します。

- レイアウト: `single` / `dual` / `grid`
- 種別: `line` / `sankey` / `pie` / `venn`
- データ形式: `dataFormat: "csv" | "json" | "auto"`

### 例: single + line

```json
{
  "id": "chart-line-single",
  "text": {
    "content": "<h2>折れ線グラフ</h2>",
    "visible": true,
    "position": { "horizontal": "right", "vertical": "center", "width": "32%" }
  },
  "map": { "visible": false },
  "image": { "visible": false },
  "chart": {
    "visible": true,
    "layout": "single",
    "responsive": { "mobileStack": true },
    "charts": [
      {
        "id": "line-main",
        "type": "line",
        "dataFile": "/data/charts/line-single.csv",
        "dataFormat": "csv",
        "config": {
          "xField": "year",
          "yField": "value",
          "seriesField": "series",
          "title": "タイトル"
        }
      }
    ]
  }
}
```

### 複数折れ線（1チャート内）

`line` は `seriesField`（既定: `series`）に対応しています。

```csv
year,series,value
1979,World,3200000
1979,High-burden Region,2100000
1980,World,3500000
1980,High-burden Region,2300000
```

### アノテーション（lineのみ）

```json
"annotations": [
  {
    "type": "verticalLine",
    "year": 1980,
    "label": "世界の年間新規感染者のピークに達した年"
  },
  {
    "type": "horizontalLine",
    "value": 3500000,
    "label": "世界の年間新規感染者のピーク"
  }
]
```

- 点線で描画されます。
- ラベルは小さめ固定サイズです。

### グリッド系のポイント

- `grid.rowPattern` で段組を指定（例: `[8,8]`, `[6,6]`, `[4,3]`）
- `grid.allowEmptyCells: true` で空白セル許容
- `dual/grid` はモバイルで強制縦積み（`mobileStack: true`）

---

## 3.4 都市エピソード（content-map.json 連動）

`content.json` には **1箇所だけ** アンカー step を置きます。

```json
{
  "id": "city-episodes-anchor",
  "cityEpisodes": { "enabled": true },
  "chart": { "visible": false },
  "map": { "visible": false },
  "image": { "visible": false }
}
```

実際の都市Stepは `content-map.json` から自動生成されます。

- `timeline.title`, `timeline.description`
- `cities[]` の `name`, `country`, `latitude`, `longitude`
- `cities[].data.title`, `description`, `url`, `thumbnail`
- `cities[].transitions.scrollHeight`

サムネイルは `public/config/<disease>/thumb/` に配置し、`thumbnail` でファイル名を指定します。

---

## 3.5 最終クロージング（固定）

最終Stepはコードで固定生成されます。`content.json` 側の `closing` は使われません。

- 実装箇所: `src/core/config-manager.js`, `src/core/content-renderer.js`, `src/style.css`
- ロゴ画像: `public/images/fgfj-logo-horizontal-white.svg`

文言や見た目を変更する場合は上記コード側を編集してください。

---

## 4. 更新時チェックリスト

1. 変更対象の疾患（`aids` / `tuberculosis` / `malariae`）を確認する
2. `content.json` / `content-map.json` / データファイルを更新する
3. `npm run dev` で該当ページを確認する
4. `npm run build` でビルドが通ることを確認する

---

## 5. 補足ドキュメント

- 全体仕様: `ARCHITECTURE.md`
- チャート仕様: `ARCHITECTURE-CHARTS.md`
- 都市エピソード仕様: `ARCHITECTURE-CITY-EPISODES.md`
- エージェント運用ルール: `AGENTS.md`
