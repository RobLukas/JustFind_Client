import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  font-size: 14;
  left: 0;
  top: 0;
  height: 70;
  width: 100%;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.styles.secondary.color};
`;

export default {
  Wrapper,
  Title,
};
