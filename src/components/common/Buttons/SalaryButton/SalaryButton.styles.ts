import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const SalaryButton = styled.div`
  margin: 0 10px 0 0;
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

const ExpandMoreMuiIcon = styled(ExpandMoreIcon)`
  &.MuiSvgIcon-root {
    font-size: 1.2rem;
    line-height: inherit;
  }
`;

const AttachMoneyMuiIcon = styled(AttachMoneyIcon)`
  &.MuiSvgIcon-root {
    font-size: 1rem;
  }
`;

export default {
  SalaryButton,
  DropDownButton,
  ExpandMoreMuiIcon,
  AttachMoneyMuiIcon,
};
