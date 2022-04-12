import styled from 'styled-components';
import { get } from 'lodash';

export default function Divider({ ...props }) {
  return (
    <DividerWrapper
      {...props}
    />
  );
}

const DividerWrapper = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

  margin: 20px 0;
`;
