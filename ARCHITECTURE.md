# 概要設計書 — Scrollytelling コンテンツ

## 1. プロジェクト概要

### 目的
グローバルファンドが取り組む3つの感染症（HIV/エイズ、結核、マラリア）について、データに基づくストーリーをスクロール操作で展開するWebコンテンツを提供する。

### 対象ユーザー
一般市民（日本語話者）。感染症問題への関心喚起と、グローバルファンドへの支援を促すことを目的とする。

### コンテンツ構成
| 感染症 | ディレクトリ | Step数 | データファイル数 |
|--------|-------------|--------|-----------------|
| HIV/エイズ | `01_aids/` | 17（＋都市7） | CSV×8 |
| 結核 | `02_tuberculosis/` | 21 | CSV×6 |
| マラリア | `03_malariae/` | 30 | CSV×6 |

*Step数やデータファイル数はフレキシブルに設定できるものとする。

---

## 2. 使用技術

| 技術 | 用途 |
|------|------|
| D3.js v7 | チャート描画、地図描画、アニメーション |
| TopoJSON v3 | 世界地図データの変換・描画 |
| scrollama | スクロール位置検出、Step進入イベント発火 |
| Tailwind CSS | ユーティリティベースのスタイリング |
| Vanilla JavaScript (ES6) | アプリケーションロジック（フレームワーク不使用） |
| Google Fonts (Shippori Mincho) | 日本語書体 |

### データ形式
- **CSV**: チャート用の時系列データ（ヘッダー行必須）
- **JSON**: 設定ファイル（content.json）、都市エピソードデータ（content-map.json）
- **TopoJSON**: 世界地図（countries-110m.json、全感染症で共通）

---

## 3. サイト構成

```
プロジェクトルート/
├── 01_aids/                   # エイズコンテンツ
│   ├── index.html             # エントリーHTML
│   ├── config/
│   │   ├── content.json       # Step定義
│   │   └── content-map.json   # 都市エピソードデータ
│   ├── data/                  # チャート用CSV群
│   ├── images/                # コンテンツ画像
│   └── thumb/                 # 都市エピソード用サムネイル
│
├── 02_tuberculosis/           # 結核コンテンツ（同構造）
├── 03_malariae/               # マラリアコンテンツ（同構造）
│
└── shared/                    # 共通リソース
    ├── assets/
    │   ├── css/               # 共通スタイルシート
    │   └── js/                # 共通JavaScript
    └── data/
        └── countries-110m.json  # 世界地図TopoJSON
```

### 統一原則
- 3感染症は同一のHTML構造・CSS・JavaScriptを共有する
- 感染症ごとの差異は設定ファイル（content.json, カラーテーマ）のみで表現する
- 感染症ごとの個別実装は行わない

---

## 4. 画面レイアウト



### レイヤー構成

| レイヤー | ID | 役割 |
|---------|-----|------|
| チャート | `#chart-container` | D3.jsによるSVGチャートの表示領域 |
| 地図 | `#map-container` | D3.jsによるSVG地図の表示領域 |
| 画像 | `#image-container` | 背景画像やコンテンツ画像の表示領域 |
| テキスト | `#scroll-content` | スクロール可能なテキスト段落群 |



### レイヤーの排他制御
チャート・地図・画像の3つの背景レイヤーは、原則として同時に1つだけが表示される。各Stepの設定で `visible: true` が指定されたレイヤーのみが表示され、他のレイヤーは非表示となる。

例外として、画像レイヤーの `specialMode: "step0-background"` はオープニング画面専用の特殊配置であり、通常の排他制御とは独立して動作する。

### ヘッダーナビゲーション
- 3感染症間の相互リンクを表示
- 現在表示中の感染症をハイライト
- 感染症別のテーマカラーで装飾

---

## 5. Step（段落）モデル

### 概念
コンテンツは「Step」の連続として構成される。ユーザーがスクロールして各Stepの位置に到達すると、そのStepに紐づいたテキスト・チャート・地図・画像の表示状態が適用される。

