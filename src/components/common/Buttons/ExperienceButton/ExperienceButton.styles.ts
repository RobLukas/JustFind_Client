import styled from 'styled-components';

import SvgIcon from '@material-ui/icons/ExpandMore';

const ExperienceButton = styled.div`
  display: inline-block;
  position: relative;
`;

const DropDownButton = styled.button`
  color: ${({ theme }) => theme.styles.filter.button.color};
  background: ${({ theme }) => theme.styles.secondary.background};
  margin-left: 0;
  cursor: pointer;
  padding: 0 7px 0 12px;
  margin: 0;
  box-shadow: none;
  text-transform: none;
  height: 35px;
  align-items: center;
  font-size: 0.8rem;
  border-radius: 20px;
  display: flex;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.5px;
  outline: 0;
  border: 0;
  -webkit-tap-highlight-color: transparent;
  &.MuiSvgIcon-root {
    fill: ${({ theme }) => theme.styles.filter.button.color};
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.span`
  vertical-align: super;
  margin: 0 3px;
`;

const MuiIcon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    font-size: 1.2rem;
    line-height: inherit;
  }
` as typeof SvgIcon;

export default { ExperienceButton, DropDownButton, Title, MuiIcon };
