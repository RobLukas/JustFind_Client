import styled from 'styled-components';

const PopupBox = styled.div`
  display: flex;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 13px;
  margin-top: 0;
  margin: 0;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 40px;
  display: flex;
  flex-shrink: 0;
`;

const CompanyLogo = styled.img`
  margin: auto;
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DescWrapper = styled.div`
  flex-direction: column;
  display: flex;
  min-width: 140px;
  margin-left: 7px;
  text-align: left;
`;

const CompanyName = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const JobTitle = CompanyName;

const Salary = styled.span`
  color: #1ec66c;
  font-weight: 400;
  white-space: nowrap;
`;

export default {
  PopupBox,
  CompanyName,
  LogoWrapper,
  JobTitle,
  CompanyLogo,
  DescWrapper,
  Salary,
};
