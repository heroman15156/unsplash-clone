import { ThemeProvider } from '@emotion/react';

import { QueryBoundary } from './components/Error/QueryBoundary.tsx';
import DefaultLayout from './layouts';
import Providers from './providers';
import RootRoutes from './routes';
import { GlobalStyle } from './styles/GlobalStyle.tsx';
import { theme } from './styles/theme';

function App() {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <QueryBoundary>
          <DefaultLayout>
            <RootRoutes />
          </DefaultLayout>
          <GlobalStyle />
        </QueryBoundary>
      </ThemeProvider>
    </Providers>
  );
}

export default App;
