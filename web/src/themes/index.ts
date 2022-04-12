import { DefaultTheme } from 'styled-components';
import { typographyVariants } from './typographyVariants';

import { ColorsType } from 'src/types/colorsType';

const colors: ColorsType = {
  background: {
    main: {
      color: '#f2f2f7',
      contrastColor: '#282a36',
    }
  },
  primary: {
    main: {
      color: '#44475a',
      contrastText: '#ffffff',
    },
    dark: {
      color: '#666',
    },
    light: {
      color: '#ffffff',
      contrastText: '#acacac',
    },
  },
  secondary: {
    main: {
      color: '#c43324',
      contrastText: '#ffffff',
    },
  }
}

export const breakpoints = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};

const theme: DefaultTheme = {
  colors,
  typographyVariants,
  borderRadius: '4px',
  transition: '500ms ease-in-out',
  fontFamily: '\'Poppins\', sans-serif',
}

export default theme;
