# チャート仕様書

本書は [ARCHITECTURE.md](ARCHITECTURE.md) の補足として、`src/layers/chart-layer.js` の現行実装を説明する。

---

## 1. 概要

- チャートは `#svg-layer` 内の chart サブレイヤーに SVG として描画される。
- step が切り替わるたびに `ChartLayer.render()` が走り、その step の `chart` 設定をもとに全体を再描画する。
- データ読込は `dataFile` 単位でキャッシュされる。
- チャート背景には半透明バックドロップとパネル枠が敷かれる。

---

## 2. レイアウトモデル

### 2.1 面割り

`chart.layout` は次の4種類。

| 値 | 説明 |
|----|------|
| `single` | 1面表示。`charts[]` が複数なら縦積みになる |
| `dual` | 2列表示。必要に応じて複数行にもなる |
| `dual-vertical` | 2面の縦積み表示。`dualTitle` を共有できる |
| `grid` | `grid.rowPattern` ベースの段組み |

### 2.2 テキストとの共存

- チャート領域は `text.position.horizontal` と `text.position.width` に応じて左右が削られる。
- テキストが `left` または `right` にあると、その幅ぶんだけチャート描画幅が狭くなる。
- 現行実装では `chart.position` は参照されない。

### 2.3 モバイル時

- `window.innerWidth < 768` のとき、`dual` と `grid` は `responsive.mobileStack !== false` なら縦積みに切り替わる。
- `single` はそのまま縮小表示する。
- `dual-vertical` は既定で縦積みなので、モバイル時も同じ構成を維持する。

### 2.4 `dual` / `dual-vertical` 共通キー

- `dualTitle`: 2面全体の共通タイトル
- `dualAnnotations`: 複数パネルを横断する注釈線。現行実装では横並び `dual` のみを想定する

### 2.5 `grid` 専用キー

- `grid.title`: 全体タイトル
- `grid.rowTitles`: 行タイトル
- `grid.rowPattern`: 各行の列数配列。例: `[8, 8]`, `[6, 6]`, `[4, 3]`
- `grid.allowEmptyCells`: 空きセルを許容するか

---

## 3. 共通スキーマ

```json
{
  "chart": {
    "visible": true,
    "layout": "single | dual | dual-vertical | grid",
    "responsive": {
      "mobileStack": true
    },
    "span": {
      "id": "optional-span-id",
      "continueFromPrevious": true
    },
    "dualTitle": "dual layout の全体タイトル",
    "dualAnnotations": [],
    "grid": {
      "title": "grid title",
      "rowTitles": ["row1", "row2"],
      "columns": 4,
      "rows": 2,
      "rowPattern": [4, 3],
      "allowEmptyCells": true
    },
    "charts": [
      {
        "id": "chart-id",
        "type": "line | sankey | pie | venn | bump | streamgraph",
        "dataFile": "/data/charts/example.csv",
        "dataFormat": "auto | csv | json",
        "config": {}
      }
    ]
  }
}
```

### 共通キー

- `visible`: この step でチャート層を表示するか
- `layout`: 面割り
- `responsive.mobileStack`: モバイル縦積みの抑止。未指定時は `true`
- `span`: step をまたいだ line の継続アニメーション設定
- `charts[]`: 実際の描画対象

---

## 4. 対応チャート種別

| 種別 | 主用途 | データ |
|------|--------|--------|
| `line` | 時系列推移、複数系列比較 | CSV / JSON配列 |
| `pie` | 構成比、比率の比較 | CSV / JSON |
| `sankey` | フローの可視化 | CSV / JSON |
| `venn` | 2〜3集合の関係 | JSON |
| `bump` | 順位推移 | CSV / JSON配列 |
| `streamgraph` | 積層の流れ | CSV / JSON配列 |

---

## 5. `line`

### 5.1 データ形

- 基本は行配列
- 既定キーは `xField=year`, `yField=value`, `seriesField=series`
- `seriesField` がなければ単一系列扱い

### 5.2 主な `config`

- `title`
- `xField`
- `yField`
- `seriesField`
- `xDomain`
- `yDomain`
- `highlight`
- `seriesFilter`
- `projectionField`
- `annotations`
- `textOnlyLabels`
- `gridLines`
- `areaFill`
- `source`

### 5.3 振る舞い

- 単一系列ではテーマカラーの線と点を描く
- 複数系列では系列ごとに色を分け、右端に末端ラベルを出す
- `highlight` 指定時は対象系列を太く、それ以外を薄くする
- `seriesFilter` を指定すると、その系列だけを対象に描画する
- `projectionField` が truthy になった最初の行以降を予測区間として破線表示する
- step 遷移時に `span.id` が一致し、かつ `span.continueFromPrevious` が true の場合は軸と線を滑らかに継続アニメーションする

### 5.4 アノテーション

`annotations` は以下を受ける。

