import { CustomTheme } from '../styles/theme';

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
