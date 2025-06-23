/**
 * 統一テンプレート生成システム
 * 共通HTMLテンプレートから各感染症のHTMLを生成
 */

const fs = require('fs');
const path = require('path');

class TemplateGenerator {
    constructor() {
        this.diseaseConfig = {
            'aids': {
                type: 'aids',
                title: 'HIV/エイズとの闘い ～データで見る希望と課題～',
                navName: 'エイズ',
                folder: '01_aids'
            },
            'tuberculosis': {
                type: 'tuberculosis', 
                title: '結核との闘い ～データで見る希望と課題～',
                navName: '結核',
                folder: '02_tuberculosis'
            },
            'malariae': {
                type: 'malariae',
                title: 'マラリアとの闘い ～データで見る希望と課題～', 
                navName: 'マラリア',
                folder: '03_malariae'
            }
        };
        
        this.templatePath = path.join(__dirname, '../templates/unified-index.html');
        this.rootPath = path.join(__dirname, '../../');
    }

    /**
     * テンプレートを読み込み
     */
    loadTemplate() {
        return fs.readFileSync(this.templatePath, 'utf8');
    }

    /**
     * テンプレートの変数を置換
     */
    replaceVariables(template, config) {
        return template
            .replace(/{DISEASE_TYPE}/g, config.type)
            .replace(/{DISEASE_TITLE}/g, config.title)
            .replace(/{DISEASE_NAV_NAME}/g, config.navName);
    }

    /**
     * ナビゲーションを更新（現在のページを適切に設定）
     */
    updateNavigation(html, currentDisease) {
        // 現在のページをspanに、他をaリンクに変更
        const diseases = ['aids', 'tuberculosis', 'malariae'];
        const navMap = {
            'aids': 'エイズ',
            'tuberculosis': '結核', 
            'malariae': 'マラリア'
        };

        let navHTML = '';
        diseases.forEach(disease => {
            const config = this.diseaseConfig[disease];
            if (disease === currentDisease) {
                navHTML += `                <li><span class="nav-current">${navMap[disease]}</span></li>\n`;
            } else {
                navHTML += `                <li><a href="../${config.folder}/" class="nav-link">${navMap[disease]}</a></li>\n`;
            }
        });

        // 既存のナビゲーション部分を置換
        return html.replace(
            /<ul>\s*<li><a href=".*?<\/ul>/s,
            `<ul>\n${navHTML}            </ul>`
        );
    }

    /**
     * 特定の感染症のHTMLを生成
     */
    generateForDisease(diseaseType) {
        const config = this.diseaseConfig[diseaseType];
        if (!config) {
            throw new Error(`Unknown disease type: ${diseaseType}`);
        }

        const template = this.loadTemplate();
        let html = this.replaceVariables(template, config);
        html = this.updateNavigation(html, diseaseType);

        return html;
    }

    /**
     * 全感染症のHTMLを生成
     */
    generateAll() {
        const results = {};
        
        Object.keys(this.diseaseConfig).forEach(diseaseType => {
            const config = this.diseaseConfig[diseaseType];
            const html = this.generateForDisease(diseaseType);
            const outputPath = path.join(this.rootPath, config.folder, 'index.html');
            
            results[diseaseType] = {
                html: html,
                outputPath: outputPath,
                config: config
            };
        });

        return results;
    }

    /**
     * ファイルに書き込み
     */
    writeToFile(diseaseType, html) {
        const config = this.diseaseConfig[diseaseType];
        const outputPath = path.join(this.rootPath, config.folder, 'index.html');
        
        // ディレクトリが存在しない場合は作成
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(outputPath, html, 'utf8');
        return outputPath;
    }

    /**
     * 全感染症のHTMLファイルを生成・出力
     */
    buildAll() {
        const results = this.generateAll();
        const outputPaths = {};

        Object.keys(results).forEach(diseaseType => {
            const result = results[diseaseType];
            const outputPath = this.writeToFile(diseaseType, result.html);
            outputPaths[diseaseType] = outputPath;
            console.log(`Generated: ${outputPath}`);
        });

        return outputPaths;
    }
}

// Node.jsでの直接実行時
if (require.main === module) {
    const generator = new TemplateGenerator();
    try {
        const outputPaths = generator.buildAll();
        console.log('All templates generated successfully:', outputPaths);
    } catch (error) {
        console.error('Template generation failed:', error);
        process.exit(1);
    }
}

module.exports = TemplateGenerator;