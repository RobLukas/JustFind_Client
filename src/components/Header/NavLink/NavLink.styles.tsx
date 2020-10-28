import styled from 'styled-components';
import { SvgIcon } from '@material-ui/core';

const NavLink = styled.a`
  @media (max-width: 1020px) {
    display: none;
  }
  margin: 0 20px 0 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.styles.secondary.color};
  &:hover {
    .MuiSvgIcon-root {
      fill: #ff4081;
      transition: unset;
    }
    color: #ff4081;
  }
`;

const MuiIcon = styled(SvgIcon)`
  margin-right: 12px;
` as typeof SvgIcon;

export default { NavLink, MuiIcon };
