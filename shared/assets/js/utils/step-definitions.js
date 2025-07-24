/**
 * Step Definitions - 全感染症共通のステップ論理名定義
 * 3つの感染症（AIDS、結核、マラリア）で統一的に使用するステップ構造を定義
 */

window.STEP_DEFINITIONS = {
  // ===============================
  // オープニングセクション
  // ===============================
  'opening': { 
    type: 'fixed', 
    description: 'オープニング画面（step0）',
    contentType: 'title-screen'
  },

  // ===============================
  // 背景・歴史セクション（step1-9）
  // ===============================
  'intro': { 
    type: 'fixed', 
    description: 'イントロダクション（step1）',
    contentType: 'text'
  },
  
  'treatment-progress': { 
    type: 'fixed', 
    description: '治療の進歩（step2）',
    contentType: 'text'
  },
  
  'history-overview': { 
    type: 'fixed', 
    description: '歴史的経緯（step3）',
    contentType: 'text'
  },
  
  'early-expansion': { 
    type: 'fixed', 
    description: '1990年代の拡大（step4）',
    contentType: 'text'
  },
  
  'peak-crisis': { 
    type: 'fixed', 
    description: '1997年ピーク（step5）',
    contentType: 'text'
  },
  
  'treatment-breakthrough': { 
    type: 'fixed', 
    description: '治療法の突破口（step6）',
    contentType: 'text'
  },
  
  'death-statistics': { 
    type: 'fixed', 
    description: 'エイズの死者数（step7）',
    contentType: 'chart'
  },
  
  'regional-disparity': { 
    type: 'fixed', 
    description: '治療機会の地域格差（step8）',
    contentType: 'chart'
  },
  
  'mother-child-prevention': { 
    type: 'fixed', 
    description: '母子感染防止の成果（step9）',
    contentType: 'chart'
  },
  
  'episode-intro': { 
    type: 'fixed', 
    description: 'ひとりひとりのエピソード導入（step10）',
    contentType: 'text'
  },

  // ===============================
  // 感染症別特有ステップ
  // ===============================
  'drug-resistance': { 
    type: 'fixed', 
    description: '薬剤耐性の課題（結核特有）',
    contentType: 'chart'
  },

  // マラリア特有ステップ
  'artemisinin-resistance': { 
    type: 'fixed', 
    description: 'アルテミシニン耐性の問題（マラリア特有）',
    contentType: 'text'
  },
  
  'multi-drug-resistance': { 
    type: 'fixed', 
    description: '多剤耐性マラリア（マラリア特有）',
    contentType: 'text'
  },
  
  'funding-challenges': { 
    type: 'fixed', 
    description: '資金不足の課題（マラリア特有）',
    contentType: 'chart'
  },
  
  'prevention-shortage': { 
    type: 'fixed', 
    description: '予防道具の不足（マラリア特有）',
    contentType: 'text'
  },
  
  'climate-impact': { 
    type: 'fixed', 
    description: '気候変動の影響（マラリア特有）',
    contentType: 'text'
  },
  
  'global-responsibility': { 
    type: 'fixed', 
    description: '世界的な責任（マラリア特有）',
    contentType: 'text'
  },


  // ===============================
  // 都市エピソードセクション（step11-17）
  // ===============================
  'city-episodes': { 
    type: 'dynamic', 
    description: '都市別エピソード（step11-17）',
    contentType: 'mixed',
    dataSource: 'cities-timeline.json',
    template: 'city-story'
  },

  // ===============================
  // 現在の課題セクション
  // ===============================
  'remaining-challenges': { 
    type: 'fixed', 
    description: 'それでもなお存在する課題',
    contentType: 'text'
  },
  
  'solution-approaches': { 
    type: 'fixed', 
    description: '解決に向けて',
    contentType: 'text'
  },
  
  'funding-crisis': { 
    type: 'fixed', 
    description: '資金不足の問題',
    contentType: 'text'
  },
  
  'solidarity-message': { 
    type: 'fixed', 
    description: '連帯の力',
    contentType: 'text'
  },
  
  'call-to-action': { 
    type: 'fixed', 
    description: '行動への呼びかけ',
    contentType: 'text'
  },


  // ===============================
  // フッターセクション
  // ===============================
  'footer': { 
    type: 'fixed', 
    description: 'フッター・クレジット',
    contentType: 'footer'
  }
};

/**
 * 感染症別の設定差分
 * 各感染症で異なる都市数やコンテンツ量の調整用
 */
window.DISEASE_STEP_CONFIG = {
  'aids': {
    // AIDSは現在のコンテンツ構造に合わせる
    'city-episodes': {
      expectedCityCount: 7, // step11-17
      startStepHint: 11,
      endStepHint: 17
    }
  },
  
  'tuberculosis': {
    // 結核は将来のコンテンツ追加用
    'city-episodes': {
      expectedCityCount: 5,
      startStepHint: 11,
      endStepHint: 15
    }
  },
  
  'malariae': {
    // マラリアは将来のコンテンツ追加用
    'city-episodes': {
      expectedCityCount: 7,
      startStepHint: 11,
      endStepHint: 17
    }
  }
};

/**
 * ステップタイプの説明
 */
window.STEP_TYPE_INFO = {
  'fixed': 'コンテンツが固定されたステップ',
  'dynamic': 'データファイルから動的に生成されるステップ',
  'special': '特別な位置・機能を持つステップ'
};

/**
 * デバッグ用：ステップ定義の妥当性チェック
 */
window.validateStepDefinitions = function() {
  const errors = [];
  
  // 必須ステップの存在確認
  const required = ['opening', 'footer'];
  for (const step of required) {
    if (!STEP_DEFINITIONS[step]) {
      errors.push(`必須ステップ '${step}' が定義されていません`);
    }
  }
  
  // dynamicタイプの設定確認
  for (const [name, def] of Object.entries(STEP_DEFINITIONS)) {
    if (def.type === 'dynamic' && !def.dataSource) {
      errors.push(`動的ステップ '${name}' にdataSourceが指定されていません`);
    }
  }
  
  if (errors.length > 0) {
    console.error('ステップ定義エラー:', errors);
    return false;
  }
  
  console.log('ステップ定義は正常です');
  return true;
};