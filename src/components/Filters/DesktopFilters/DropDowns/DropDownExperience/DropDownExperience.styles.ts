import styled from 'styled-components';

const DropDownExperience = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.styles.secondary.background};
  box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  margin-top: 5px;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, 0);
`;

const ListWrapper = styled.ul({
  margin: 0,
  padding: '8px 0 8px 0',
  whiteSpace: 'nowrap',
  lineHeight: 1.5,
});

export default {
  DropDownExperience,
  ListWrapper,
  Wrapper,
};