### scrollamaとの連携
- scrollamaがDOM上の `.step` 要素を監視
- 各Stepが画面の50%位置（offset: 0.5）に到達すると `onStepEnter` イベントが発火
- イベントハンドラがcontent.jsonの設定を参照し、各レイヤーを更新

### Stepの種類

| 種類 | 説明 | 例 |
|------|------|-----|
| オープニング | 全画面背景画像＋タイトル | `opening` |
| テキスト＋画像 | 背景画像の上にテキストカード | `intro`, `treatment-progress` |
| テキスト＋チャート | チャート横にテキストカード | `peak-crisis`, `death-statistics` |
| テキスト＋地図 | 地図横にテキストカード | `history-overview`, `early-expansion` |
| 都市エピソード | 複数Stepで背景地図を共有し、都市間を移動するシーケンス | `city-episodes-0` 〜 |
| グリッドチャート | 複数の小チャートをグリッド配置 | `regional-disparity` |
| デュアルチャート | 2つのチャートを横並び | `remaining-challenges` |
| クロージング | クレジット・リンク表示 | `closing` |

#### 地図を背景とするStepについて
「テキスト＋地図」と「都市エピソード」はいずれも地図を背景に使用するが、性質が異なる。

- **テキスト＋地図**: テキストカードが主体。地図は補助的な背景であり、連続するStep間で同じ地図を共有することもあるが、各Stepのテキストが独立した内容を持つ。
- **都市エピソード**: 各都市のエピソード紹介（タイトル・説明・サムネイル・外部リンク）が主体。地図上の都市移動とマーカー蓄積により、シーケンス全体がひとつの旅程として構成される。

都市エピソードの詳細は [ARCHITECTURE-CITY-EPISODES.md](ARCHITECTURE-CITY-EPISODES.md) を参照。

### Step識別
- 各Stepは論理名（`id`）で識別される（例: `opening`, `peak-crisis`, `city-episodes-0`）
- HTMLの `data-step` 属性とcontent.jsonの `id` が対応する
- 都市エピソードのStepはcontent-map.jsonに基づきJavaScriptで動的生成される（詳細は [ARCHITECTURE-CITY-EPISODES.md](ARCHITECTURE-CITY-EPISODES.md)）

---

## 6. 設定ファイル仕様

### content.json

各Stepの表示状態を定義する中心的な設定ファイル。

```json
{
  "steps": [
    {
      "id": "step-logical-name",
      "text": { ... },
      "chart": { ... },
      "map": { ... },
      "image": { ... }
    }
  ]
}
```

#### text設定

```json
{
  "content": "段落のテキスト",
  "visible": true,
  "position": {
    "width": "30%",
    "horizontal": "left | center | right",
    "vertical": "top | center | bottom"
  }
}
```

- HTMLに直接記述されたテキストが優先される（content.jsonのcontentはフォールバック）
- positionでテキストカードの配置を制御

#### chart設定

詳細は [ARCHITECTURE-CHARTS.md](ARCHITECTURE-CHARTS.md) を参照。基本構造のみ以下に示す。

```json
{
  "type": "line | bar | pie",
  "dataFile": "data/filename.csv",
  "visible": true,
  "updateMode": "replace | transition",
  "layout": "single | dual | triple | grid",
  "position": { "horizontal": "left", "width": "70%", "height": "100%" },
  "config": { ... }
}
```

#### map設定

```json
{
  "visible": true,
  "center": [経度, 緯度],
  "zoom": 1.8,
  "mode": "world-overview | single-city | cities-timeline",
  "cityId": "lagos",
  "citiesFile": "config/content-map.json",
  "widthPercent": 100,
  "heightPercent": 100,
  "useRegionColors": true,
  "lightenAllCountries": true,
  "lightenNonVisited": true,
  "highlightCountries": ["United States"],
  "targetRegions": ["アジア・太平洋地域"]
}
```

#### image設定

```json
{
  "src": "assets/images/opening.jpg",
  "alt": "画像の説明",
  "visible": true,
  "position": {
    "horizontal": "center",
    "vertical": "center",
    "width": "100%",
    "height": "100%"
  },
  "config": {
    "opacity": 0.9,
    "objectFit": "cover | contain",
    "specialMode": "step0-background"
  }
}
```

