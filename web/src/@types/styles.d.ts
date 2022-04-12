import 'styled-components';

import { ColorsType } from '../types/colorsType';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType,
    borderRadius: string;
    typographyVariants: TypographyVariantsType,
    transition: string;
    fontFamily: string;
  }
}
