// @ts-nocheck
import styled, { css } from 'styled-components';
import { get } from 'lodash';

import { breakpointsMedia } from 'src/themes/utils/breakpointsMedia';
import { propToStyle } from 'src/themes/utils/propToStyle';

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
  md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
})}
`;

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const paragraph2 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph2XS.fontSize};
    font-weight: ${theme.typographyVariants.paragraph2XS.fontWeight};
    line-height: ${theme.typographyVariants.paragraph2XS.lineHeight};
  `}
  ${breakpointsMedia({
  md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.paragraph2.fontSize};
        font-weight: ${theme.typographyVariants.paragraph2.fontWeight};
        line-height: ${theme.typographyVariants.paragraph2.lineHeight};
      `}
    `,
})}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariantMap = {
  title,
  paragraph1,
  paragraph2,
  smallestException,
};

export const TextBase = styled.span`
  ${propToStyle('opacity')};

  word-wrap: break-word;
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${({ variant }) => TextStyleVariantMap[variant]};
`;
