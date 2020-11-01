import styled from 'styled-components';

const DropDownDots = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.styles.secondary.background};
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  margin-top: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
`;

const ListWrapper = styled.ul`
  margin: 0;
  min-width: 150px;
  padding: 8px 0 8px 0;
  white-space: nowrap;
  line-height: 1.5;
`;

export default {
  DropDownDots,
  ContentWrapper,
  ListWrapper,
};
