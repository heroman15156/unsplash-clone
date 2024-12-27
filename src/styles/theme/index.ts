export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F7F7F7',
      100: '#EEEEEE',
      200: '#E1E1E1',
      300: '#CFCFCF',
      400: '#B1B1B1',
      500: '#767676',
      600: '#666666',
      700: '#4D4D4D',
    },
  },
  typography: {
    family: {
      sans: `-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue",
        Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif`,
    },
    size: {
      xs: '12px',
      sm: '14px',
      md: '15px',
      lg: '24px',
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 800,
    },
  },
  size: {
    header: {
      height: '62px',
    },
    maxWidth: '1280px',
  },
  zIndex: {
    header: 100,
    modal: 1000,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
  },
};

export type CustomTheme = typeof theme;
