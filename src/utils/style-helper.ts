import { ITheme } from '../common/interfaces';
/* eslint-disable import/prefer-default-export */

/**
 * Convert px to rem
 * @param px Px intended
 * @param basePx Base FontSize Px to compute resulting rem. Default is 16px.
 */
export const rem = (px: number, basePx: number = 16) => {
  return `${px / basePx}rem`;
};

/**
 * Get Custom CSS Variable
 */
export const cvar = (key: keyof ITheme) => {
  return `var(${key})`;
};


/**
 * Utility function to add CSS in multiple passes.
 * @param {string} styleString
 */
export const injectStyle = (styleString) => {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}
