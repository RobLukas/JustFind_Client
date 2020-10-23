import styled from 'styled-components';
import { SvgIcon } from '@material-ui/core';

const AddressTitle = styled.span(({ theme }) => ({
  verticalAlign: 'middle',
  textAlign: 'center',
  color: theme.styles.secondary.color,
  marginLeft: 3,
  fontSize: 11,
}));

const MuiIcon = styled(SvgIcon)`
  &.MuiSvgIcon-root {
    vertical-align: 'text-top';
    font-size: 0.875rem;
  }
` as typeof SvgIcon;

export default { AddressTitle, MuiIcon };
