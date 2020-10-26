import styled from 'styled-components';

const NewBar = styled.span(({ theme }) => ({
  '@media (max-width: 1020px)': {
    marginLeft: 'auto',
  },
  color: theme.styles.offers.newTitle.color,
  backgroundColor: theme.styles.offers.newTitle.background,
  padding: '4px 7px',
  borderRadius: 16,
  marginLeft: 20,
  whiteSpace: 'nowrap',
  fontWeight: 400,
  verticalAlign: 'bottom',
  fontSize: 12,
}));

export default {
  NewBar,
};
