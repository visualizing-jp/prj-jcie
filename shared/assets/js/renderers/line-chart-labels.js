/**
 * LineChartLabels - 折れ線グラフのラベル処理
 * ラベル配置、衝突検出、レンダリングなどを専門的に処理
 */
class LineChartLabels {
    /**
     * 凡例を追加
     */
    static addLegend(renderer, svg, series, colorScale, width, height) {
        const legendGroup = svg.append('g')
            .attr('class', 'chart-legend');

        const legendItems = legendGroup.selectAll('.legend-item')
            .data(series)
            .enter()
            .append('g')
            .attr('class', 'legend-item');

        legendItems.append('rect')
            .attr('x', 0)
            .attr('y', -10)
            .attr('width', 12)
            .attr('height', 12)
            .attr('fill', d => colorScale(d.name));

        legendItems.append('text')
            .attr('x', 18)
            .attr('y', 0)
            .attr('dy', '-0.1em')
            .style('font-size', '12px')
            .style('text-anchor', 'start')
            .text(d => d.name);

        let totalLegendWidth = 0;
        const legendPadding = 25;

        legendItems.each(function() {
            const itemWidth = this.getBBox().width;
            d3.select(this).attr('transform', `translate(${totalLegendWidth}, 0)`);
            totalLegendWidth += itemWidth + legendPadding;
        });

        totalLegendWidth -= legendPadding;

        const legendX = width - renderer.config.margin?.right - totalLegendWidth;
        const legendY = 40;

        legendGroup.attr('transform', `translate(${legendX}, ${legendY})`);
    }

    /**
     * コンパクト凡例を追加
     */
    static addCompactLegend(renderer, g, series, colorScale, width, height) {
        const legendLayout = renderer.config?.legend || {};
        const orientation = legendLayout.orientation || 'vertical';
        const position = legendLayout.position || 'bottom';

        if (!legendLayout.show) return;

        const legendGroup = g.append('g')
            .attr('class', 'chart-legend');

        const legendItems = legendGroup.selectAll('.legend-item')
            .data(series)
            .enter()
            .append('g')
            .attr('class', 'legend-item');

        // 凡例アイテムのスタイル
        legendItems.append('rect')
            .attr('width', 12)
            .attr('height', 12)
            .attr('fill', d => colorScale(d.name))
            .attr('rx', 2);

        legendItems.append('text')
            .attr('x', 16)
            .attr('y', 10)
            .style('font-size', '11px')
            .style('font-family', 'sans-serif')
            .text(d => d.name);

        // 凡例のレイアウト計算
        if (orientation === 'horizontal') {
            let xOffset = 0;
            legendItems.each(function() {
                d3.select(this).attr('transform', `translate(${xOffset}, 0)`);
                xOffset += this.getBBox().width + 15;
            });

            // 凡例の位置を設定
            if (position === 'bottom') {
                legendGroup.attr('transform', `translate(10, ${height + 20})`);
            }
        } else {
            let yOffset = 0;
            legendItems.each(function() {
                d3.select(this).attr('transform', `translate(0, ${yOffset})`);
                yOffset += 18;
            });

            if (position === 'bottom') {
                legendGroup.attr('transform', `translate(10, ${height + 20})`);
            }
        }
    }

    /**
     * インラインラベルを追加
     */
    static addInlineLabels(renderer, g, series, colorScale, context) {
        if (!series || series.length <= 1) return;

        const inlineConfig = renderer.config?.inlineLabels || {};
        if (!inlineConfig.enabled) return;

        const labelGroup = g.append('g')
            .attr('class', 'inline-labels');

        // ラベルデータを生成
        let labels = [];
        series.forEach((seriesData, seriesIndex) => {
            const lastPoint = seriesData.values[seriesData.values.length - 1];
            if (!lastPoint) return null;

            const xField = renderer.config?.xField || 'year';
            const yField = renderer.config?.yField || 'value';

            labels.push({
                name: seriesData.name,
                x: context.xScale(+lastPoint[xField]),
                y: context.yScale(+lastPoint[yField]),
                value: lastPoint[yField],
                seriesIndex: seriesIndex,
                color: colorScale(seriesData.name)
            });
        });

        // ラベル位置を最適化
        const optimizedLabels = LineChartLabels.optimizeLabelPositions(renderer, labels, context.width, context.height);

        // ラベルを描画
        LineChartLabels.renderInlineLabels(renderer, labelGroup, optimizedLabels, context);
    }

