import styled from 'styled-components';

const JobTitle = styled.span(({ theme }) => ({
  '@media (max-width: 1020px)': {
    whiteSpace: 'initial',
    overflow: 'initial',
    textOverflow: 'initial',
  },
  color: theme.styles.primary.color,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: 16,
  margin: '0 5px 0 0',
  fontWeight: 600,
  lineHeight: '23px',
}));

export default {
  JobTitle,
};
