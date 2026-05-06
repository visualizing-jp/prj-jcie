# コンテンツ設定ガイド

`public/config` と `public/data` を編集してコンテンツを更新するための運用ガイド。

---

## 1. 設定ファイル一覧

```text
public/
├── config/
│   ├── map-style.json
│   ├── aids/
│   │   ├── content.json
│   │   ├── content-map.json
│   │   └── thumb/
│   ├── tuberculosis/
│   │   ├── content.json
│   │   ├── content-map.json
│   │   └── thumb/
│   └── malariae/
│       ├── content.json
│       ├── content-map.json
│       └── thumb/
├── data/
│   ├── charts/
│   └── countries-110m.json
└── images/
```

| ファイル | 役割 |
|---------|------|
| `content.json` | step 構成、テキスト、チャート、地図、画像の設定 |
| `content-map.json` | 都市エピソードの入力データ |
| `map-style.json` | 共通地図スタイル |
| `public/data/charts/*` | チャート元データ |

---

## 2. `content.json`

### 2.1 基本構造

```json
{
  "steps": [
    {
      "id": "step-id",
      "text": { ... },
      "chart": { ... },
      "map": { ... },
      "image": { ... },
      "source": { ... },
      "scrollHeight": "120vh"
    }
  ]
}
```

### 2.2 step 直下のキー

| キー | 型 | 説明 |
|------|----|------|
| `id` | string | step 識別子 |
| `text` | object | テキストカード設定 |
| `chart` | object | チャート設定 |
| `map` | object | 地図設定 |
| `image` | object | 画像設定 |
| `source` | object or object[] | step 単位の出典 |
| `scrollHeight` | string | step の高さ |
| `cityEpisodes` | object | 都市エピソードのアンカー指定 |

### 2.3 `text`

```json
"text": {
  "content": "<h2>見出し</h2><p>本文</p>",
  "visible": true,
  "position": {
    "horizontal": "left | center | right",
    "vertical": "top | center | bottom",
    "width": "34%"
  }
}
```

| キー | 説明 |
|------|------|
| `content` | HTML 文字列 |
| `visible` | テキストカードの表示 |
| `position.horizontal` | 水平位置 |
| `position.vertical` | 垂直位置 |
| `position.width` | カード幅 |

### 2.4 `chart`

`chart` の詳細スキーマは [CHART-CONFIG-SCHEMA.md](CHART-CONFIG-SCHEMA.md) を参照。

```json
"chart": {
  "visible": true,
  "layout": "single | dual | dual-vertical | grid",
  "responsive": {
    "mobileStack": true
  },
  "charts": [
    {
      "id": "chart-id",
      "type": "line | sankey | pie | venn | bump | streamgraph",
      "dataFile": "/data/charts/aids/example.csv",
      "dataFormat": "auto | csv | json",
      "config": { ... }
    }
  ]
}
```

補足:

- `dual` と `grid` はモバイルで縦積みになる
- `dual-vertical` は上下2面を固定で使いたいときの明示的なレイアウト
- チャート表示領域は `text.position` に応じて調整される
- 出典は `chart.charts[].config.source` にも持てる

### 2.5 `map`

```json
"map": {
  "visible": true,
  "mode": "world-overview | single-city",
  "center": [経度, 緯度],
  "zoom": 2,
  "highlightCountries": ["Japan"],
  "highlightRegions": ["asia"],
  "lightenNonVisited": true,
  "lightenAllCountries": false
}
```

### 2.6 `image`

```json
"image": {
  "visible": true,
  "src": "/images/photo-1.jpg",
  "alt": "画像説明",
  "opacity": 0.8,
  "fit": "cover | width | height | contain",
  "objectPosition": "center center",
  "colorOverlay": {
    "opacity": 1
  }
}
```

### 2.7 出典表示

テキストカード末尾の出典欄には、以下の両方が使われる。

- step 直下の `source`
- `chart.charts[].config.source`

---

## 3. 都市エピソード

### 3.1 アンカー step

```json
{
  "id": "city-episodes-anchor",
  "cityEpisodes": { "enabled": true },
  "chart": { "visible": false },
  "map": { "visible": false },
  "image": { "visible": false }
}
```

この step は、そのままは描画されず、`content-map.json` をもとに展開される。

### 3.2 自動生成される step

- `episode-intro`
- `city-episodes-<city.id>`
- `fixed-closing`

---

## 4. `content-map.json`

### 4.1 基本構造

```json
{
  "timeline": {
    "title": "ひとりひとりのエピソード",
    "description": "導入文"
  },
  "cities": [
    {
      "id": "lagos",
      "name": "ラゴス",
      "nameEn": "Lagos",
      "country": "Nigeria",
      "latitude": 6.5244,
      "longitude": 3.3792,
      "order": 1,
      "data": {
        "title": "エピソードタイトル",
        "description": "本文",
        "url": "https://example.com",
        "thumbnail": "lagos.jpg"
      },
      "style": {
        "color": "#da3244",
        "size": 8
      },
      "transitions": {
        "scrollHeight": "120vh",
        "routeType": "start"
      }
    }
  ]
}
```

### 4.2 `cities[]` のキー

| キー | 型 | 説明 |
|------|----|------|
| `id` | string | 都市識別子 |
| `name` | string | 日本語名 |
| `nameEn` | string | 英語名 |
| `country` | string | 国名 |
| `latitude` / `longitude` | number | 座標 |
| `order` | number | 表示順 |
| `data.title` | string | カードタイトル |
| `data.description` | string | 説明文 |
| `data.url` | string | 外部リンク |
| `data.thumbnail` | string | サムネイルファイル名 |
| `style.color` | string | マーカー色 |
| `style.size` | number | マーカーサイズ |
| `transitions.scrollHeight` | string | step 高さ |
| `transitions.routeType` | string | ズームの既定値に影響 |

### 4.3 実装上の補足

- `order` 未指定時は `0` 扱い
- `data.thumbnail` は `public/config/<disease>/thumb/` から解決される
- `routeType === "same-location"` のときズームは強め
- `routeType === "start"` のときズームは中程度
- それ以外は通常ズーム

---

## 5. `map-style.json`

`map-style.json` は全感染症共通の地図スタイル設定。

主なブロック:

- `background`
- `tile`
- `country`
- `marker`
- `label`

このファイルはデザイン寄りの調整用で、通常のコンテンツ更新では触る頻度は低い。

---

## 6. 更新手順

1. 対象疾患の `content.json` と `content-map.json` を確認する
2. 必要な画像と `public/data/charts` のデータを更新する
3. `npm run dev` で該当ページを確認する
4. `npm run build` でビルドを確認する

---

## 7. 関連資料

- 全体構成: [ARCHITECTURE.md](ARCHITECTURE.md)
- チャート仕様: [ARCHITECTURE-CHARTS.md](ARCHITECTURE-CHARTS.md)
- チャート設定参照: [CHART-CONFIG-SCHEMA.md](CHART-CONFIG-SCHEMA.md)
- 都市エピソード仕様: [ARCHITECTURE-CITY-EPISODES.md](ARCHITECTURE-CITY-EPISODES.md)
