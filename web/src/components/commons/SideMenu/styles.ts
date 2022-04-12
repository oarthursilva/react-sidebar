// @ts-nocheck
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const menuCollapsed = css`
  width: 100px;
`;

const menuDefault = css`
  width: 300px;
`;

const logoCollapsed = css`
  display: contents;
`;

const logoDefault = css`
  display: flex;
  justify-content: space-between;
`;

export const SideMenuWrapper = {
  Menu: styled.div`
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background.main.contrastColor}};

    height: 100%;
    padding: 30px 23px;
    position: fixed;
    
    ${({ collapse }) => (collapse ? menuCollapsed : menuDefault)};

    transition: ${({ theme }) => theme.transition};
  `,

  Header: styled.div`
    ${({ collapse }) => (collapse ? logoCollapsed : logoDefault)};
  `,

  Toggle: styled.div`
  `,
};

SideMenuWrapper.Menu.propTypes = {
  collapse: PropTypes.bool,
}

SideMenuWrapper.Menu.defaultProps = {
  collapse: false,
};
