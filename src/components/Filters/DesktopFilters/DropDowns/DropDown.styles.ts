import styled from 'styled-components';

const DropDownListItem = styled.li`
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
  DropDownListItem,
};
