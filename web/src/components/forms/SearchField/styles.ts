import { get } from 'lodash';
import styled from 'styled-components';

import { propToStyle } from 'src/themes/utils/propToStyle';
import { Text } from 'src/components/foundation/Text';

export const InputBase = styled(Text)`
  background: ${({ theme }) => theme.colors.primary.main.color};
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  
  display: block;

  outline: 0;

  padding: 11px 50px;
  width: 100%;

  ${propToStyle('visibility')};

  ::placeholder {
    color: ${({ theme, color }) => `${get(theme, `colors.${color}.color`)}AA`};
  }
`;

export const InputWrapper = styled.div`
  margin: 10px 0;
  transition: ${({ theme }) => theme.transition};
`;

InputBase.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};