| type | 用途 |
|------|------|
| `verticalLine` | 縦線 |
| `horizontalLine` | 横線 |
| `callout` | 任意点への注釈 |
| `arrow` | `horizontalLine` 同士を結ぶ矢印 |

#### `horizontalLine` の追加キー

- `id`: `arrow` で参照する識別子
- `anchor`: `right` のとき右側基準でラベル配置
- `dx`, `dy`, `wrap`, `color`

#### `arrow` の追加キー

- `from`
- `to`
- `label`
- `x`
- `color`

### 5.5 `dualAnnotations`

- 横並び `dual` レイアウトでのみ使う
- 複数パネルにまたがる `horizontalLine` を描ける
- `arrow` も使えるが、基準は各注釈の `id`

---

## 6. `pie`

`pie` は `resolvePieDataset()` で入力を2系統に正規化してから描画する。

### 6.1 そのまま描く形式

```json
[
  { "label": "A", "value": 60 },
  { "label": "B", "value": 40 }
]
```

既定キー:

- `labelField=label`
- `valueField=value`

### 6.2 CSV 1行抽出形式

`rowField` と `rowValue` で対象行を選び、`categoryColumns` で列を抜く。

```json
{
  "rowField": "地域",
  "rowValue": "全世界",
  "categoryColumns": ["成人（15歳以上）"],
  "primaryLabel": "治療中",
  "primaryColor": "#da3244",
  "normalizeTo": 100,
  "remainderLabel": "未治療",
  "remainderColor": "#999999"
}
```

### 6.3 `groups` JSON 形式

```json
{
  "groups": [
    {
      "id": "group-1",
      "values": [
        { "label": "A", "value": 60 },
        { "label": "B", "value": 40 }
      ]
    }
  ]
}
```

選択キー:

- `groupId`
- `groupIndex`

---

## 7. `sankey`

### 7.1 JSON

```json
{
  "nodes": [{ "id": "予防" }, { "id": "診断" }],
  "links": [{ "source": "予防", "target": "診断", "value": 120 }]
}
```

### 7.2 CSV

```csv
source,target,value
予防,診断,120
診断,治療,100
```

### 7.3 振る舞い

- ノードはレベル計算で左から右へ配置する
- リンクはソース色からターゲット色へのグラデーション
- ノードはレベル単位で段階的に表示される
- 現行の実用キーは `title` が中心

---

## 8. `venn`

### 8.1 対応入力

1. 単体 `sets` 形式
2. `groups` 配列から `groupId` / `groupIndex` で選ぶ形式

### 8.2 期待形

```json
{
  "groups": [
    {
      "id": "world",
      "title": "World",
      "sets": [
        { "sets": ["エイズ"], "size": 100 },
        { "sets": ["結核"], "size": 80 },
        { "sets": ["エイズ", "結核"], "size": 20 }
      ]
    }
  ]
}
```

### 8.3 制約

- 2〜3集合のみ対応
- `@upsetjs/venn.js` のレイアウト計算を使う
- `groups` 形式では、全 group の最大単集合値を基準に相対スケールを揃える

### 8.4 主な `config`

- `title`
- `groupId`
- `groupIndex`
- `colors`
- `intersectionColor`
- `intersectionLabel`
- `hideValues`

### 8.5 表示仕様

- 単集合ラベルはパネル上部に固定配置
- 2集合時は交差部分の色オーバーレイが可能
- `hideValues` が false のとき、値は引き出し線付きで描かれる

---

## 9. `bump`

順位推移専用チャート。

### 主な `config`

- `title`
- `xField`
- `yField`
- `seriesField`
- `maxRank`
- `xMin`
- `xMax`
- `highlight`
- `gridLines`
- `source`

### 表示仕様

- Y軸は `1位`, `2位` のような順位表示
- 線は `curveBumpX`
- 強調系列以外は薄く表示
- 最終年に存在する系列だけ右端ラベルが出る

---

## 10. `streamgraph`

現行実装では利用可能だが、現行コンテンツでは未使用。

### 主な `config`

- `title`
- `xField`
- `yField`
- `seriesField`
- `xDomain`
- `annotations`

### 表示仕様

- `d3.stackOffsetWiggle` と `d3.stackOrderInsideOut` を使う
- X軸のみを表示
- 右端に系列ラベルを表示
- `line` と同じ注釈関数を再利用する

---

## 11. データ形式

- `dataFormat: "auto"` は拡張子で判定する
- `dataFormat: "csv"` は `d3.csv(..., d3.autoType)`
- `dataFormat: "json"` は `d3.json(...)`

`line` / `bump` / `streamgraph` は数値化できる列が前提。`pie` は `%` や `,` を含む文字列も数値化する。

---

## 12. 現行コンテンツでの利用状況

- `single + line`
- `dual + line`
- `dual-vertical + line`
- `grid + pie`
- `grid + venn`
- `single + sankey`
- `single + venn`
- `single + bump`

`streamgraph` は未採用だが実装済み。
