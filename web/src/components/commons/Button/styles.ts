// @ts-nocheck
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { get } from 'lodash';

import { propToStyle } from 'src/themes/utils/propToStyle';

const buttonDefault = css`
  color: ${({ theme, color }) => get(theme, `colors.${color}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export const ButtonBase = styled.button`
  border: 0;
  cursor: pointer;
  padding: 10px 14px;
  
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${buttonDefault};

  ${propToStyle('position')};
  ${propToStyle('background')};
  
  background-color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

  &:hover,
  &:focus {
    opacity: .8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .5;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`;

ButtonBase.propTypes = {
  fullWidth: PropTypes.bool,
};

ButtonBase.defaultProps = {
  fullWidth: false,
};
