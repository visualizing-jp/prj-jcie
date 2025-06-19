# 設定ファイル分割システム

## 概要

エイズ対策スクロールテリングアプリケーションの設定ファイルを機能別・環境別に分割し、保守性と柔軟性を向上させるシステムです。

## ファイル構造

```
config/
├── main.config.json              # メイン設定（全体の依存関係管理）
├── content.config.json           # コンテンツ設定（stepsの配列）
├── settings.config.json          # アプリケーション設定（レイアウト、トランジション等）
├── app.config.json              # 既存のアプリ設定
├── theme.config.json            # 既存のテーマ設定  
├── animation.config.json        # 既存のアニメーション設定
└── environment/
    ├── development.json         # 開発環境設定
    └── production.json          # 本番環境設定
```

## 主要機能

### 1. 環境自動判定
- ホスト名とURLから開発環境/本番環境を自動判定
- localhost、127.0.0.1、file:// プロトコルは開発環境として認識

### 2. 階層的設定マージ
以下の順序で設定をマージ：
1. 環境設定（development.json または production.json）
2. アプリケーション設定（app.config.json）
3. テーマ設定（theme.config.json）
4. アニメーション設定（animation.config.json）
5. 一般設定（settings.config.json）
6. コンテンツ設定（content.config.json）

### 3. 既存コードとの互換性
- `window.ConfigLoader.getLegacyCompatibleConfig()` で旧形式のconfig.jsonと同じ構造を取得
- 既存のmain.jsは最小限の変更で動作

## 使用方法

### 基本的な使用方法

```javascript
// 設定システムの読み込み
await window.ConfigLoader.loadAll();

// 旧形式互換の設定取得
const config = window.ConfigLoader.getLegacyCompatibleConfig();
console.log('Steps:', config.steps);
console.log('Settings:', config.settings);

// ドット記法での設定取得
const debugMode = window.ConfigLoader.get('debug.enabled', false);
const transitionDuration = window.ConfigLoader.get('transition.duration', 500);

// 環境情報の取得
const env = window.ConfigLoader.getEnvironment();
console.log('Environment:', env.type); // 'development' or 'production'
```

### 新しいAPIメソッド

```javascript
// 設定タイプ別取得
const contentConfig = window.ConfigLoader.getConfigByType('content');
const settingsConfig = window.ConfigLoader.getConfigByType('settings');

// マージ済み全設定取得
const mergedConfig = window.ConfigLoader.getConfig();

// デバッグモード判定
const isDebug = window.ConfigLoader.isDebugMode();
```

## 設定ファイルの詳細

### main.config.json
全体の設定ファイル依存関係と読み込み順序を管理：

```json
{
  "version": "1.0.0",
  "configFiles": {
    "content": "config/content.config.json",
    "settings": "config/settings.config.json",
    // ...その他の設定ファイル
  },
  "environment": {
    "auto": true,
    "development": "config/environment/development.json",
    "production": "config/environment/production.json"
  },
  "loadOrder": ["environment", "app", "theme", "animation", "settings", "content"],
  "mergeStrategy": {
    "deep": true,
    "arrayMerge": "replace",
    "overwriteOnConflict": true
  }
}
```

### environment/development.json
開発環境固有の設定：

```json
{
  "debug": {
    "enabled": true,
    "verbose": true,
    "showConfigLoading": true
  },
  "performance": {
    "enableCaching": false,
    "preloadData": true
  },
  "features": {
    "hotReload": true,
    "devTools": true
  }
}
```

### environment/production.json
本番環境固有の設定：

```json
{
  "debug": {
    "enabled": false,
    "verbose": false
  },
  "performance": {
    "enableCaching": true,
    "optimizeRenders": true
  },
  "features": {
    "hotReload": false,
    "devTools": false
  }
}
```

## 移行ガイド

### 旧config.jsonからの移行

1. **元のconfig.jsonはバックアップとして保持**
2. **stepsは `config/content.config.json` に移動**
3. **settingsは `config/settings.config.json` に移動**
4. **main.jsで新しいConfigLoaderを使用**

```javascript
// 旧方式
const config = await d3.json('config.json');

// 新方式
await window.ConfigLoader.loadAll();
const config = window.ConfigLoader.getLegacyCompatibleConfig();
```

## テスト方法

### テストページの利用
`config-system-test.html` でシステムの動作確認：

1. 環境検出テスト
2. 設定読み込みテスト
3. 互換性テスト
4. 設定取得テスト
5. デバッグ情報表示

### 手動テスト
```javascript
// ブラウザのコンソールで実行
await window.ConfigLoader.loadAll();
console.log('Environment:', window.ConfigLoader.getEnvironment());
console.log('Config:', window.ConfigLoader.getLegacyCompatibleConfig());
console.log('Debug mode:', window.ConfigLoader.isDebugMode());
```

## 利点

1. **保守性向上**: 機能別ファイル分割により管理が容易
2. **環境対応**: 開発/本番で異なる設定を自動適用
3. **後方互換性**: 既存コードは最小限の変更で動作
4. **拡張性**: 新しい設定ファイルを簡単に追加可能
5. **デバッグ支援**: 環境別の詳細ログとエラーハンドリング

## 今後の拡張

- ユーザー固有設定ファイル
- 動的設定更新機能
- 設定ファイルのバリデーション
- 設定エディターUI
- パフォーマンス最適化（キャッシュ機能）

## トラブルシューティング

### よくある問題

1. **設定ファイルが見つからない**
   - ファイルパスを確認
   - HTTPSアクセスでCORSエラーが発生していないか確認

2. **環境が正しく検出されない**
   - ホスト名の設定を確認
   - `_detectEnvironment()` メソッドのロジックを確認

3. **既存機能が動作しない**
   - `getLegacyCompatibleConfig()` が正しい構造を返しているか確認
   - 設定のマージ処理を確認

### デバッグ方法

```javascript
// 設定読み込み状況を確認
console.log('ConfigLoader configs:', window.ConfigLoader.configs);
console.log('Merged config:', window.ConfigLoader.getConfig());

// 環境設定を確認
console.log('Environment:', window.ConfigLoader.getEnvironment());

// 個別設定ファイルを確認
console.log('Content config:', window.ConfigLoader.getConfigByType('content'));
```