### content-map.json（都市エピソード）

都市エピソードのデータ定義。スキーマ詳細は [ARCHITECTURE-CITY-EPISODES.md](ARCHITECTURE-CITY-EPISODES.md) を参照。

### 感染症別テーマカラー

| 感染症 | Primary | Secondary | Accent |
|--------|---------|-----------|--------|
| エイズ | `#ff6b6b` | `#ff8e8e` | `#e85555` |
| 結核 | `#4ecdc4` | `#6fd4cc` | `#3bb8b0` |
| マラリア | `#f4a620` | `#f6b84a` | `#e89813` |

---

## 7. チャート仕様

対応種別: 折れ線グラフ / 棒グラフ / 円グラフ / グリッドチャート / 積み上げ棒グラフ

レイアウト: single（単体）/ dual（2列）/ triple（3列）/ grid（格子状）

主な機能: データフィルタリング、インプレーストランジション（Object Constancy）、アノテーション（注釈線）、段階的描画アニメーション、日本語単位の軸フォーマット、インライン凡例

詳細は [ARCHITECTURE-CHARTS.md](ARCHITECTURE-CHARTS.md) を参照。

---

## 8. 地図仕様

### 地図モード

| モード | 説明 |
|--------|------|
| `world-overview` | 世界地図の全体表示。地域カラーリングで概況を表示 |
| `single-city` | 特定都市にズームイン。都市マーカーとエピソード情報を表示 |
| `cities-timeline` | 複数都市を順次訪問する旅程表示 |

### 地図機能

| 機能 | 説明 |
|------|------|
| 地域カラーリング | 地理的地域ごとに色分け表示 |
| 国ハイライト | 特定国を強調表示 |
| 都市マーカー | 都市位置にマーカーを描画 |
| ズーム・パン | center座標とzoomレベルによる表示範囲制御 |
| 訪問国追跡 | 都市エピソードで訪問した国をハイライト |
| 未訪問国の淡色化 | `lightenNonVisited` で訪問済み以外を薄く表示 |

### 都市エピソードとの連携
地図は都市エピソードシーケンスの背景として機能する。詳細は [ARCHITECTURE-CITY-EPISODES.md](ARCHITECTURE-CITY-EPISODES.md) を参照。

---

## 9. 画像仕様

### 表示モード

| モード | 説明 | 用途 |
|--------|------|------|
| 通常表示 | `#image-container` 内にimg要素として表示 | コンテンツ画像 |
| step0背景 | `specialMode: "step0-background"` で `#step0-bg-container` に配置 | オープニング画面背景 |

### 画像設定
- `objectFit`: `cover`（トリミングして全体を覆う）/ `contain`（全体を表示）
- `opacity`: 透明度制御（0.0〜1.0）
- レスポンシブ: width/height 100%で親要素に追従

### オープニング画面（step0）
全感染症で統一された構成:
1. 全画面背景画像（`#step0-bg-container`）
2. 黒い半透明オーバーレイ（`bg-black bg-opacity-70`）
3. タイトル文字（Shippori Mincho書体、白色、text-shadow付き）

---

## 10. テキスト・ポジショニング

### テキストカード
- 半透明白背景（`bg-white bg-opacity-90`）に角丸とシャドウ
- `max-w-lg`（最大幅512px）で読みやすい幅を維持
- フォント: 本文は `text-gray-700 leading-relaxed`

### 配置制御
各Stepのtext.positionで配置を指定:

| 設定 | 値 | 説明 |
|------|-----|------|
| `horizontal` | `left`, `center`, `right` | テキストカードの水平位置 |
| `vertical` | `top`, `center`, `bottom` | テキストカードの垂直位置 |
| `width` | `"30%"`, `"60%"`, `"80%"` | テキストカードの幅 |

### チャートとの共存
- テキスト `right` + チャート `left`（幅70%）が典型パターン
- テキストがチャートに被らないよう位置を自動調整

---

