import { propToStyle } from 'src/themes/utils/propToStyle';
import styled from 'styled-components';

export const LogoWrapper = styled.div`
  overflow: hidden;
  display: inline-block;

  height: 30px;
  width: 30px;

  ${propToStyle('margin')};
`;

