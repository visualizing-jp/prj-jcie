export const DISEASE_THEMES = {
  aids: {
    id: 'aids',
    name: 'HIV/エイズとの闘い',
    primary: '#ff6b6b',
    secondary: '#ff8e8e',
    accent: '#e85555',
  },
  tuberculosis: {
    id: 'tuberculosis',
    name: '結核との闘い',
    primary: '#4ecdc4',
    secondary: '#6dd5d0',
    accent: '#3bb8b0',
  },
  malariae: {
    id: 'malariae',
    name: 'マラリアとの闘い',
    primary: '#f4a620',
    secondary: '#f6b84a',
    accent: '#e89813',
  },
};

export function getTheme(diseaseId) {
  return DISEASE_THEMES[diseaseId] || DISEASE_THEMES.aids;
}
