# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese interactive scrollytelling web application about HIV/AIDS created for JCIE (Japan Center for International Exchange). The application presents historical data and personal stories about HIV/AIDS through interactive charts and an immersive world map experience.

## Architecture

### Core Components

- **Scroll Controller** (`main.js`): Central orchestrator that manages scroll-triggered animations, data loading, state management, and component coordination using Scrollama.js and PubSub pattern
- **Chart System** (`chart-manager.js`): D3.js-based visualization engine supporting line charts, pie charts, and dual charts with responsive design and unified legend system
- **Map System** (`map.js`): Interactive world map using D3.js and geographic projections with zoom/pan capabilities and smooth transition effects
- **Modal Manager** (`map-modal.js`): Overlay modal system for displaying country-specific episodes with content management and error handling
- **CSS Configuration** (`tailwind.config.js`): Tailwind CSS configuration for responsive typography and mobile optimization
- **HTML Structure** (`index.html`): Single-page application with scrollable sections using data-step attributes (1z-5f) to trigger different visualizations
- **PubSub System** (`lib/pubsub.js`): Event-driven communication between components

### HTML構成要素

#### 入れ子構造
```
body
├── #mapBgContainer (全画面固定地図背景)
├── #largeFigure (全画面固定大型チャート)
│   └── #secondaryFigure (セカンダリチャート)
├── main (メインコンテンツ領域)
│   ├── header
│   │   └── nav (固定ナビゲーションバー)
│   ├── #intro (イントロセクション)
│   ├── #scrolly (スクロールテリングセクション)
│   │   ├── article (テキストコンテンツ)
│   │   │   └── .step[data-step] (スクロールトリガー要素群)
│   │   └── #smallFigure (小型チャート)
│   └── footer
│       └── #outro (アウトロセクション)
└── #modalCountry (国別エピソードモーダル)
    └── モーダル内容要素 (タイトル、画像、説明文、リンク)
```

#### 基本レイアウト
- **ナビゲーションバー** (`header > nav`): 固定ヘッダーでJCIEブランドとコンテンツ切り替え（エイズ・結核・マラリア）を提供
- **メインコンテンツ** (`main`): 相対配置でスクロール可能なコンテンツ領域
- **イントロセクション** (`#intro`): 上部余白を提供するための導入部

#### 可視化コンテナ
- **地図背景コンテナ** (`#mapBgContainer`): 全画面固定位置で世界地図を描画するための背景領域
- **大型チャートコンテナ** (`#largeFigure`): 全画面固定位置で大型チャートを表示するためのオーバーレイ領域
- **小型チャートコンテナ** (`#smallFigure`): 右側の粘着配置でデフォルトのチャート表示領域

#### スクロールテリング構造
- **スクロールセクション** (`#scrolly`): Flexboxレイアウトでテキストとチャートを並列配置
- **テキスト記事** (`article`): 左側（モバイルでは上部）に配置されたスクロール可能なストーリー領域
- **ステップ要素** (`.step`): 各data-step属性（1z-5f）を持つスクロールトリガー要素群
  - 見出しステップ（1z, 2z, 3z, 4z, 5z）: 各章の導入
  - 内容ステップ（1a-1c, 2a-2e, 3a-3, 4a-4d, 5a-5f）: 詳細なストーリーコンテンツ
  - 特殊ステップ（3）: 地図エピソード表示用の大型スクロール領域

#### モーダルシステム
- **国別エピソードモーダル** (`#modalCountry`): オーバーレイ形式で国別ストーリーを表示
- **モーダル内容要素**: タイトル、画像、説明文、外部リンクを含む構造化されたコンテンツ

#### フッター
- **アウトロセクション** (`#outro`): 終了メッセージを表示する終了部

### Data Flow

1. **Episode Data** (`data/episode.json`): Contains country stories with titles, descriptions, thumbnails, and URLs
2. **Chart Data** (`data/*.csv`): Time-series data for HIV/AIDS statistics across different regions
3. **Geographic Data** (`data/countries-110m.json`): TopoJSON world map data for country visualization

### Key Features

- **Scroll-triggered Visualization**: Different data-step values trigger specific charts or map interactions
- **Responsive Design**: Charts use viewBox for scalability, map adapts to screen size
- **Modal System**: Country episodes display in overlay modals with external links
- **Progressive Episode Display**: Map episodes advance based on scroll progress within step 3

## Development

### Running the Application

This is a static HTML application. Serve locally using any HTTP server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

### File Structure

- `assets/js/`: All JavaScript modules
- `assets/css/`: Styling (uses Tailwind CSS via CDN)
- `data/`: CSV and JSON data files
- `assets/thumb/`: Episode thumbnail images

### Key Technical Details

- Uses D3.js v7 for visualizations
- Tailwind CSS for styling
- Scrollama.js for scroll-based interactions
- No build process required - runs directly in browser
- Japanese language content throughout
- Responsive design supporting mobile and desktop