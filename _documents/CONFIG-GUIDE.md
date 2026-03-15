# コンテンツ設定ガイド

configファイルを編集してコンテンツを更新するための運用ガイド。

---

## 1. 設定ファイル一覧

```
public/config/
├── map-style.json              # 地図スタイル（共通）
├── aids/
│   ├── content.json            # Stepごとの表示設定
│   └── content-map.json        # 都市エピソードデータ
├── tuberculosis/
│   ├── content.json
│   └── content-map.json
└── malariae/
    ├── content.json
    └── content-map.json
```

| ファイル | 影響範囲 | 編集頻度 |
|---------|---------|---------|
| `content.json` | 各感染症のStep構成・テキスト・チャート・地図設定 | 高 |
| `content-map.json` | 都市エピソード（地図上の都市データ） | 中 |
| `map-style.json` | 地図の色・透明度・マーカー・ラベルの見た目 | 低 |

---

## 2. content.json — Step設定

各感染症のストーリーを構成するStepの配列。スクロールで各Stepに到達すると、指定されたレイヤー（テキスト・チャート・地図・画像）が表示される。

### 基本構造

```json
{
  "steps": [
    {
      "id": "step-id",
      "text": { ... },
      "chart": { ... },
      "map": { ... },
      "image": { ... }
    }
  ]
}
```

### text設定

```json
"text": {
  "content": "<h2>タイトル</h2><p>本文テキスト</p>",
  "visible": true,
  "position": {
    "horizontal": "left | center | right",
    "vertical": "top | center | bottom",
    "width": "34%"
  }
}
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `content` | string | HTML形式のテキスト |
| `visible` | boolean | テキストカードの表示/非表示 |
| `position.horizontal` | string | 水平位置（`left`, `center`, `right`） |
| `position.vertical` | string | 垂直位置（`top`, `center`, `bottom`） |
| `position.width` | string | テキストカードの幅（例: `"34%"`） |

### map設定

```json
"map": {
  "visible": true,
  "mode": "world-overview",
  "center": [経度, 緯度],
  "zoom": 2,
  "highlightCountries": ["United States of America"],
  "highlightRegions": ["africa", "asia", "europe"],
  "lightenNonVisited": true,
  "lightenAllCountries": true
}
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `visible` | boolean | 地図レイヤーの表示/非表示 |
| `mode` | string | 地図モード（`world-overview`, `single-city`, `cities-timeline`） |
| `center` | [number, number] | 地図の中心座標 `[経度, 緯度]` |
| `zoom` | number | ズームレベル（1.0が標準、大きいほどズームイン） |
| `highlightCountries` | string[] | ハイライト表示する国名のリスト |
| `highlightRegions` | string[] | ハイライトする地域（`europe`, `asia`, `africa`） |
| `lightenNonVisited` | boolean | ハイライト対象外の国を薄く表示 |
| `lightenAllCountries` | boolean | 全ての国を薄く表示 |

**国名について**: TopoJSONデータの `properties.name` に一致する英語名を使用する。例: `"United States of America"`（`"USA"` は不可）。

**地域名について**: `highlightRegions` で使える値は `europe`, `asia`, `africa` の3つ。

### chart設定

チャートの詳細スキーマは [CHART-CONFIG-SCHEMA.md](CHART-CONFIG-SCHEMA.md) を参照。

```json
"chart": {
  "visible": true,
  "layout": "single | dual | grid",
  "charts": [
    {
      "id": "chart-id",
      "type": "line | pie | venn | sankey",
      "dataFile": "/data/charts/aids/filename.csv",
      "dataFormat": "csv | json",
      "config": { ... }
    }
  ]
}
```

### image設定

```json
"image": {
  "visible": true,
  "src": "/images/photo-1.jpg",
  "alt": "画像の説明",
  "opacity": 0.78
}
```

### 都市エピソードの有効化

```json
{
  "id": "city-episodes-anchor",
  "cityEpisodes": { "enabled": true },
  "chart": { "visible": false },
  "map": { "visible": false },
  "image": { "visible": false }
}
```

このStepを起点に、`content-map.json` のデータからエピソード用のStepが自動生成される。

---

## 3. content-map.json — 都市エピソード

地図上の都市を巡りながらエピソードを紹介するシーケンスのデータ。

### 基本構造

