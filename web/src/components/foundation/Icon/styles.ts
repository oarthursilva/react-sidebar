// @ts-nocheck
import { get } from 'lodash';
import styled, { css } from 'styled-components';

const paragraph1 = css`
  font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
`;

export const TextStyleVariantMap = {
  paragraph1
};

export const IconBase = styled.i`
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

  ${({ variant }) => TextStyleVariantMap[variant]};
  ::before {
    background: ${({ theme, background }) => get(theme, `colors.${background}.color`)};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;
