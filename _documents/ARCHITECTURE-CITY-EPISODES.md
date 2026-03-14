# 都市エピソード仕様書

本書は [ARCHITECTURE.md](ARCHITECTURE.md) の補足資料として、都市エピソード機能の詳細仕様を定義する。

---

## 1. 概要

都市エピソードは、世界各地の感染症対策の現場で活動する人々のエピソードを、地図上の都市移動として表現するシーケンスである。

他のStepが各々独立して完結しているのに対し、都市エピソードは**複数のStepが一つの背景地図を共有して構成される**点が特殊である。スクロールに応じて同一の世界地図上で都市間を移動し、訪問済みの都市マーカーが蓄積されていく。

### シーケンス構成

```
episode-intro（導入）
  → 世界地図の全体表示（world-overview モード）

city-episodes-0（都市1）
  → 都市1にズームイン（single-city モード）
  → エピソード紹介表示

city-episodes-1（都市2）
  → 都市2にズームイン
  → 訪問済みの都市1のマーカーは維持
  → エピソード紹介表示

city-episodes-2（都市3）
  → 都市3にズームイン
  → 訪問済みの都市1,2のマーカーは維持
  → エピソード紹介表示

  ... 以降、都市数分のStepが続く
```

---

## 2. 動的Step生成

都市エピソードのStep要素はHTMLに静的に記述されず、JavaScriptで動的に生成される。

- **データソース**: `config/content-map.json` の `cities` 配列
- **挿入先**: `#city-steps-container`（HTMLに空のコンテナとして配置）
- **生成タイミング**: アプリケーション初期化時（scrollama初期化前）

各都市Stepは以下の要素を含む:
- 地図上での都市位置へのズーム
- 都市マーカー
- エピソード紹介（タイトル、説明、サムネイル画像）
- 外部リンク（動画・記事へのリンク）

---

## 3. 地図の状態管理

### 導入Step（episode-intro）

```json
{
  "id": "episode-intro",
  "map": {
    "center": [0, 0],
    "zoom": 1,
    "visible": true,
    "mode": "world-overview",
    "useRegionColors": true,
    "lightenAllCountries": true
  }
}
```

### 各都市Step（city-episodes-N）

```json
{
  "id": "city-episodes-0",
  "map": {
    "visible": true,
    "mode": "single-city",
    "cityId": "lagos",
    "citiesFile": "config/content-map.json",
    "useRegionColors": true,
    "lightenNonVisited": true
  }
}
```

### 地図の振る舞い
| 機能 | 説明 |
|------|------|
| 都市ズーム | `cityId` で指定された都市の座標にズームイン |
| 訪問国追跡 | 訪問済みの国をハイライト状態で維持 |
| 未訪問国の淡色化 | `lightenNonVisited: true` で訪問していない国を薄く表示 |
| マーカー蓄積 | 過去に訪問した都市のマーカーは表示され続ける |

---

## 4. content-map.json スキーマ

```json
{
  "timeline": {
    "title": "タイムラインタイトル",
    "description": "説明文"
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
        "url": "https://外部リンク",
        "thumbnail": "サムネイルファイル名",
        "description": "エピソード説明"
      },
      "style": {
        "color": "#ff6b6b",
        "size": 8
      },
      "transitions": {
        "distanceFromPrevious": 3500,
        "scrollHeight": "150vh",
        "routeType": "start | flight"
      }
    }
  ]
}
```

### フィールド説明

#### 都市基本情報
| フィールド | 説明 |
|-----------|------|
| `id` | 都市の一意識別子。content.jsonの `cityId` と対応 |
| `name` | 日本語表示名 |
| `nameEn` | 英語表示名 |
| `country` | 所属国名 |
| `latitude` / `longitude` | 座標（地図上のズーム先） |
| `order` | 表示順序 |

#### エピソード情報（data）
| フィールド | 説明 |
|-----------|------|
| `title` | エピソードタイトル |
| `url` | 外部リンク（動画・記事） |
| `thumbnail` | サムネイル画像ファイル名（`thumb/` ディレクトリ内） |
| `description` | エピソードの短い説明文 |

#### スタイル（style）
| フィールド | 説明 |
|-----------|------|
| `color` | 都市マーカーの色 |
| `size` | 都市マーカーのサイズ |

#### トランジション（transitions）
| フィールド | 説明 |
|-----------|------|
| `distanceFromPrevious` | 前の都市からの距離（表示用） |
| `scrollHeight` | このStepのスクロール高さ |
| `routeType` | `start`（起点）/ `flight`（都市間移動） |
