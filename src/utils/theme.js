export const DISEASE_THEMES = {
  aids: {
    id: 'aids',
    name: 'エイズとの闘い',
    primary: '#da3244',
    secondary: '#e45a6a',
    accent: '#c22a3b',
  },
  tuberculosis: {
    id: 'tuberculosis',
    name: '結核との闘い',
    primary: '#354cf0',
    secondary: '#5a6ef4',
    accent: '#2a3ed0',
  },
  malariae: {
    id: 'malariae',
    name: 'マラリアとの闘い',
    primary: '#f2df4a',
    secondary: '#f5e76e',
    accent: '#d9c83e',
  },
};

export function getTheme(diseaseId) {
  return DISEASE_THEMES[diseaseId] || DISEASE_THEMES.aids;
}
