import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';

const DropDownSalary = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.styles.secondary.background};
  width: 200px;
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  margin-top: 5px;
  padding: 12px 16px;
  z-index: 1;
  left: 50%;
  right: 0;
  transform: translate(-50%, 0);
`;

const Title = styled.div`
  color: ${({ theme }) => theme.styles.filter.button.color};
  padding-bottom: 20px;
  font-size: 14px;
`;

const SliderMui = styled(Slider)`
  &.MuiSlider-root {
    color: #ff4081;
  }
`;

export default {
  DropDownSalary,
  Wrapper,
  Title,
  SliderMui,
};
