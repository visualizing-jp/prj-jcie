import { DISEASE_THEMES } from './theme.js';

const VALID_DISEASE_IDS = Object.keys(DISEASE_THEMES);
const DEFAULT_DISEASE_ID = 'aids';

/**
 * URLパスから現在のdisease IDを判別する
 */
export function getDiseaseIdFromUrl() {
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];

  if (first && VALID_DISEASE_IDS.includes(first)) {
    return first;
  }

  return DEFAULT_DISEASE_ID;
}
