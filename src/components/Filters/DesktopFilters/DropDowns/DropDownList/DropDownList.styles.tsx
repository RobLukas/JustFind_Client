import styled from 'styled-components';

const DropDownList = styled.div`
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
  min-width: 100px;
  padding: 8px 0 8px 0;
  white-space: nowrap;
  line-height: 1.5;
`;

const ListItem = styled.li`
  text-align: center;
  justify-content: center;
  font-size: 14px;
  display: flex;
  color: ${({ theme }) => theme.styles.filter.button.color};
  cursor: pointer;
  margin: 0;
  padding: 7px 24px 7px 24px;
  &:hover {
    background: ${({ theme }) => theme.styles.dropdown.button.hover};
  }
`;

export default {
  DropDownList,
  ContentWrapper,
  ListWrapper,
  ListItem,
};