## 11. アプリケーションフロー

### 初期化シーケンス

```
1. HTML読み込み・パース
2. 外部ライブラリ読み込み（D3, scrollama, Tailwind）
3. 共通JavaScript読み込み
4. DOMContentLoaded発火
5. 設定ファイル読み込み（content.json, content-map.json）
6. データファイル読み込み（CSV群, 世界地図TopoJSON）
7. 都市Stepの動的HTML生成
8. マネージャー初期化（Chart, Map, Image）
9. scrollama初期化（.step要素の監視開始）
10. 初期Step（opening）の状態適用
```

### スクロール時の動作

```
1. ユーザースクロール
2. scrollamaがStep進入を検知（onStepEnter）
3. content.jsonから該当Stepの設定を取得
4. チャート更新: 設定に応じてレンダラーを呼び出し
   - visible: false → チャートを非表示
   - visible: true, updateMode: replace → チャートを再描画
   - visible: true, updateMode: transition → インプレース更新
5. 地図更新: モードに応じて地図状態を変更
   - center/zoomの変更
   - 都市マーカーの表示/非表示
   - 地域カラーリングの更新
6. 画像更新: 画像の表示/非表示、src変更
7. テキスト位置の適用
```

### 逆スクロール（スクロールバック）時の挙動
scrollamaはスクロール方向（`direction: "up"` / `"down"`）を検知し、イベントハンドラに渡す。逆スクロール時は以下の点で順方向と挙動が異なる。

- **トランジションモードの自動判定**: 逆方向にStepを戻る際、戻り先のStepと現在のStepが同一データファイルを使用している場合、updateModeが明示されていなくても自動的にtransitionモード（インプレース更新）が適用される。これにより、スクロールを戻してもチャートの再描画によるちらつきが発生しない。
- **レイヤー表示状態の復元**: 戻り先Stepの設定に基づき、チャート・地図・画像の表示状態が再適用される。
- **都市エピソードの巻き戻し**: 都市エピソードシーケンス内で逆スクロールした場合、訪問済みマーカーは戻り先の都市までの分のみ表示される。

### イベントバス（pubsub）
コンポーネント間の疎結合を実現するメッセージングシステム:

| イベント | 発行元 | 購読先 |
|---------|--------|--------|
| CHART_UPDATE | EventHandlers | ChartManager |
| MAP_UPDATE | EventHandlers | MapManager |
| IMAGE_UPDATE | EventHandlers | ImageManager |

---

## 12. レスポンシブ対応

### SVGチャート
- `viewBox` 属性で固定座標系（例: `0 0 800 600`）を定義
- `preserveAspectRatio="xMidYMid meet"` で中央配置＋アスペクト比維持
- CSSで `width: 100%; height: auto` を指定し、親コンテナに追従
- D3.jsコードは固定座標系で記述し、ブラウザのスケーリングに委ねる

### レイアウト
- Tailwind CSSのユーティリティクラスでレスポンシブ対応
- `min-h-screen` で各Stepを最低1画面分の高さに確保

---

## 13. フッター

最終Stepに表示されるフッター要素:
- JavaScriptで動的生成
- クレジット情報、データ出典、関連リンクを表示
- 感染症別テーマカラーで装飾

---

## 14. CSVデータ形式

チャート用CSVの形式については [ARCHITECTURE-CHARTS.md](ARCHITECTURE-CHARTS.md) のセクション11を参照。

---

## 15. 制約・注意事項

### コンテンツ改変禁止
- チャート設定、テキスト内容、データファイルの変更は作業者の許可なく行わない
- 機能実装・バグ修正のみに集中する

### Step増減時の同期
Step追加・削除時は以下の3ファイルを同時に修正すること:
1. **content.json**: steps配列の要素
2. **index.html**: `data-step` 属性を持つ `.step` 要素
3. **JavaScript**: Step参照箇所（フッター描画など）

### 統一実装の強制
- 感染症ごとの個別実装は厳禁
- 一つの感染症で修正したら、他の感染症も同様に修正する
- 設定ファイルの差異のみで感染症間の違いを表現する
