import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'src/themes/GlobalStyle';
import theme from 'src/themes';

interface IAppGlobalProvider {
  children: ReactNode | ReactNode[];
}

export default function AppGlobalProvider({ children }: IAppGlobalProvider) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
