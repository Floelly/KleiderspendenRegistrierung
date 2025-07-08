const colors = {
  light: '#fdfaf5',
  dark: '#1e1e1e',
  primary: '#b95829',
  secondary: '#6e4f3a', // Gedämpftes Braun
  accent: '#e87c4a', // Satter Orange-Ton

  secondary2: '#b85c38', // Rostbraun
  accent2: '#f4a261', // Warmes Orange
  further1: '#ffffff',
  further2: '#e0dcd3',
  further3: '#2c2c2c',
  further4: '#3a3a3a',
};


export const Theme = {
  colors: {
    darkBg: colors.dark,
    lightBg: colors.light,
    darkText: colors.light,
    lightText: colors.dark,

    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
};