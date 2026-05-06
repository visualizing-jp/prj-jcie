# prj_jcie コンテンツ更新ガイド

本リポジトリは、3感染症（`aids` / `tuberculosis` / `malariae`）のスクロール型コンテンツを、`public/config/<disease>/content.json` と `public/config/<disease>/content-map.json` を中心に更新する構成です。

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
- `public/config/<disease>/thumb/*`

### チャートデータ

- `public/data/charts/**/*.csv`
- `public/data/charts/**/*.json`

### 共通アセット

- `public/config/map-style.json`
- `public/data/countries-110m.json`
- `public/images/*`

---

## 3. `content.json` の基本

各ページは `steps` 配列で構成されます。1 step ごとに、テキスト・チャート・地図・画像のどれを見せるかを指定します。

```json
{
  "steps": [
    {
      "id": "step-id",
      "text": { "...": "..." },
      "chart": { "...": "..." },
      "map": { "...": "..." },
      "image": { "...": "..." },
      "source": { "...": "..." },
      "scrollHeight": "120vh"
    }
  ]
}
```

### よく使うキー

- `id`: step 識別子
- `text.content`: HTML文字列
- `text.position`: テキストカードの配置
- `chart.visible` / `map.visible` / `image.visible`: 背景レイヤーの切替
- `source`: step 単位の出典
- `scrollHeight`: step の最小高さ

### テキスト + 画像

```json
{
  "id": "image-step",
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

### テキスト + 地図

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
    "mode": "world-overview",
    "center": [138, 36],
    "zoom": 2.2,
    "highlightCountries": ["Japan"],
    "lightenNonVisited": true
  }
}
```

---

## 4. テキスト + チャート

チャートは `layout`（面割り）と `type`（描画器）の組み合わせで指定します。

- レイアウト: `single` / `dual` / `dual-vertical` / `grid`
- 種別: `line` / `sankey` / `pie` / `venn` / `bump` / `streamgraph`
- データ形式: `dataFormat: "csv" | "json" | "auto"`

### 現在使っている代表パターン

- `single + line`
- `dual + line`
- `dual-vertical + line`
- `grid + pie`
- `grid + venn`
- `single + sankey`
- `single + venn`
- `single + bump`

`streamgraph` は現行コードで利用可能ですが、現行コンテンツでは未採用です。

### 基本形

