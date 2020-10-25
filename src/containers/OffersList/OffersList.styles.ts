import styled from 'styled-components';

const Wrapper = styled.div`
  @media (min-width: 1020px) {
    overflow-y: scroll;
    width: 55%;
    position: fixed;
    top: 191px;
    bottom: 0;
    left: 0;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
`;

const ListOfItems = styled.ul`
  padding: 0;
  margin: 0;
`;

export default {
  Wrapper,
  ListOfItems,
};
