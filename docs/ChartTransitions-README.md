# ChartTransitions - 統一トランジション管理システム

## 概要

ChartTransitions.jsは、全てのチャートレンダラー（LineChartRenderer、BarChartRenderer、PieChartRenderer、GridChartRenderer）で共通のトランジションロジックを提供する統一管理システムです。

## 主な機能

### 1. 統一されたトランジション設定
- チャート種別ごとのデフォルト設定
- 段階別（enter/update/exit）の最適化されたアニメーション
- AppDefaultsとの連携による設定の統一

### 2. Enter/Update/Exit パターンの統一実装
- Object Constancyの自動管理
- データバインディングの一元化
- 一貫したトランジション適用

### 3. チャート特有のアニメーション
- **ライン**: パス描画アニメーション、ポイント表示
- **棒グラフ**: 下からの伸びるアニメーション
- **円グラフ**: 角度ベースのアニメーション
- **グリッド**: 段階的フェードイン

### 4. エラーハンドリング
- フォールバック機能
- ErrorHandlerとの連携
- アニメーション無効化対応

## API リファレンス

### 基本メソッド

#### `createTransition(chartType, phase, customConfig)`
```javascript
const transition = ChartTransitions.createTransition('line', 'update', {
    duration: 800,
    easing: d3.easeElastic
});
```

#### `applyEnterUpdateExit(selection, data, keyFunction, callbacks, transitionConfig)`
```javascript
ChartTransitions.applyEnterUpdateExit(
    g.selectAll('.series-group'),
    newSeries,
    d => d.name,
    {
        onEnter: (enterSelection) => { /* 新要素の処理 */ },
        onUpdate: (allSelection, { allWithTransition }) => { /* 更新処理 */ },
        onExit: (exitSelection) => { /* 削除処理 */ }
    },
    { chartType: 'line' }
);
```

### 特化メソッド

#### ライン描画
```javascript
ChartTransitions.animateLine(pathSelection, lineGenerator, {
    chartType: 'line',
    phase: 'enter',
    animateEntry: true
});
```

#### 棒グラフ描画
```javascript
ChartTransitions.animateBars(barSelection, scales, {
    chartType: 'bar',
    phase: 'enter',
    xField: 'category',
    yField: 'value',
    innerHeight: 400
});
```

#### 円グラフ描画
```javascript
ChartTransitions.animateArcs(arcSelection, arcGenerator, {
    chartType: 'pie',
    phase: 'update'
});
```

#### ポイント描画
```javascript
ChartTransitions.animatePoints(circleSelection, scales, {
    chartType: 'line',
    xField: 'year',
    yField: 'value',
    radius: 3
});
```

### ユーティリティメソッド

#### 段階的アニメーション
```javascript
ChartTransitions.createStaggered(selection, {
    delay: 100,
    duration: 600,
    maxDelay: 1000
});
```

#### 軸更新
```javascript
ChartTransitions.updateAxis(axisSelection, axisGenerator, {
    chartType: 'line',
    duration: 1000
});
```

#### テキストアニメーション
```javascript
ChartTransitions.animateText(textSelection, {
    chartType: 'pie',
    phase: 'enter',
    delay: 500
});
```

#### Object Constancy支援
```javascript
const dataWithKeys = ChartTransitions.addObjectKeys(data, 'id', 'prefix');
```

## 設定システム

### デフォルト設定
```javascript
ChartTransitions.CONFIG = {
    DURATION: {
        INSTANT: 0,
        FAST: 300,
        NORMAL: 600,
        SLOW: 1000,
        VERY_SLOW: 1500
    },
    CHART_DEFAULTS: {
        line: {
            enter: { duration: 600, easing: d3.easeQuadOut },
            update: { duration: 1000, easing: d3.easeQuadInOut },
            exit: { duration: 500, easing: d3.easeBackIn }
        }
        // 他のチャートタイプも同様
    }
};
```

### AppDefaultsとの連携
- `window.AppDefaults.animation.chartTransitionDuration` を優先使用
- アダプティブスピード調整（モバイル対応）
- prefers-reduced-motion対応

## 使用例

