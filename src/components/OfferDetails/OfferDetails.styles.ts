import styled from 'styled-components';

const OfferDetails = styled.div(({ theme }) => ({
  '@media (max-width: 1020px)': {
    height: 86,
  },
  height: 77,
  cursor: 'pointer',
  backgroundColor: theme.styles.secondary.background,
  borderRadius: 6,
  margin: '0 10px 12px 10px',
  padding: 0,
  display: 'flex',
}));

const OfferDetailsWrapper = styled.div({
  width: '100%',
  display: 'flex',
});

const LogoCompanyWrapper = styled.div({
  flex: '0 0 112px',
  position: 'relative',
});

const LinkWrapper = styled.a`
  display: flex;
  text-decoration: none;
  min-width: 0px;
  height: 100%;
  font-size: 11px;
  align-items: center;
  flex: 1;
`;

const DescriptionWrapper = styled.div({
  width: '100%',
  paddingRight: 20,
  minWidth: 0,
});

const TitleWrapper = styled.div({
  '@media (max-width: 1020px)': {
    display: 'block',
  },
  display: 'flex',
  alignItems: 'center',
});

const SalaryWrapper = styled.div({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
});

const AddressWrapper = styled.div({
  '@media (max-width: 1020px)': {
    display: 'none',
  },
  display: 'flex',
  alignItems: 'center',
  marginTop: 6,
});

const SeparateCompanyInfo = styled.div`
  margin-left: 20px;
`;

const SeparateDateAgoFromSalary = styled.div`
  margin-right: 21px;
`;

const TechnologyWrapper = styled.div`
  margin-left: auto;
  white-space: nowrap;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

export default {
  OfferDetails,
  OfferDetailsWrapper,
  LogoCompanyWrapper,
  LinkWrapper,
  DescriptionWrapper,
  TitleWrapper,
  SalaryWrapper,
  AddressWrapper,
  SeparateCompanyInfo,
  TechnologyWrapper,
  SeparateDateAgoFromSalary,
};
