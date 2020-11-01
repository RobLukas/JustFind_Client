import styled from 'styled-components';

const CategoryButton = styled.button`
  background: ${({ theme }) => theme.styles.secondary.background};
  color: ${({ theme }) => theme.styles.filter.button.color};
  min-width: 40px;
  cursor: pointer;
  margin-right: 15px;
  font-family: inherit;
  padding: 0 12px;
  box-shadow: none;
  text-transform: none;
  height: 35px;
  line-height: 35px;
  font-size: 12.6px;
  border-radius: 20px;
  text-align: center;
  display: flex;
  position: relative;
  text-decoration: none;
  letter-spacing: 0.5px;
  outline: 0;
  border: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
`;

export default { CategoryButton };
