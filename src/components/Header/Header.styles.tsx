import styled from 'styled-components';

const Header = styled.header`
  @media (min-width: 1020px) {
    height: 65px;
  }
  background: ${({ theme }) => theme.styles.secondary.background};
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  @media (min-width: 1020px) {
    margin: 0 25px 0 15px;
  }
  width: 160px;
  height: 55px;
`;

export default {
  Header,
  Logo,
};
