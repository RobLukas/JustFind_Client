import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle(({ theme }) => {
  return {
    body: {
      margin: 0,
      backgroundColor: theme.styles.primary.background,
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 300,
    },
    'div#root': {
      height: '100%',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    '.MuiIconButton-root:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08) !important',
    },
    '.leaflet-container': {
      background: `${theme.styles.primary.background} !important`,
      height: '100%',
      width: '100%',
    },
    '.leaflet-bar': {
      display: 'none',
    },
    '.leaflet-popup-content': {
      margin: '0 !important',
    },
    '::-webkit-scrollbar': {
      width: 11,
      backgroundColor: theme.styles.scrollbar.background,
      borderRadius: 100,
    },
    '::-webkit-scrollbar:hover': {
      backgroundColor: theme.styles.scrollbar.hover,
    },
    /* Handle */
    '::-webkit-scrollbar-thumb': {
      borderRadius: 100,
      background: theme.styles.scrollbar.thumbBackground,
      minHeight: 13,
    },
  };
});

export default GlobalStyles;
