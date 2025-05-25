// 世界地図全体表示
function showWorldMap() {
    if (!window.mapSvgContainer) {
        console.error('Map not initialized');
        return;
    }

    const widthMap = window.innerWidth;
    const heightMap = window.innerHeight;
    
    // 地図を表示状態に設定
    window.mapSvgContainer
        .style('opacity', '1')
        .transition()
        .duration(800)
        .call(window.mapZoom.transform, d3.zoomIdentity
            .translate(widthMap / 2, heightMap / 2)
            .scale(widthMap / 2 / Math.PI));
}

// 地図を非表示にする
function hideWorldMap() {
    if (!window.mapSvgContainer) {
        console.error('Map not initialized');
        return;
    }

    window.mapSvgContainer
        .transition()
        .duration(500)
        .style('opacity', '0')
        .on('end', () => {
            const mapBgContainer = document.getElementById('mapBgContainer');
            if (mapBgContainer) {
                mapBgContainer.style.display = 'none';
            }
        });
}

// 国を中心にズーム
function centerCountryOnMap(countryName) {
    if (!window.mapGeoData || !window.mapSvgContainer) {
        console.error('Map not initialized');
        return;
    }

    const country = window.mapGeoData.find(c => c.properties.name === countryName);
    if (!country) {
        console.warn('Country not found:', countryName);
        return;
    }

    const bounds = window.mapPath.bounds(country);
    const widthMap = window.innerWidth;
    const heightMap = window.innerHeight;
    const scale = 0.8 / Math.max((bounds[1][0] - bounds[0][0]) / widthMap, (bounds[1][1] - bounds[0][1]) / heightMap);
    const translate = [
        widthMap / 2 - scale * (bounds[0][0] + bounds[1][0]) / 2,
        heightMap / 2 - scale * (bounds[0][1] + bounds[1][1]) / 2
    ];

    window.mapSvgContainer
        .transition()
        .duration(800)
        .call(window.mapZoom.transform, d3.zoomIdentity
            .translate(translate[0], translate[1])
            .scale(scale));
}

// 地図の初期化
function initMap() {
    console.log("initMap");
    let mapInitialized = false;

    // データ読み込み
    d3.json("data/episode.json")
        .then(episodeData => {
            d3.json("data/countries-110m.json")
                .then(data => {
                    const countries = topojson.feature(data, data.objects.countries);
                    
                    // SVGの作成（mapBgContainerに描画）
                    const mapSvgContainer = d3.select("#mapBgContainer")
                        .append("svg")
                        .attr("width", widthMap)
                        .attr("height", heightMap)
                        .call(zoom)
                        .style("cursor", "move")
                        .style("opacity", "0"); // 初期状態で非表示

                    // 地図の描画
                    const g = mapSvgContainer.append("g");
                    g.selectAll("path")
                        .data(countries.features)
                        .enter()
                        .append("path")
                        .attr("d", path)
                        .attr("class", "country")
                        .attr("data-country", d => d.properties.name)
                        .style("fill", "#ccc")
                        .style("stroke", "#fff")
                        .style("stroke-width", 0.5);

                    // グローバル変数として保存
                    window.mapSvg = g;
                    window.mapGeoData = countries.features;
                    window.mapProjection = wmProjection;
                    window.mapPath = path;
                    window.mapZoom = zoom;
                    window.mapSvgContainer = mapSvgContainer;

                    // エピソードデータの保存
                    window.mapEpisodeData = episodeData;
                    window.mapEpisodeOrder = episodeData.map(episode => {
                        return countries.features.find(country => 
                            country.properties.name === episode.country
                        );
                    }).filter(Boolean);
                    
                    // 初期化完了を通知
                    mapInitialized = true;
                    PubSub.publish('init:scroll');
                })
                .catch(error => {
                    console.error("Error loading countries data:", error);
                    throw error;
                });
        })
        .catch(error => {
            console.error("Error loading episode data:", error);
            throw error;
        });

    // 地図の初期化が完了するまでスクロールを無効化
    return new Promise((resolve) => {
        const checkMapInit = setInterval(() => {
            if (mapInitialized) {
                clearInterval(checkMapInit);
                resolve();
            }
        }, 100);
    });
}