    /**
     * デュアルレイアウト用インラインラベルを追加
     */
    static addInlineLabelsDualLayout(renderer, g, series, colorScale, context) {
        if (!series || series.length <= 1) return;

        const labelGroup = g.append('g')
            .attr('class', 'inline-labels-dual');

        let labels = [];
        series.forEach((seriesData, seriesIndex) => {
            const lastPoint = seriesData.values[seriesData.values.length - 1];
            if (!lastPoint) return null;

            const xField = renderer.config?.xField || 'year';
            const yField = renderer.config?.yField || 'value';

            labels.push({
                name: seriesData.name,
                x: context.xScale(+lastPoint[xField]),
                y: context.yScale(+lastPoint[yField]),
                value: lastPoint[yField],
                seriesIndex: seriesIndex,
                color: colorScale(seriesData.name)
            });
        });

        // デュアルレイアウト用配置
        const optimizedLabels = LineChartLabels.applyDualLayoutPlacement(renderer, labels, context.width, context.height);
        LineChartLabels.renderDualLayoutLabels(renderer, labelGroup, optimizedLabels, renderer.config);
    }

    /**
     * デュアルレイアウトの配置を適用
     */
    static applyDualLayoutPlacement(renderer, labels, width, height, config) {
        const config_ = config || renderer.config;
        const chartHeight = height - (config_?.margin?.top || 0) - (config_?.margin?.bottom || 0);
        const minSpacing = 30;

        // ラベルを上下交互に配置
        return labels.map((label, index) => ({
            ...label,
            position: index % 2 === 0 ? 'top' : 'bottom',
            yOffset: index % 2 === 0 ? -15 : 15
        }));
    }

    /**
     * デュアルレイアウトラベルを描画
     */
    static renderDualLayoutLabels(renderer, labelGroup, labels, config) {
        const textElements = labelGroup.selectAll('text')
            .data(labels)
            .enter()
            .append('text')
            .attr('x', d => d.x)
            .attr('y', d => d.y + d.yOffset)
            .attr('text-anchor', 'middle')
            .attr('dy', d => d.position === 'top' ? '-0.5em' : '1em')
            .attr('fill', d => d.color)
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .text(d => d.name);

        // リーダーラインを追加
        if (config?.enableLeaderLines) {
            LineChartLabels.addLeaderLines(renderer, labelGroup, labels);
        }
    }

    /**
     * アニメーション付きインラインラベルを追加
     */
    static addInlineLabelsWithAnimation(renderer, g, series, colorScale, context) {
        if (!series || series.length <= 1) return;

        const labelGroup = g.append('g')
            .attr('class', 'inline-labels-animated');

        let labels = [];
        series.forEach((seriesData, seriesIndex) => {
            const lastPoint = seriesData.values[seriesData.values.length - 1];
            if (!lastPoint) return null;

            const xField = renderer.config?.xField || 'year';
            const yField = renderer.config?.yField || 'value';

            labels.push({
                name: seriesData.name,
                x: context.xScale(+lastPoint[xField]),
                y: context.yScale(+lastPoint[yField]),
                value: lastPoint[yField],
                seriesIndex: seriesIndex,
                color: colorScale(seriesData.name)
            });
        });

        const optimizedLabels = LineChartLabels.optimizeLabelPositions(renderer, labels, context.width, context.height);

        // アニメーションで表示
        const textElements = labelGroup.selectAll('text')
            .data(optimizedLabels)
            .enter()
            .append('text')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('text-anchor', 'middle')
            .attr('fill', d => d.color)
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .style('opacity', 0)
            .text(d => d.name)
            .transition()
            .duration(500)
            .delay((d, i) => i * 100)
            .style('opacity', 1);
    }

    /**
     * ラベル位置を最適化
     */
    static optimizeLabelPositions(renderer, labels, width, height, config) {
        const config_ = config || renderer.config;

        // ラベル配置を前処理
        let processedLabels = LineChartLabels.preProcessLabelPositions(renderer, labels, config_);

        // 衝突回避を適用
        processedLabels = LineChartLabels.applySimpleCollisionAvoidance(renderer, processedLabels, config_);

        // 後処理（チャート内に収まるよう調整）
        processedLabels = LineChartLabels.postProcessLabelPositions(renderer, processedLabels, width, height, config_);

        return processedLabels;
    }

    /**
     * ラベル配置の前処理
     */
    static preProcessLabelPositions(renderer, labels, config) {
        return labels.map(label => ({
            ...label,
            xOffset: 10,
            yOffset: 0
        }));
    }

