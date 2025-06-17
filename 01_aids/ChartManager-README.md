# ChartManager Architecture

## Overview

The new streamlined ChartManager is a coordinator class that manages specialized chart renderers rather than implementing chart functionality directly. This architecture provides better separation of concerns, maintainability, and extensibility.

## Architecture

### Core Components

```
ChartManager (Coordinator)
├── LineChartRenderer
├── BarChartRenderer  
├── PieChartRenderer
└── GridChartRenderer
```

### Base Classes
- **BaseManager**: Common functionality (show/hide, resize, state management)
- **ChartTransitions**: Unified animation and transition management

## New ChartManager Features

### 1. Coordination Pattern
The new ChartManager acts as a **factory and coordinator** rather than implementing chart logic:

```javascript
// Old approach (monolithic)
chartManager.renderLineChart(data, config);

// New approach (coordinated)
chartManager.updateChart({
    type: 'line',
    data: data,
    config: config,
    visible: true
});
```

### 2. Specialized Renderers
Each chart type has its own dedicated renderer:

- **LineChartRenderer**: Handles line charts and transitions
- **BarChartRenderer**: Handles bar charts with animations
- **PieChartRenderer**: Handles pie charts with arc animations
- **GridChartRenderer**: Handles complex grid layouts

### 3. Layout Management
Support for multiple layout types:

```javascript
// Single chart
chartManager.updateChart({
    type: 'line',
    data: data,
    config: config
});

// Dual layout
chartManager.updateChart({
    layout: 'dual',
    charts: [chart1Config, chart2Config]
});

// Triple layout
chartManager.updateChart({
    layout: 'triple', 
    charts: [chart1, chart2, chart3]
});

// Grid layout
chartManager.updateChart({
    layout: 'grid',
    config: gridConfig
});
```

### 4. Unified Transitions
All animations are coordinated through ChartTransitions:

```javascript
// Automatic transition coordination
chartManager.coordinateTransition('line', 'bar', {
    fadeOutDuration: 300,
    fadeInDuration: 600
});
```

## Public API

### Core Methods

#### `updateChart(chartData)`
Main method for updating charts. Automatically routes to appropriate renderer based on `type` or `layout`.

**Parameters:**
```javascript
{
    type: 'line' | 'bar' | 'pie',           // For single charts
    layout: 'dual' | 'triple' | 'grid',    // For multi-chart layouts
    data: Array,                            // Chart data
    config: Object,                         // Chart configuration
    visible: Boolean,                       // Visibility state
    updateMode: 'transition' | 'redraw',    // Update method
    direction: 'up' | 'down'                // Scroll direction
}
```

#### `show(options)` / `hide(options)`
Control visibility with transition options.

#### `resize()`
Handles responsive resizing by delegating to active renderer.

### Renderer Management

#### `getRenderer(type)`
Get specific renderer instance.

#### `hideInactiveRenderers(activeType)`
Hide all renderers except the specified type.

#### `coordinateTransition(fromType, toType, options)`
Manage smooth transitions between chart types.

## Renderer Interfaces

Each renderer implements a consistent interface:

### Required Methods
- `updateChart(chartData)` - Update the chart
- `show(options)` - Show with transitions
- `hide(options)` - Hide with transitions  
- `resize()` - Handle resize events

### For Layout Support
- `renderLineChartInGroup(g, data, config)` - Render in specific SVG group
- `renderBarChartInGroup(g, data, config)` - Render in specific SVG group
- `renderPieChartInGroup(g, data, config)` - Render in specific SVG group

## Migration Guide

### From Legacy ChartManager

#### Before (Legacy)
```javascript
const chartManager = new ChartManager('#chart');
chartManager.renderChart('line', data, config);
```

#### After (New)
```javascript
const chartManager = new ChartManager('#chart');
chartManager.updateChart({
    type: 'line',
    data: data,
    config: config,
    visible: true
});
```

### Backward Compatibility
- Legacy ChartManager remains available as `LegacyChartManager`
- Automatic fallback if new ChartManager is not loaded
- Existing code continues to work without modification

## Error Handling

### Graceful Degradation
- Missing renderers trigger fallback display
- Error messages guide users to load required scripts
- Validation prevents invalid data from causing crashes

### Error Context
```javascript
// Automatic error reporting with context
if (window.ErrorHandler) {
    ErrorHandler.handle(error, 'ChartManager.updateChart', {
        type: ErrorHandler.ERROR_TYPES.RENDER,
        severity: ErrorHandler.SEVERITY.HIGH,
        context: chartData
    });
}
```

## Performance Benefits

### Reduced Memory Usage
- Only active renderers are initialized
- Inactive renderers are hidden, not destroyed
- Lazy loading of specialized functionality

### Optimized Transitions
- ChartTransitions provides hardware-accelerated animations
- Coordinated timing prevents visual conflicts
- Adaptive duration based on device capabilities

### Better Caching
- Renderers maintain their own state
- Transition data is preserved between updates
- Less DOM manipulation and reflow

## Debugging

### Debug Information
```javascript
// Get comprehensive debug info
const debugInfo = chartManager.getDebugInfo();
console.log(debugInfo);

// Returns:
{
    className: 'ChartManager',
    isVisible: true,
    currentState: {...},
    activeRenderer: 'LineChartRenderer',
    currentLayout: 'single',
    rendererStates: {
        line: { available: true, visible: true },
        bar: { available: true, visible: false },
        pie: { available: true, visible: false },
        grid: { available: true, visible: false }
    },
    transitionManagerAvailable: true
}
```

### Renderer States
```javascript
// Check individual renderer states
const states = chartManager.getRendererStates();
```

## Integration Examples

### Basic Line Chart
```javascript
chartManager.updateChart({
    type: 'line',
    data: timeSeriesData,
    config: {
        xField: 'year',
        yField: 'value',
        multiSeries: true,
        colors: ['#2563eb', '#dc2626']
    },
    visible: true
});
```

### Dual Layout
```javascript
chartManager.updateChart({
    layout: 'dual',
    charts: [
        {
            title: 'Trend A',
            data: dataA,
            config: { type: 'line', xField: 'year', yField: 'value' }
        },
        {
            title: 'Trend B', 
            data: dataB,
            config: { type: 'line', xField: 'year', yField: 'value' }
        }
    ],
    visible: true
});
```

### Transition Between Types
```javascript
// From line chart to bar chart with smooth transition
chartManager.updateChart({
    type: 'bar',
    data: categoricalData,
    config: { xField: 'category', yField: 'value' },
    updateMode: 'transition',
    visible: true
});
```

## Future Enhancements

### Planned Features
- **Animation Sequences**: Complex multi-step animations
- **Interactive Coordination**: Synchronized interactions across renderers
- **Theme Integration**: Unified theming across all chart types
- **Plugin Architecture**: Third-party renderer registration

### Extension Points
- Custom renderer integration
- Layout pattern extensions
- Transition effect plugins
- Data transformation pipelines

## Files

- `ChartManager.js` - New streamlined coordinator class
- `chart-manager.js` - Legacy implementation (backward compatibility)
- `LineChartRenderer.js` - Line chart specialization
- `BarChartRenderer.js` - Bar chart specialization  
- `PieChartRenderer.js` - Pie chart specialization
- `GridChartRenderer.js` - Grid layout specialization
- `utils/ChartTransitions.js` - Unified transition management
- `utils/base-manager.js` - Common base functionality

The new architecture provides a clean, maintainable foundation for chart management while preserving all existing functionality and ensuring smooth migration paths.