import { ITheme } from '../common/interfaces';
import { injectStyle } from './style-helper';

/* eslint-disable import/prefer-default-export */
export const CodefeeTheme: ITheme = {
  '--color-default': '#424242',
  '--color-default-light': '#6d6d6d',
  '--color-default-dark': '#1b1b1b',
  '--color-default-on': '#ffffff',
  '--color-primary': '#00838f',
  '--color-primary-light': '#4fb3bf',
  '--color-primary-dark': '#005662',
  '--color-primary-on': '#ffffff',
  '--color-secondary': '#ffc107',
  '--color-secondary-light': '#fff350',
  '--color-secondary-dark': '#c79100',
  '--color-secondary-on': '#000000',
  '--color-info': '#0074bd',
  '--color-info-light': '#58a2ef',
  '--color-info-dark': '#00498b',
  '--color-info-on': '#ffffff',
  '--color-success': '#28a745',
  '--color-success-light': '#64da73',
  '--color-success-dark': '#007717',
  '--color-success-on': '#ffffff',
  '--color-warning': '#fb8c00',
  '--color-warning-light': '#ffbd45',
  '--color-warning-dark': '#c25e00',
  '--color-warning-on': '#ffffff',
  '--color-error': '#b00020',
  '--color-error-light': '#e94948',
  '--color-error-dark': '#790000',
  '--color-error-on': '#ffffff',
  '--color-bg': '#f5f5f5',
  '--color-bg-light': '#f9f9f9',
  '--color-bg-dark': '#9c9a9a',
  '--color-bg-on': '#000000',
  '--color-shadow': 'rgba(109, 109, 109, 0.3)',
  '--color-shadow-light': 'rgba(109, 109, 109, 0.1)',
  '--color-shadow-dark': 'rgba(109, 109, 109, 0.5)',
  '--font-family-primary': 'Roboto, sans-serif',
  '--font-family-secondary': 'Segoe UI, sans-serif',
  '--transition-hover': '0.1s',
  '--transition-toggle': '0.3s',
};

/**
 * Function to load theme
 * @param theme Main Theme
 * @param overrides Theme properties to overrides
 * @returns
 */
export const loadTheme = <T extends ITheme>(theme?: ITheme, overrides?: T) => {
  const themeInUse = theme ? theme : CodefeeTheme;

  const resultTheme = {
    ...themeInUse,
    ...overrides,
  };

  const themeStyle = `
    :root {
      ${Object.keys(resultTheme)
        .map((key: keyof ITheme) => {
          return `${key}: ${resultTheme[key]};`;
        })
        .join('\n')};
    }
  `;

  injectStyle(themeStyle);
};
