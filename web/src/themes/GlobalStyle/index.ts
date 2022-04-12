import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;    
  }
    
  ${normalize}
  html, 
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  /* full height layout */
  html,
  body {
    background: ${({ theme }) => theme.colors.background.main.color};

    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