```json
{
  "timeline": {
    "title": "ひとりひとりのエピソード"
  },
  "cities": [
    {
      "id": "city-id",
      "country": "Nigeria",
      "name": "都市名",
      "latitude": 6.5,
      "longitude": 3.4,
      "title": "エピソードタイトル",
      "description": "エピソード概要",
      "url": "https://example.com/video",
      "thumbnailUrl": "/config/aids/thumb/image.jpg",
      "transition": {
        "center": [3.4, 6.5],
        "zoom": 3.5,
        "highlightCountries": ["Nigeria"]
      }
    }
  ]
}
```

| プロパティ | 型 | 説明 |
|-----------|-----|------|
| `id` | string | 都市の一意識別子 |
| `country` | string | 国名 |
| `name` | string | 表示用の都市名 |
| `latitude`, `longitude` | number | 都市の座標 |
| `title` | string | エピソードのタイトル |
| `description` | string | エピソードの説明文 |
| `url` | string | 外部コンテンツ（動画・記事）へのリンク |
| `thumbnailUrl` | string | サムネイル画像のパス |
| `transition.center` | [number, number] | この都市表示時の地図中心座標 |
| `transition.zoom` | number | この都市表示時のズームレベル |
| `transition.highlightCountries` | string[] | この都市表示時にハイライトする国 |

---

## 4. map-style.json — 地図スタイル

地図の色・透明度・マーカー・ラベルの見た目を一括管理する共通設定。全感染症で共通。

### 全体構造

```json
{
  "background": { ... },
  "tile": { ... },
  "country": { ... },
  "marker": { ... },
  "label": { ... }
}
```

### background — SVG背景

hillshade（地形タイル）がある場合とない場合（フラットマップ）で異なる背景を適用する。

```json
"background": {
  "hillshade": { "fill": "#8ab4d0", "fillOpacity": 0.35 },
  "flat": { "fill": "#06111e", "fillOpacity": 0.7 }
}
```

| プロパティ | 説明 |
|-----------|------|
| `hillshade.fill` | hillshadeモード時のSVG背景色（海の色味） |
| `hillshade.fillOpacity` | hillshadeモード時の背景透明度 |
| `flat.fill` | フラットモード時のSVG背景色 |
| `flat.fillOpacity` | フラットモード時の背景透明度 |

### tile — MapLibreタイル背景

MapLibre GL JSで描画される地形タイルの設定。

```json
"tile": {
  "backgroundColor": "#b8cee0",
  "hillshade": {
    "shadowColor": "#8a8a8a",
    "highlightColor": "#ffffff",
    "accentColor": "#d0d0d0",
    "exaggeration": 0.35,
    "illuminationDirection": 315
  }
}
```

| プロパティ | 説明 |
|-----------|------|
| `backgroundColor` | タイル背景色（海のベース色） |
| `hillshade.shadowColor` | 地形の影の色 |
| `hillshade.highlightColor` | 地形のハイライト色 |
| `hillshade.accentColor` | 地形のアクセント色 |
| `hillshade.exaggeration` | 地形の起伏強調度（0〜1、大きいほど立体的） |
| `hillshade.illuminationDirection` | 光源の方向（度数、315 = 北西から） |

### country — 国のフィルとストローク

国ポリゴンの塗りと枠線の設定。hillshadeモードとflatモードで別の値を持つ。

```json
"country": {
  "hillshade": {
    "fill": "#f8f8f8",
    "opacity": {
      "highlight": 0.45,
      "normal": 0.6,
      "lightenAll": 0.45,
      "lightenNonVisited": 0.35,
      "nonHighlight": 0.55
    },
    "stroke": "#9a9a9a",
    "strokeOpacity": 0.35
  },
  "flat": {
    "fill": "#3f4f63",
    "opacity": { ... },
    "stroke": "#a5b4c7",
    "strokeOpacity": 0.35
  },
  "highlight": {
    "fill": "#000000",
    "stroke": "#000000",
    "strokeOpacity": 0.5,
    "strokeWidth": 1.0
  },
  "defaultStrokeWidth": 0.4
}
```

#### opacity の意味

opacityの値は `content.json` の map 設定と連動して決定される:

| opacityキー | 適用条件 | 説明 |
|------------|---------|------|
| `highlight` | `highlightCountries` に含まれる国 | ハイライト国の透明度 |
| `normal` | `highlightCountries` 指定なし、`lightenAllCountries` なし | 通常表示時の透明度 |
| `lightenAll` | `lightenAllCountries: true` | 全国薄表示時の透明度 |
| `lightenNonVisited` | `lightenNonVisited: true` でハイライト対象外の国 | 未訪問国の透明度 |
| `nonHighlight` | ハイライト国が存在するが、この国はハイライト対象外 | 非ハイライト国の透明度 |

