export const DISEASE_THEMES = {
  aids: {
    id: 'aids',
    name: 'エイズとの闘い',
    primary: '#66c2a5',
    secondary: '#8dd3b8',
    accent: '#4dab8e',
  },
  tuberculosis: {
    id: 'tuberculosis',
    name: '結核との闘い',
    primary: '#fc8d62',
    secondary: '#fda882',
    accent: '#e87a4f',
  },
  malariae: {
    id: 'malariae',
    name: 'マラリアとの闘い',
    primary: '#8da0cb',
    secondary: '#a8b7d8',
    accent: '#7589b8',
  },
};

export function getTheme(diseaseId) {
  return DISEASE_THEMES[diseaseId] || DISEASE_THEMES.aids;
}
