# チャート仕様書

本書は [ARCHITECTURE.md](ARCHITECTURE.md) の補足資料として、チャートの詳細仕様を定義する。

---

## 1. 対応チャート種別

| 種別 | 用途 | 主要設定 |
|------|------|---------|
| 折れ線グラフ (`line`) | 時系列データの推移表示 | 単一系列/複数系列、フィルタリング |
| 棒グラフ (`bar`) | カテゴリ比較 | 横/縦、グループ化 |
| 円グラフ (`pie`) | 構成比表示 | ラベル、パーセンテージ表示 |
| グリッドチャート (`grid`) | 複数小チャートの一覧表示 | 行数×列数指定、内部チャート種別指定 |
| 積み上げ棒グラフ (`stacked-bar`) | 内訳付き比較 | 系列指定 |

---

## 2. レイアウトパターン

| パターン | 説明 |
|---------|------|
| `single` | 1つのチャートを表示（デフォルト） |
| `dual` | 2つのチャートを横並び表示 |
| `triple` | 3つのチャートを横並び表示 |
| `grid` | グリッドレイアウトで複数の小チャートを表示 |

---

## 3. chart設定スキーマ

### 基本構造

```json
{
  "type": "line | bar | pie",
  "dataFile": "data/filename.csv",
  "visible": true,
  "updateMode": "replace | transition",
  "layout": "single | dual | triple | grid",
  "position": {
    "horizontal": "left | center | right",
    "vertical": "center",
    "width": "70%",
    "height": "100%"
  },
  "config": { ... }
}
```

### config内の設定項目

```json
{
  "widthPercent": 70,
  "heightPercent": 100,
  "xField": "year",
  "yField": "value",
  "seriesField": "series",
  "multiSeries": true,
  "title": "チャートタイトル",
  "dataSource": "データ出典",
  "legendType": "inline",
  "yAxisFormat": { ... },
  "yRange": [0, 4000000],
  "filter": { ... },
  "animation": { ... },
  "annotations": [ ... ]
}
```

### dualレイアウト時の構造

`layout: "dual"` の場合、`charts` 配列で個別チャートを定義する。

```json
{
  "layout": "dual",
  "visible": true,
  "position": { ... },
  "charts": [
    {
      "id": "women",
      "type": "line",
      "title": "若年女性（15-24歳）",
      "dataFile": "data/trend_women.csv",
      "position": "left",
      "config": { ... }
    },
    {
      "id": "men",
      "type": "line",
      "title": "若年男性（15-24歳）",
      "dataFile": "data/trend_men.csv",
      "position": "right",
      "config": { ... }
    }
  ]
}
```

### gridレイアウト時の構造

`layout: "grid"` の場合、config内でグリッドの行列数と内部チャート種別を指定する。

```json
{
  "layout": "grid",
  "visible": true,
  "config": {
    "dataFile": "data/ratio.csv",
    "columns": 8,
    "rows": 2,
    "chartType": "pie",
    "rowSpacing": 30,
    "labelField": "region",
    "valueField": "percentage",
    "categoryField": "ageGroup",
    "rowTitles": ["成人（15歳以上）", "こども（0歳から14歳）"],
    "showLabels": true,
    "showPercentages": true,
    "chartSizeMode": "responsive",
    "maxChartWidth": 120,
    "maxChartHeight": 120,
    "minChartWidth": 80,
    "minChartHeight": 80
  }
}
```

---

## 4. サイズ指定

- `widthPercent` / `heightPercent`: ビューポートに対するパーセンテージ指定
- `width` / `height`: 固定ピクセル指定
- レスポンシブSVG: `viewBox` + `preserveAspectRatio` によるスケーリング

---

## 5. トランジション

### replace（再描画）モード
- SVGを完全に再生成する
- 異なるデータファイルへの切替時に使用

### transition（インプレース更新）モード
- 同一データファイルの表示範囲変更時に使用
- D3.jsのtransitionでスムーズにアニメーション
- Object Constancy: 各データポイントを一意キー（`${系列名}-${年度}`）で追跡
- 段階的更新: データポイントを1つずつ追加・削除するアニメーション
- 双方向対応: 順方向・逆方向スクロールの両方でトランジションが動作

---

## 6. データフィルタリング

```json
{
  "filter": {
    "type": "range",
    "field": "year",
    "range": [1990, 1998]
  }
}
```

- 同一CSVデータの一部を表示（例: 1990-1998年）
- Step間で表示範囲を変更し、transitionモードでスムーズに切替

---

## 7. アノテーション（注釈線）

```json
{
  "annotations": [
    {
      "type": "verticalLine",
      "year": 1997,
      "label": "ピークに達した年",
      "position": "top-left"
    },
    {
      "type": "horizontalLine",
      "value": 3300000,
      "label": "ピーク値",
      "position": "top-left"
    }
  ]
}
```

- 垂直線（特定年度を強調）
- 水平線（特定値を強調）
- ラベルの表示位置指定

---

## 8. アニメーション

```json
{
  "animation": {
    "mode": "progressive",
    "duration": 3000,
    "stepDelay": 200
  }
}
```

- `progressive`: データポイントを順次描画するアニメーション
- `duration`: 全体のアニメーション時間（ms）
- `stepDelay`: 各データポイント間の遅延（ms）

---

## 9. Y軸フォーマット

### 日本語単位表記

```json
{
  "yAxisFormat": {
    "type": "japanese",
    "decimals": 0,
    "units": {
      "億": 100000000,
      "万": 10000
    }
  }
}
```

### カスタムフォーマット

```json
{
  "yAxisFormat": {
    "type": "custom",
    "format": ".0f",
    "divisor": 100000000,
    "suffix": "億ドル"
  }
}
```

---

## 10. 凡例

- `legendType: "inline"`: チャート内にインライン表示（折れ線の末端にラベル配置）

---

## 11. CSVデータ形式

### 基本形式（単一系列）
```csv
year,value
1990,2100000
1991,2300000
```

### 複数系列形式
```csv
year,series,value
1990,World,2100000
1990,東部・南部アフリカ,1200000
```

### フィールド名の対応
- `xField`: X軸に使用するフィールド名（通常 `year`）
- `yField`: Y軸に使用するフィールド名（通常 `value`）
- `seriesField`: 系列識別フィールド名（通常 `series`）