    /**
     * ラベル配置の後処理
     */
    static postProcessLabelPositions(renderer, labels, width, height, config) {
        const margin = config?.margin || { top: 20, right: 20, bottom: 20, left: 20 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        return labels.map(label => {
            let x = label.x + (label.xOffset || 10);
            let y = label.y + (label.yOffset || 0);

            // チャート領域内に収まるよう調整
            if (x > width - 100) x = width - 100;
            if (y < margin.top + 10) y = margin.top + 10;
            if (y > height - margin.bottom - 10) y = height - margin.bottom - 10;

            return { ...label, x, y };
        });
    }

    /**
     * 決定論的なラベル配置を適用
     */
    static applyDeterministicLabelPlacement(renderer, labels, width, height, config) {
        const chartHeight = height - (config?.margin?.top || 0) - (config?.margin?.bottom || 0);
        const requiredHeight = labels.length * 20;

        if (requiredHeight <= chartHeight) {
            return LineChartLabels.distributeLabelsCentered(renderer, labels, chartHeight, requiredHeight, 20);
        } else if (requiredHeight * 0.7 <= chartHeight) {
            return LineChartLabels.distributeLabelsEvenly(renderer, labels, config?.margin?.top || 0, height - (config?.margin?.bottom || 0), 20);
        } else {
            return LineChartLabels.distributeLabelsCompressed(renderer, labels, config?.margin?.top || 0, height - (config?.margin?.bottom || 0));
        }
    }

    /**
     * ラベルを中央に配置
     */
    static distributeLabelsCentered(renderer, labels, chartHeight, requiredHeight, minSpacing) {
        const startY = (chartHeight - requiredHeight) / 2;
        return labels.map((label, i) => ({
            ...label,
            y: startY + i * (requiredHeight / labels.length)
        }));
    }

    /**
     * X位置を改善する
     */
    static adjustXPositionsImproved(renderer, labels, width, config) {
        return labels.map(label => {
            let x = label.x + 10;
            if (x > width - 80) {
                x = label.x - 80;
            }
            return { ...label, x };
        });
    }

    /**
     * ラベルを均等に分布
     */
    static distributeLabelsEvenly(renderer, labels, minY, maxY, minSpacing) {
        const availableHeight = maxY - minY;
        const step = availableHeight / labels.length;

        return labels.map((label, i) => ({
            ...label,
            y: minY + step * (i + 0.5)
        }));
    }

    /**
     * ラベルを圧縮配置
     */
    static distributeLabelsCompressed(renderer, labels, minY, maxY) {
        const availableHeight = maxY - minY;
        const step = availableHeight / (labels.length - 1 || 1);

        return labels.map((label, i) => ({
            ...label,
            y: labels.length === 1 ? (minY + maxY) / 2 : minY + step * i
        }));
    }

    /**
     * X位置を調整
     */
    static adjustXPositions(renderer, labels, width, config) {
        return labels.map(label => {
            let x = label.x + 10;
            if (x + 50 > width) {
                x = label.x - 50;
            }
            return { ...label, x };
        });
    }

    /**
     * シンプルな衝突回避を適用
     */
    static applySimpleCollisionAvoidance(renderer, labels, config) {
        const minDistance = (config?.minDistance || 30);

        for (let i = 0; i < labels.length; i++) {
            for (let j = i + 1; j < labels.length; j++) {
                if (LineChartLabels.isLabelsOverlapping(renderer, labels[i], labels[j], minDistance)) {
                    labels[j] = LineChartLabels.adjustLabelPosition(renderer, labels[j], labels[i], config);
                }
            }
        }

        return labels;
    }

    /**
     * ラベルが重なっているか判定
     */
    static isLabelsOverlapping(renderer, label1, label2, minDistance) {
        const dx = label2.x - label1.x;
        const dy = label2.y - label1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        return distance < minDistance;
    }

    /**
     * ラベルの位置を調整
     */
    static adjustLabelPosition(renderer, currentLabel, otherLabel, config) {
        const dx = currentLabel.x - otherLabel.x;
        const dy = currentLabel.y - otherLabel.y;
        const minDistance = config?.minDistance || 30;

        if (Math.abs(dx) < config?.minDistance) {
            if (dy >= 0) {
                currentLabel.y = otherLabel.y + minDistance;
            } else {
                currentLabel.y = otherLabel.y - minDistance;
            }
        }

        return currentLabel;
    }

    /**
     * リーダーラインを追加
     */
    static addLeaderLines(renderer, labelGroup, labels) {
        const lineData = labelGroup.selectAll('.leader-line')
            .data(labels)
            .enter()
            .append('line')
            .attr('class', 'leader-line')
            .attr('x1', d => d.originalX || d.x)
            .attr('y1', d => d.originalY || d.y)
            .attr('x2', d => d.x)
            .attr('y2', d => d.y)
            .attr('stroke', '#999')
            .attr('stroke-width', 0.5)
            .attr('stroke-dasharray', '2,2');
    }

    /**
     * インラインラベルを描画
     */
    static renderInlineLabels(renderer, labelGroup, labels, context) {
        const textElements = labelGroup.selectAll('text')
            .data(labels)
            .enter()
            .append('text')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('text-anchor', 'start')
            .attr('dy', '0.35em')
            .attr('fill', d => d.color)
            .style('font-size', '12px')
            .style('font-weight', 'bold')
            .style('pointer-events', 'none')
            .text(d => d.name);

        // リーダーラインが設定されている場合は追加
        if (renderer.config?.inlineLabels?.enableLeaderLines) {
            LineChartLabels.addLeaderLines(renderer, labelGroup, labels);
        }
    }
}

// グローバルスコープで利用可能にする
window.LineChartLabels = LineChartLabels;
