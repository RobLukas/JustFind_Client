import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const DotsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 35px;
  height: 35px;
`;

const MoreHorizMuiIcon = styled(MoreHorizIcon)`
  display: block;
`;

export default {
  DotsButton,
  MoreHorizMuiIcon,
};
