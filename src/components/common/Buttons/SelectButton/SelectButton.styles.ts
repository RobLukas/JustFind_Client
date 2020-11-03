import styled from 'styled-components';

const Select = styled.select`
  display: inherit;
  color: ${({ theme }) => theme.styles.primary.color};
  background: ${({ theme }) => theme.styles.secondary.background};
  cursor: pointer;
  font-size: 18px;
  border-radius: 3px;
  padding: 15px;
  border: 0;
  outline: 0;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
`;

export default {
  Select,
};
