import styled from 'styled-components';

const MobileFilters = styled.div`
  @media (min-width: 1020px) {
    display: none;
  }
  display: flex;
  margin: 10px;
`;

const Separate = styled.div`
  margin-left: 10px;
`;

export default {
  MobileFilters,
  Separate,
};
