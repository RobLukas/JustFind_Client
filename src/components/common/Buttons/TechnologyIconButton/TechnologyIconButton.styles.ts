import styled from 'styled-components';

const TechnologyIconButton = styled.div`
  max-width: 40px;
  min-width: 22px;
  margin-right: 17px;
  display: block;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  background: linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168));
  padding-bottom: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  text-transform: none;
  width: 35px;
  height: 35px;
  position: relative;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: all 0.3s ease 0s;
  &:hover {
    color: white;
    fill: white;
    background-position: 35px center;
  }
`;

const Icon = styled.svg`
  fill: rgb(255, 255, 255);
`;

const TechnologyTitle = styled.span`
  color: ${({ theme }) => theme.styles.secondary.color};
  font-size: 0.7rem;
  padding-top: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  display: inline-block;
  text-align: center;
`;

export default { TechnologyIconButton, IconWrapper, Icon, TechnologyTitle };
