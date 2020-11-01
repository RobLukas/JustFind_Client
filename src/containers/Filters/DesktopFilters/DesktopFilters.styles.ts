import styled from 'styled-components';

const FilterDesktop = styled.div`
  @media (max-width: 1019px) {
    display: none;
  }
  padding: 0 20px 0 18px;
  height: 126px;
  display: flex;
  align-items: center;
  padding-top: 3px;
`;

const FilterWrapper = styled.div`
  width: 100%;
`;

const CityFilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TechnologyFilterWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

const DropDownsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  float: right;
`;

export default {
  FilterDesktop,
  FilterWrapper,
  CityFilterWrapper,
  TechnologyFilterWrapper,
  DropDownsWrapper,
};
