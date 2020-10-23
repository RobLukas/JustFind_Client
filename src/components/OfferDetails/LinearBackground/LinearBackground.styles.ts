import styled from 'styled-components';

interface IProps {
  backgroundColor: string;
}

const LinearBackground = styled.div<IProps>(({ backgroundColor }) => ({
  background: `linear-gradient(${backgroundColor})`,
  width: 5,
  borderRadius: '6px 0 0 6px',
}));

export default {
  LinearBackground,
};