### LineChartRenderer での使用
```javascript
// 軸の更新
ChartTransitions.updateAxis(g.select('.x-axis'), newXAxis, {
    chartType: 'line',
    duration: transitionDuration
});

// Enter/Update/Exitパターン
const seriesUpdateResult = ChartTransitions.applyEnterUpdateExit(
    g.selectAll('.series-group'),
    newSeries,
    d => d.name,
    {
        onEnter: (enterSelection) => {
            // 新しい系列の追加処理
        },
        onUpdate: (allSelection, { allWithTransition }) => {
            // 既存系列の更新処理
        }
    },
    { chartType: 'line' }
);
```

### BarChartRenderer での使用
```javascript
// 棒グラフの段階的描画
ChartTransitions.createStaggered(barSelection, {
    delay: 100,
    duration: 600
}).call(function(selection) {
    ChartTransitions.animateBars(selection, scales, {
        chartType: 'bar',
        phase: 'enter',
        xField: 'category',
        yField: 'value',
        innerHeight: innerHeight
    });
});
```

## エラーハンドリング

### 安全なトランジション実行
```javascript
ChartTransitions.safeTransition(() => {
    return complexTransitionFunction();
}, { context: 'chart-update' }, 'lineAnimation');
```

### フォールバック機能
- トランジション失敗時の即座更新
- 設定エラー時のデフォルト値使用
- 互換性確保のための段階的エラー処理

## パフォーマンス考慮事項

### 最適化機能
1. **アダプティブスピード**: デバイス性能に応じた速度調整
2. **段階的遅延制限**: maxDelayによる過度な遅延防止
3. **メモリ効率**: 不要な要素の適切な削除
4. **アクセシビリティ**: reduced-motion設定の尊重

### ベストプラクティス
- 大量データ時は段階的アニメーションを控えめに
- 同時実行するアニメーション数の制限
- 適切なキー関数による Object Constancy

## 今後の拡張可能性

### 計画中の機能
1. **3Dトランジション**: WebGL/Three.js連携
2. **物理ベースアニメーション**: spring/damping効果
3. **カスタムイージング**: 独自曲線定義
4. **パフォーマンス監視**: フレームレート測定
5. **A11Y強化**: スクリーンリーダー対応

### 拡張方法
新しいチャートタイプの追加:
```javascript
// 1. CONFIG.CHART_DEFAULTSに設定追加
ChartTransitions.CONFIG.CHART_DEFAULTS.newChart = {
    enter: { duration: 500, easing: d3.easeQuadOut },
    update: { duration: 800, easing: d3.easeQuadInOut },
    exit: { duration: 400, easing: d3.easeBackIn }
};

// 2. 専用アニメーションメソッド追加
ChartTransitions.animateNewChart = function(selection, config) {
    // 実装
};
```

## デバッグとテスト

### デバッグ情報取得
```javascript
const debugInfo = ChartTransitions.getDebugInfo();
console.log(debugInfo);
```

### テストページ
`test-chart-transitions.html` でChartTransitionsの基本機能をテスト可能

### ログ出力
- エラー時の詳細ログ
- パフォーマンス測定ログ
- 設定確認ログ

## 依存関係

### 必須
- D3.js v7+
- AppDefaults（defaults.js）

### オプション
- AnimationConfig（animation-config.js）
- ErrorHandler（error-handler.js）
- SVGHelper（svg-helper.js）

## ファイル構成

```
assets/js/utils/
├── ChartTransitions.js          # メインファイル
├── animation-config.js          # アニメーション設定（既存）
└── ...

assets/js/
├── LineChartRenderer.js         # 更新済み
├── BarChartRenderer.js          # 更新済み
├── PieChartRenderer.js          # 更新済み
├── GridChartRenderer.js         # 更新済み
└── ...

test-chart-transitions.html      # テストページ
```

## まとめ

ChartTransitions.jsにより、以下を実現：

1. **コードの一元化**: 重複するトランジションロジックの統合
2. **一貫性**: 全チャートでの統一されたアニメーション体験
3. **保守性**: 単一箇所でのトランジション設定管理
4. **拡張性**: 新しいチャートタイプの容易な追加
5. **パフォーマンス**: 最適化されたアニメーション実行
6. **アクセシビリティ**: ユーザー設定に応じた動作調整

このシステムにより、開発効率の向上とユーザー体験の一貫性を両立させています。