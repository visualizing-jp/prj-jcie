# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese interactive scrollytelling web application about HIV/AIDS created for JCIE (Japan Center for International Exchange). The application presents historical data and personal stories about HIV/AIDS through interactive charts and an immersive world map experience.

## Architecture

### Core Components

- **HTML Structure** (`index.html`): Single-page application with scrollable sections using data-step attributes (1z-5f) to trigger different visualizations
- **Chart System** (`chart-manager.js`): D3.js-based visualization manager supporting line charts and pie charts with responsive design
- **Map System** (`map.js`): Interactive world map using D3.js and TopoJSON for displaying country-specific episodes
- **Scroll Controller** (`main.js`): Uses Scrollama.js for scroll-triggered animations and state management
- **PubSub System** (`lib/pubsub.js`): Event-driven communication between components

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