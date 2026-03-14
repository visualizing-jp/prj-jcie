# チャート設定スキーマ案（実装前）

## 1. 目的

- レイアウトとチャート種別を分離し、`content.json` で組み合わせ指定できるようにする。
- 本段階は設計のみ。実装はまだ行わない。

---

## 2. 対応範囲（合意済み）

### レイアウト

- `single`（1つ）
- `dual`（2つ横並び）
- `grid`（段組）

### チャート種別

- `line`（折れ線）
- `sankey`（サンキー）
- `pie`（円）
- `venn`（ベン）

### データ形式

- `CSV` / `JSON` の両対応
- `venn` は 1 ファイル統合を許可
- `grid` は空白セルを許可
- `dual` / `grid` はモバイルで強制縦積み

---

## 3. `content.json` の基本構造

```json
{
  "id": "step-id",
  "text": { "...": "..." },
  "chart": {
    "visible": true,
    "layout": "single | dual | grid",
    "position": {
      "horizontal": "left | center | right",
      "width": "70%",
      "height": "100%"
    },
    "responsive": {
      "mobileStack": true
    },
    "grid": {
      "columns": 8,
      "rows": 2,
      "rowPattern": [8, 8],
      "allowEmptyCells": true
    },
    "charts": [
      {
        "id": "chart-1",
        "type": "line | sankey | pie | venn",
        "dataFile": "/data/sample.csv",
        "dataFormat": "auto | csv | json",
        "config": {}
      }
    ]
  },
  "map": { "visible": false },
  "image": { "visible": false }
}
```

---

## 4. レイアウト仕様

### 4.1 `single`

- `charts.length = 1` を基本とする。
- 表示領域は1面。

### 4.2 `dual`

- `charts.length = 2` を基本とする。
- デスクトップ: 2列横並び。
- モバイル: `mobileStack: true` により強制縦積み（1列）。

### 4.3 `grid`

- `grid.columns` / `grid.rows` で基本グリッドを定義。
- 不均等段は `rowPattern` で定義（例: `[4, 3]`）。
- `allowEmptyCells: true` の場合、セル不足分は空白として描画。

---

## 5. チャート種別ごとの `config` 最小仕様

### 5.1 `line`

```json
{
  "xField": "year",
  "yField": "value",
  "seriesField": "series",
  "title": "折れ線タイトル"
}
```

### 5.2 `sankey`

```json
{
  "title": "サンキータイトル",
  "nodeIdField": "id",
  "linkSourceField": "source",
  "linkTargetField": "target",
  "linkValueField": "value"
}
```

- JSON推奨（`nodes` / `links` 構造）。
- CSVの場合は `source,target,value` 形式を許可。

### 5.3 `pie`

```json
{
  "labelField": "label",
  "valueField": "value",
  "showPercentages": true
}
```

### 5.4 `venn`

```json
{
  "setField": "set",
  "valueField": "value",
  "intersectionField": "intersection",
  "titleField": "title"
}
```

- 1つのJSONファイル内に複数ベン図データを保持可能。
- `grid` 配置時はセルごとに対象データキーを指定可能にする（実装時詳細化）。

---

## 6. サンプル

### 6.1 `single` + `line`

```json
{
  "chart": {
    "visible": true,
    "layout": "single",
    "responsive": { "mobileStack": true },
    "charts": [
      {
        "id": "trend-main",
        "type": "line",
        "dataFile": "/data/line-trend.csv",
        "dataFormat": "auto",
        "config": {
          "xField": "year",
          "yField": "value",
          "title": "感染者数の推移"
        }
      }
    ]
  }
}
```

### 6.2 `dual` + `line`（モバイルは縦積み）

```json
{
  "chart": {
    "visible": true,
    "layout": "dual",
    "responsive": { "mobileStack": true },
    "charts": [
      {
        "id": "trend-female",
        "type": "line",
        "dataFile": "/data/line-female.csv",
        "config": { "xField": "year", "yField": "value", "title": "女性" }
      },
      {
        "id": "trend-male",
        "type": "line",
        "dataFile": "/data/line-male.csv",
        "config": { "xField": "year", "yField": "value", "title": "男性" }
      }
    ]
  }
}
```

### 6.3 `grid` + `pie`（8x2）

```json
{
  "chart": {
    "visible": true,
    "layout": "grid",
    "responsive": { "mobileStack": true },
    "grid": {
      "columns": 8,
      "rows": 2,
      "rowPattern": [8, 8],
      "allowEmptyCells": true
    },
    "charts": [
      { "id": "p1", "type": "pie", "dataFile": "/data/pie-grid.csv", "config": { "labelField": "label", "valueField": "value" } }
    ]
  }
}
```

### 6.4 `grid` + `pie`（6x2）

```json
{
  "chart": {
    "visible": true,
    "layout": "grid",
    "responsive": { "mobileStack": true },
    "grid": {
      "columns": 6,
      "rows": 2,
      "rowPattern": [6, 6],
      "allowEmptyCells": true
    },
    "charts": [
      { "id": "p1", "type": "pie", "dataFile": "/data/pie-grid-6x2.csv", "config": { "labelField": "label", "valueField": "value" } }
    ]
  }
}
```

### 6.5 `grid` + `venn`（4+3、1ファイル統合）

```json
{
  "chart": {
    "visible": true,
    "layout": "grid",
    "responsive": { "mobileStack": true },
    "grid": {
      "columns": 4,
      "rows": 2,
      "rowPattern": [4, 3],
      "allowEmptyCells": true
    },
    "charts": [
      {
        "id": "venn-group",
        "type": "venn",
        "dataFile": "/data/venn-unified.json",
        "dataFormat": "json",
        "config": {
          "setField": "set",
          "valueField": "value",
          "intersectionField": "intersection"
        }
      }
    ]
  }
}
```

---

## 7. バリデーション方針（実装時）

- `layout=single` で `charts.length > 1` は警告。
- `layout=dual` で `charts.length !== 2` は警告。
- `layout=grid` で `grid` 未指定はエラー。
- `dataFile` 未指定はエラー。
- `responsive.mobileStack` は `dual` / `grid` で `true` を推奨（既定値 `true`）。

---

## 8. 次フェーズ（実装前提）

1. `_temp` の JSON サンプルを読み、`sankey` / `venn` の実データ構造を確定する。  
2. `ChartLayer` を「レイアウト管理」と「レンダラー分離」に再編する。  
3. `single` → `dual` → `grid` の順で段階導入し、逆スクロール時の状態復元を検証する。  