```json
{
  "id": "chart-step",
  "text": {
    "content": "<h2>チャート</h2>",
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
        "dataFile": "/data/charts/aids/trend.csv",
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

### レイアウトの考え方

- `single`: 1面表示。実装上は `charts[]` を複数入れると縦積みにもできます。
- `dual`: 2列表示。`dualTitle` と `dualAnnotations` を追加できます。
- `dual-vertical`: 2面の縦積み表示。`dualTitle` を追加できます。
- `grid`: `grid.rowPattern` で段組みを制御します。
- `dual` / `grid` はモバイルで縦積みに切り替わります。

### チャート領域の決まり方

現行実装では、チャートの横幅は `chart.position` ではなく `text.position` に応じて決まります。テキストが左または右にある場合、その幅ぶんだけチャート描画領域が縮みます。

### `line`

`line` は最も機能が多い種別です。

- `seriesField` で複数系列に対応
- `xDomain` / `yDomain` で表示範囲を固定
- `highlight` で特定系列を強調
- `seriesFilter` で表示する系列を絞り込む
- `projectionField` を使うと、その行以降を破線の予測線として描画
- `textOnlyLabels` で末端ラベルのガイド線を省略
- `annotations` で注釈線や矢印を追加
- `span.continueFromPrevious` で step をまたいだ継続アニメーションが可能

```json
"chart": {
  "visible": true,
  "layout": "single",
  "span": {
    "id": "aids-new-infections",
    "continueFromPrevious": true
  },
  "charts": [
    {
      "id": "line-main-01",
      "type": "line",
      "dataFile": "/data/charts/aids/trend_new_infections_normalized.csv",
      "dataFormat": "csv",
      "config": {
        "xField": "year",
        "yField": "value",
        "seriesField": "series",
        "xDomain": [1990, 1998],
        "title": "新規HIV感染者数の推移",
        "annotations": [
          {
            "type": "verticalLine",
            "year": 1996,
            "label": "ピーク年"
          },
          {
            "type": "horizontalLine",
            "id": "peak",
            "value": 3300000,
            "label": "ピーク値"
          }
        ]
      }
    }
  ]
}
```

`annotations` で使う `type` は以下です。

- `verticalLine`
- `horizontalLine`
- `callout`
- `arrow`

`arrow` は `horizontalLine` 同士を `from` / `to` で結ぶ用途です。

### `dual-vertical` の例

2つの折れ線グラフを上下に並べたいときは `layout: "dual-vertical"` を使います。

```json
{
  "chart": {
    "visible": true,
    "layout": "dual-vertical",
    "dualTitle": "上下2面の比較",
    "responsive": { "mobileStack": true },
    "charts": [
      {
        "id": "line-top",
        "type": "line",
        "dataFile": "/data/charts/tuberculosis/tb_infections_trend.csv",
        "dataFormat": "csv",
        "config": {
          "xField": "year",
          "yField": "value",
          "title": "上段"
        }
      },
      {
        "id": "line-bottom",
        "type": "line",
        "dataFile": "/data/charts/tuberculosis/tb_deaths_trend.csv",
        "dataFormat": "csv",
        "config": {
          "xField": "year",
          "yField": "value",
          "title": "下段"
        }
      }
    ]
  }
}
```

### `pie`

`pie` は2通りあります。

1. `label` / `value` 形式の配列をそのまま描く
2. CSV 1行から `rowField` / `rowValue` / `categoryColumns` で値を抜き、`normalizeTo` で残余を自動補完して 2分割円にする

```json
{
  "id": "pie-adult-world",
  "type": "pie",
  "dataFile": "/data/charts/aids/regional_hiv_coverage.csv",
  "dataFormat": "csv",
  "config": {
    "title": "全世界",
    "rowField": "地域",
    "rowValue": "全世界",
    "categoryColumns": ["成人（15歳以上）"],
    "primaryLabel": "治療中",
    "primaryColor": "#da3244",
    "normalizeTo": 100,
    "remainderLabel": "未治療",
    "remainderColor": "#999999"
  }
}
```

### `venn`

`venn` は単体 `sets` 形式か、`groups` を持つ JSON から `groupId` / `groupIndex` で対象を選びます。

```json
{
  "id": "venn-world",
  "type": "venn",
  "dataFile": "/data/charts/venn-unified.json",
  "dataFormat": "json",
  "config": {
    "groupId": "world",
    "colors": {
      "エイズ": "#da3244",
      "結核": "#354cf0"
    },
    "intersectionColor": "#7a3eca"
  }
}
```

`venn` でよく使うキー:

- `groupId`
- `groupIndex`
- `colors`
- `intersectionColor`
- `intersectionLabel`
- `hideValues`

### `sankey`

`sankey` は `nodes` / `links` JSON か、`source,target,value` CSV を使います。設定は基本的に `title` だけで十分です。

### `bump`

`bump` は順位推移専用です。主なキーは `xField` / `yField` / `seriesField` / `maxRank` / `xMin` / `xMax` / `highlight` です。

### `streamgraph`

`streamgraph` は積層の流れを見せる用途です。主なキーは `xField` / `yField` / `seriesField` / `xDomain` / `annotations` です。

---

## 5. 都市エピソード（`content-map.json` 連動）

`content.json` にはアンカー step を 1つだけ置きます。

```json
{
  "id": "city-episodes-anchor",
  "cityEpisodes": { "enabled": true },
  "chart": { "visible": false },
  "map": { "visible": false },
  "image": { "visible": false }
}
```

実際の都市 step は `content-map.json` から自動生成されます。

- `episode-intro` が先頭に追加される
- 各都市は `city-episodes-<id>` 形式の step になる
- 最後に固定クロージング step が追加される

### `content-map.json` の主なキー

- `timeline.title`
- `timeline.description`
- `cities[].id`
- `cities[].name`
- `cities[].nameEn`
- `cities[].country`
- `cities[].latitude`
- `cities[].longitude`
- `cities[].order`
- `cities[].data.title`
- `cities[].data.description`
- `cities[].data.url`
- `cities[].data.thumbnail`
- `cities[].style.color`
- `cities[].style.size`
- `cities[].transitions.scrollHeight`
- `cities[].transitions.routeType`

サムネイルは `public/config/<disease>/thumb/` に置き、`data.thumbnail` にはファイル名だけを入れます。

`routeType` は `start` / `same-location` / それ以外で都市ズームの初期値に影響します。

---

## 6. 出典表示

テキストカード末尾の出典表示には、以下の両方が使えます。

- step 直下の `source`
- `chart.charts[].config.source`

---

## 7. 最終クロージング（固定）

最終 step はコードで固定生成されます。`content.json` に `closing` を書いても、そのままは使われません。

- 実装箇所: `src/core/config-manager.js`
- 表示組み立て: `src/core/content-renderer.js`
- 見た目: `src/style.css`
- ロゴ画像: `public/images/fgfj-logo-horizontal-white.svg`

---

## 8. 更新時チェックリスト

1. 対象疾患の `content.json` / `content-map.json` / データファイルを確認する
2. テキストと背景レイヤーの対応を確認する
3. `npm run dev` で該当ページを確認する
4. `npm run build` でビルドが通ることを確認する

---

## 9. 補足ドキュメント

- 全体仕様: `_documents/ARCHITECTURE.md`
- チャート仕様: `_documents/ARCHITECTURE-CHARTS.md`
- チャート設定参照: `_documents/CHART-CONFIG-SCHEMA.md`
- 都市エピソード仕様: `_documents/ARCHITECTURE-CITY-EPISODES.md`
- 設定ガイド: `_documents/CONFIG-GUIDE.md`