#### highlight セクション

`highlightCountries` で指定された国に適用されるスタイル。hillshade/flatモードに関係なく共通。

### marker — 地図上のマーカー（丸）

```json
"marker": {
  "stroke": "#f5f0ec",
  "strokeOpacity": 0.95,
  "fillOpacity": { "current": 0.95, "default": 0.72 },
  "strokeWidth": { "current": 2, "default": 1 },
  "sizeBonus": 3,
  "defaultSize": 7
}
```

| プロパティ | 説明 |
|-----------|------|
| `stroke` | マーカーの枠線色 |
| `fillOpacity.current` | 現在フォーカス中のマーカーの不透明度 |
| `fillOpacity.default` | 通常マーカーの不透明度 |
| `strokeWidth.current` | フォーカス中マーカーの枠線幅 |
| `strokeWidth.default` | 通常マーカーの枠線幅 |
| `sizeBonus` | フォーカス中マーカーに加算されるサイズ |
| `defaultSize` | マーカーのデフォルト半径 |

マーカーの塗り色（`fill`）はテーマカラー（CSS変数 `--theme-primary`）から自動取得される。

### label — マーカーラベル（都市名）

```json
"label": {
  "fill": "#f5f0ec",
  "fontSize": 14,
  "fontWeight": 600,
  "stroke": "rgba(10,14,22,0.9)",
  "strokeWidth": 3,
  "offsetX": 10,
  "offsetY": -12
}
```

| プロパティ | 説明 |
|-----------|------|
| `fill` | ラベルの文字色 |
| `fontSize` | フォントサイズ（px） |
| `fontWeight` | フォントウェイト |
| `stroke` | 文字の縁取り色（可読性向上用） |
| `strokeWidth` | 縁取りの太さ |
| `offsetX`, `offsetY` | マーカー中心からのラベル位置オフセット |

---

## 5. テーマカラー

感染症ごとのテーマカラーは `src/utils/theme.js` で定義される。

| 感染症 | Primary | Secondary | Accent |
|--------|---------|-----------|--------|
| エイズ | `#66c2a5` | `#8dd3b8` | `#4dab8e` |
| 結核 | `#fc8d62` | `#fda882` | `#e87a4f` |
| マラリア | `#8da0cb` | `#a8b7d8` | `#7589b8` |

テーマカラーはCSS変数 `--theme-primary` として設定され、以下に自動適用される:
- ヘッダーナビゲーション
- プログレスバー
- 地図マーカーの塗り色
- 外部リンクボタン
- フォーカスリングの色

---

## 6. 設定変更の手順

### テキストやStep構成を変更する場合

1. 対象の `public/config/{disease}/content.json` を編集
2. Stepの追加・削除時は `steps` 配列を変更するだけでよい（HTMLは自動生成）

### 都市エピソードを追加する場合

1. `public/config/{disease}/content-map.json` の `cities` 配列に要素を追加
2. サムネイル画像を `public/config/{disease}/thumb/` に配置
3. `thumbnailUrl` でそのパスを指定

### 地図の見た目を調整する場合

1. `public/config/map-style.json` を編集
2. 陸地を白くしたい → `country.hillshade.fill` と `country.hillshade.opacity` を調整
3. 海の色を変えたい → `tile.backgroundColor` と `background.hillshade.fill` を調整
4. マーカーの大きさを変えたい → `marker.defaultSize` を調整

### チャートのデータを更新する場合

1. 該当のCSV/JSONファイルを `public/data/charts/{disease}/` 内で更新
2. `content.json` の `dataFile` パスが正しいことを確認

---

## 7. 注意事項

- **content.jsonとcontent-map.jsonの国名**: TopoJSONの `properties.name` と一致させる必要がある（例: `"United States of America"`, `"Côte d'Ivoire"`）
- **map-style.jsonの変更は全感染症に影響**: 共通設定のため、一方だけ変えたい場合は対応不可（現在の設計）
- **チャートのデータ形式**: CSVはヘッダー行必須。カラム名は `content.json` の `config` で指定した `xField`, `yField` 等と一致させる
- **画像パス**: `public/` ディレクトリからの相対パスを `/` 始まりで指定（例: `/images/photo-1.jpg`）
