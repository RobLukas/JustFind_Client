import styled from 'styled-components';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const SwitchModeButton = styled.div`
  margin-left: auto;
`;

const SunnyMuiIcon = styled(WbSunnyIcon)`
  &.MuiSvgIcon-root {
    font-size: 22px;
    vertical-align: middle;
  }
`;

const BrightnessMuiIcon = styled(Brightness3Icon)`
  &.MuiSvgIcon-root {
    font-size: 22px;
    transform: scaleX(-1);
    vertical-align: middle;
  }
`;

export default {
  SwitchModeButton,
  SunnyMuiIcon,
  BrightnessMuiIcon,
};
