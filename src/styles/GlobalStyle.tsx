import { css, Global } from '@emotion/react';

import { CustomTheme } from './theme';

const globalStyles = (theme: CustomTheme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${theme.typography.family.sans};
    font-size: ${theme.typography.size.sm};
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }
  #root {
    width: 100%;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const GlobalStyle = () => <Global styles={globalStyles} />;
