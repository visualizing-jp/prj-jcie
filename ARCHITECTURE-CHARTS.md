# チャート仕様書

本書は [ARCHITECTURE.md](ARCHITECTURE.md) の補足資料として、チャートの詳細仕様を定義する。

---

## 1. 設計方針

- レイアウト種別とチャート種別を分離し、`content.json` で組み合わせ指定する。
- 本コンテンツはレスポンシブ前提とする。
- `dual` と `grid` はモバイルで強制縦積みにする。
- 設定値のシンプルさを優先する。

---

## 2. 対応チャート種別

| 種別 | 用途 | 主なデータ |
|------|------|-----------|
| 折れ線グラフ (`line`) | 時系列の推移 | CSV / JSON |
| サンキー・ダイアグラム (`sankey`) | フロー可視化 | CSV / JSON |
| 円グラフ (`pie`) | 構成比 | CSV / JSON |
| ベン図 (`venn`) | 集合関係 | CSV / JSON |

### 補足

- ベン図は 1ファイル統合を許可する。
- サンプルデータを `_temp` に置くことは許容するが、本番参照パスは `public/data` を基準とする。

---

## 3. レイアウトパターン

| パターン | 説明 |
|---------|------|
| `single` | 1つのチャートを表示 |
| `dual` | 2つのチャートを横並び表示（モバイルは縦積み） |
| `grid` | 段組（例: 8x2、6x2、4+3） |

### 代表パターン

- `single` + `line`
- `single` + `sankey`
- `dual` + `line`
- `grid(8x2)` + `pie`
- `grid(6x2)` + `pie`
- `grid(4+3)` + `venn`

---

## 4. chart設定スキーマ

### 基本構造

```json
{
  "chart": {
    "visible": true,
    "layout": "single | dual | grid",
    "position": {
      "horizontal": "left | center | right",
      "vertical": "center",
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
        "dataFile": "/data/example.csv",
        "dataFormat": "auto | csv | json",
        "config": {}
      }
    ],
    "updateMode": "replace | transition"
  }
}
```

### フィールド説明

- `layout`: レイアウト種別。
- `charts[]`: 描画対象チャート配列。
- `dataFormat`:
  - `auto`: 拡張子で自動判定
  - `csv`: CSVとして読み込む
  - `json`: JSONとして読み込む
- `grid.allowEmptyCells`: グリッド不足セルを空白として許可する。
- `responsive.mobileStack`: `dual` と `grid` では `true` を必須運用とする。

---

## 5. レイアウト別ルール

### 5.1 `single`

- `charts.length = 1` を基本とする。
- 1チャートを中央表示する。

### 5.2 `dual`

- `charts.length = 2` を基本とする。
- PC: 2列横並び。
- モバイル: 強制縦積み（1列）。

### 5.3 `grid`

- `grid.columns` / `grid.rows` / `grid.rowPattern` を使用する。
- 不均等段（`4+3` など）は `rowPattern` で表現する。
- データ不足時は空白セルを許容する（`allowEmptyCells: true`）。
- モバイルは強制縦積み。

---

## 6. 種別ごとの最小config

### `line`

```json
{
  "xField": "year",
  "yField": "value",
  "seriesField": "series",
  "title": "折れ線タイトル"
}
```

### `sankey`

```json
{
  "title": "サンキータイトル",
  "nodeIdField": "id",
  "linkSourceField": "source",
  "linkTargetField": "target",
  "linkValueField": "value"
}
```

### `pie`

```json
{
  "labelField": "label",
  "valueField": "value",
  "showPercentages": true
}
```

### `venn`

```json
{
  "setField": "set",
  "valueField": "value",
  "intersectionField": "intersection",
  "titleField": "title"
}
```

---

## 7. データ形式

### 7.1 CSV例（line/pie）

```csv
year,value
1990,2100000
1991,2300000
```

```csv
label,value
成人,60
こども,40
```

### 7.2 CSV例（sankey）

```csv
source,target,value
予防,診断,120
診断,治療,100
```

### 7.3 JSON例（sankey）

```json
{
  "nodes": [{ "id": "予防" }, { "id": "診断" }, { "id": "治療" }],
  "links": [
    { "source": "予防", "target": "診断", "value": 120 },
    { "source": "診断", "target": "治療", "value": 100 }
  ]
}
```

### 7.4 JSON例（venn: 1ファイル統合）

```json
{
  "groups": [
    {
      "id": "g1",
      "title": "地域A",
      "sets": [
        { "set": "HIV", "value": 40 },
        { "set": "TB", "value": 35 },
        { "set": "HIV&TB", "intersection": ["HIV", "TB"], "value": 12 }
      ]
    }
  ]
}
```

---

## 8. レスポンシブ仕様

- SVGは `viewBox` + `preserveAspectRatio` を前提とする。
- `single`: そのまま縮小。
- `dual`: `mobileStack: true` で縦積みへ切替。
- `grid`: `mobileStack: true` で縦積みへ切替。
- 軸ラベルや凡例は狭幅時に省略可。

---

## 9. バリデーション方針

- `layout=single` かつ `charts.length !== 1` は警告。
- `layout=dual` かつ `charts.length !== 2` は警告。
- `layout=grid` かつ `grid` 未指定はエラー。
- `dataFile` 未指定はエラー。
- `dataFormat=auto` は拡張子が不明な場合エラー。

---

## 10. 実装フェーズ（計画）

1. `content.json` 読み取り時のスキーマ検証を追加。  
2. `ChartLayer` を「レイアウト制御」と「レンダラー」に分離。  
3. `single(line)` → `dual(line)` → `grid(pie)` → `single(sankey)` → `grid(venn)` の順で段階導入。  
4. 逆スクロール時の状態復元とモバイル縦積み挙動を検証。
