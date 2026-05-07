# チャート設定スキーマ参照

本書は、`content.json` 内の `chart` 設定で現在使えるキーを、現行実装に合わせて整理した参照資料である。

---

## 1. `chart` オブジェクト

```json
{
  "chart": {
    "visible": true,
    "layout": "single | dual | dual-vertical | grid",
    "responsive": {
      "mobileStack": true
    },
    "span": {
      "id": "span-id",
      "continueFromPrevious": true
    },
    "dualTitle": "2面全体タイトル",
    "dualAnnotations": [],
    "grid": {
      "title": "grid title",
      "rowTitles": ["row1", "row2"],
      "columns": 8,
      "rows": 2,
      "rowPattern": [8, 8],
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

### `chart` 直下のキー

| キー | 型 | 説明 |
|------|----|------|
| `visible` | boolean | チャート層を表示するか |
| `layout` | string | `single` / `dual` / `dual-vertical` / `grid` |
| `responsive.mobileStack` | boolean | モバイルで `dual` / `grid` を縦積みにするか |
| `span.id` | string | line 継続アニメーション用の識別子 |
| `span.continueFromPrevious` | boolean | 直前 step から line を継続アニメーションするか |
| `dualTitle` | string | `dual` 全体タイトル |
| `dualAnnotations` | array | `dual` で複数パネルを横断する注釈 |
| `grid` | object | `grid` レイアウト設定 |
| `charts` | array | 描画対象チャート配列 |

### `grid` のキー

| キー | 型 | 説明 |
|------|----|------|
| `title` | string | grid 全体タイトル |
| `rowTitles` | string[] | 各行タイトル |
| `columns` | number | 行パターン生成の参考値 |
| `rows` | number | 行パターン生成の参考値 |
| `rowPattern` | number[] | 各行の列数 |
| `allowEmptyCells` | boolean | 空きセルを許容するか |

### `charts[]` の共通キー

| キー | 型 | 説明 |
|------|----|------|
| `id` | string | チャート識別子 |
| `type` | string | `line` / `sankey` / `pie` / `venn` / `bump` / `streamgraph` |
| `dataFile` | string | `public` 基準のデータパス |
| `dataFormat` | string | `auto` / `csv` / `json` |
| `config` | object | 種別ごとの追加設定 |

---

## 2. レイアウト別の考え方

### `single`

- 1面表示
- `charts[]` が複数でも、実装上は縦積みにできる

### `dual`

- 2列表示
- `dualTitle` と `dualAnnotations` が使える
- モバイルでは既定で縦積み

### `dual-vertical`

- 2面の縦積み表示
- `dualTitle` が使える
- `dualAnnotations` は横並び `dual` 用として扱う

### `grid`

- `rowPattern` で不均等段を表現できる
- `allowEmptyCells: true` なら空セルを置ける
- モバイルでは既定で縦積み

---

## 3. `line` の `config`

```json
{
  "xField": "year",
  "yField": "value",
  "xUnit": "年",
  "yUnit": "人",
  "seriesField": "series",
  "title": "折れ線タイトル"
}
```

### 主なキー

| キー | 型 | 説明 |
|------|----|------|
| `title` | string | パネルタイトル |
| `xField` | string | X軸の列名 |
| `yField` | string | Y軸の列名 |
| `xUnit` | string | X軸右下に表示する単位ラベル |
| `yUnit` | string | Y軸左上に表示する単位ラベル |
| `seriesField` | string | 系列名の列 |
| `xDomain` | [number, number] | X軸範囲 |
| `yDomain` | [number, number] | Y軸範囲 |
| `highlight` | string or string[] | 強調したい系列 |
| `seriesFilter` | string or string[] | 表示対象の系列に絞り込む |
| `projectionField` | string | 予測区間の開始判定列 |
| `textOnlyLabels` | string[] | 末端ラベルのガイド線を省略する系列 |
| `gridLines` | boolean | 水平グリッドの表示 |
| `areaFill` | boolean | 面塗りの有効化 |
| `annotations` | array | 注釈設定 |
| `source` | object | 出典 |

### `annotations`

```json
[
  {
    "type": "verticalLine",
    "year": 1995,
    "label": "ピーク年"
  },
  {
    "type": "horizontalLine",
    "id": "peak",
    "value": 35.2,
    "label": "ピーク値"
  },
  {
    "type": "arrow",
    "from": "peak",
    "to": "current",
    "label": "減少幅"
  }
]
```

対応 `type`:

- `verticalLine`
- `horizontalLine`
- `callout`
- `arrow`

### `span`

```json
"span": {
  "id": "aids-new-infections",
  "continueFromPrevious": true
}
```

`line` のみがこの継続アニメーションの恩恵を受ける。

---

## 4. `pie` の `config`

### 4.1 配列データをそのまま使う場合

```json
{
  "labelField": "label",
  "valueField": "value",
  "title": "円グラフ"
}
```

### 4.2 CSV 1行抽出で 2分割円を作る場合

```json
{
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
```

### 4.3 `groups` JSON から選ぶ場合

```json
{
  "groupId": "group-1"
}
```

または

```json
{
  "groupIndex": 0
}
```

---

## 5. `sankey` の `config`

```json
{
  "title": "サンキータイトル"
}
```

現行実装では、主な調整キーは `title` のみ。

入力データは次のどちらか。

```csv
source,target,value
予防,診断,120
診断,治療,100
```

```json
{
  "nodes": [{ "id": "予防" }, { "id": "診断" }],
  "links": [{ "source": "予防", "target": "診断", "value": 120 }]
}
```

---

## 6. `venn` の `config`

```json
{
  "groupId": "world",
  "colors": {
    "エイズ": "#da3244",
    "結核": "#354cf0"
  },
  "intersectionColor": "#7a3eca"
}
```

### 主なキー

| キー | 型 | 説明 |
|------|----|------|
| `title` | string | パネルタイトル |
| `groupId` | string | `groups` JSON から対象を選ぶ |
| `groupIndex` | number | `groups` の index 指定 |
| `colors` | object | 単集合ごとの色上書き |
| `intersectionColor` | string | 2集合交差部の色 |
| `intersectionLabel` | string | 交差ラベル |
| `hideValues` | boolean | 数値注釈を隠す |

### 入力例

```json
{
  "groups": [
    {
      "id": "world",
      "sets": [
        { "sets": ["エイズ"], "size": 100 },
        { "sets": ["結核"], "size": 80 },
        { "sets": ["エイズ", "結核"], "size": 20 }
      ]
    }
  ]
}
```

`venn` は 2〜3集合のみ対応。

---

## 7. `bump` の `config`

```json
{
  "xField": "year",
  "yField": "rank",
  "xUnit": "年",
  "yUnit": "順位",
  "seriesField": "deathby",
  "title": "順位推移",
  "maxRank": 5
}
```

### 主なキー

- `title`
- `xField`
- `yField`
- `xUnit`
- `yUnit`
- `seriesField`
- `maxRank`
- `xMin`
- `xMax`
- `highlight`
- `gridLines`
- `source`

---

## 8. `streamgraph` の `config`

```json
{
  "xField": "year",
  "yField": "value",
  "xUnit": "年",
  "seriesField": "series",
  "title": "Streamgraph"
}
```

### 主なキー

- `title`
- `xField`
- `yField`
- `xUnit`
- `seriesField`
- `xDomain`
- `annotations`

現行実装では利用可能だが、現行コンテンツでは未採用。X軸のみを描くため、単位表示も `xUnit` のみ対応。

---

## 9. サンプル

### 9.1 `single + line`

```json
{
  "chart": {
    "visible": true,
    "layout": "single",
    "responsive": { "mobileStack": true },
    "charts": [
      {
        "id": "line-main",
        "type": "line",
        "dataFile": "/data/charts/aids/trend_new_infections_normalized.csv",
        "dataFormat": "csv",
        "config": {
          "xField": "year",
          "yField": "value",
          "xUnit": "年",
          "yUnit": "人",
          "seriesField": "series",
          "title": "新規感染者数の推移"
        }
      }
    ]
  }
}
```

### 9.2 `dual + line`

```json
{
  "chart": {
    "visible": true,
    "layout": "dual",
    "dualTitle": "アフリカにおける新規感染者数の推移",
    "responsive": { "mobileStack": true },
    "charts": [
      {
        "id": "line-dual-a",
        "type": "line",
        "dataFile": "/data/charts/aids/trend_africa_young_man_normalized.csv",
        "dataFormat": "csv",
        "config": {
          "xField": "year",
          "yField": "value",
          "title": "若年男性（15-24歳）"
        }
      },
      {
        "id": "line-dual-b",
        "type": "line",
        "dataFile": "/data/charts/aids/trend_africa_young_woman_normalized.csv",
        "dataFormat": "csv",
        "config": {
          "xField": "year",
          "yField": "value",
          "title": "若年女性（15-24歳）"
        }
      }
    ],
    "dualAnnotations": [
      { "type": "horizontalLine", "value": 120000, "label": "" }
    ]
  }
}
```

### 9.3 `dual-vertical + line`

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
          "title": "感染者数"
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
          "title": "死亡者数"
        }
      }
    ]
  }
}
```

### 9.4 `grid + pie`

```json
{
  "chart": {
    "visible": true,
    "layout": "grid",
    "responsive": { "mobileStack": true },
    "grid": {
      "title": "地域別HIV治療カバレッジ",
      "rowTitles": ["成人（15歳以上）", "こども（0歳から14歳）"],
      "columns": 8,
      "rows": 2,
      "rowPattern": [8, 8],
      "allowEmptyCells": true
    },
    "charts": [
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
          "normalizeTo": 100,
          "remainderLabel": "未治療"
        }
      }
    ]
  }
}
```

### 9.5 `single + bump`

```json
{
  "chart": {
    "visible": true,
    "layout": "single",
    "charts": [
      {
        "id": "bump-tb-ranking",
        "type": "bump",
        "dataFile": "/data/charts/tuberculosis/death-ranking.csv",
        "dataFormat": "csv",
        "config": {
          "xField": "year",
          "yField": "rank",
          "seriesField": "deathby",
          "title": "日本の死因順位の推移",
          "maxRank": 5,
          "highlight": "全結核"
        }
      }
    ]
  }
}
```
